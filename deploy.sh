#!/bin/bash
set -e

# Configuration
REMOTE=$(git remote get-url origin)
DEPLOY_BRANCH="gh-pages"
CLIENT_DIR="client"

echo "Starting deployment to ubacm.org..."

# Check if client directory exists
if ! [ -d "$CLIENT_DIR" ]; then
    echo "Client directory '$CLIENT_DIR' not found. Make sure you're in the project root."
    exit 1
fi

# Navigate to client directory
cd $CLIENT_DIR

# Check for package manager and install dependencies
echo "Checking for package manager..."
if command -v npm &> /dev/null; then
    PACKAGE_MANAGER="npm"
    BUILD_COMMAND="npm run build"
    INSTALL_COMMAND="npm install"
elif command -v yarn &> /dev/null; then
    PACKAGE_MANAGER="yarn"
    BUILD_COMMAND="yarn build"
    INSTALL_COMMAND="yarn"
elif command -v pnpm &> /dev/null; then
    PACKAGE_MANAGER="pnpm"
    BUILD_COMMAND="pnpm build"
    INSTALL_COMMAND="pnpm install"
else
    echo "No package manager found (npm, yarn, or pnpm). Please install one."
    exit 1
fi

echo "Using $PACKAGE_MANAGER in $CLIENT_DIR directory"

# Install dependencies if node_modules doesn't exist
if ! [ -d "node_modules" ]; then
    echo "Installing dependencies..."
    $INSTALL_COMMAND
fi

# Clean previous deployment
echo "Removing previous deployment..."
rm -rf build || true

# Build the project
echo "Building deployment..."
if ! $BUILD_COMMAND; then
    echo "Failed to build deployment, exiting."
    exit 1
fi

# Check if build directory exists
if ! [ -d "build" ]; then
    echo "Build directory 'build' not found. Check your build configuration."
    exit 1
fi

# Navigate to build directory
cd build

# Create CNAME file for custom domain
echo "ubacm.org" > CNAME

echo "Initializing git in build directory..."
git init . -b gh-pages
git remote add origin $REMOTE

# Fetch existing gh-pages branch (ignore errors if it doesn't exist)
echo "Fetching existing deployment branch..."
git fetch origin $DEPLOY_BRANCH 2>/dev/null || echo "No existing $DEPLOY_BRANCH branch found (this is normal for first deployment)"

echo "Deploying to GitHub Pages..."
git add .
git commit -m "Deployment to ubacm.org - $(date)"

# Push to gh-pages branch
if git push --force origin gh-pages; then
    echo "Deployment successful!"
    echo "Your site will be available at: https://ubacm.org"
    echo "Note: It may take a few minutes for changes to appear"
else
    echo "Deployment failed"
    exit 1
fi
