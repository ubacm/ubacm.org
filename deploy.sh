#!/bin/bash
set -e
REMOTE=$(git remote get-url origin)
DEPLOY_BRANCH="gh-pages"
CLIENT_DIR="client"

if ! [ -d "$CLIENT_DIR" ]; then
    echo "Client directory '$CLIENT_DIR' not found. Make sure you're in the project root."
    exit 1
fi

cd $CLIENT_DIR

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

if ! [ -d "node_modules" ]; then
    $INSTALL_COMMAND
fi

rm -rf build || true

if ! $BUILD_COMMAND; then
    echo "Build failed, exiting."
    exit 1
fi

if ! [ -d "build" ]; then
    echo "Build directory 'build' not found. Check your build configuration."
    exit 1
fi

cd build
echo "ubacm.org" > CNAME
cp index.html 404.html
git init . -b gh-pages
git remote add origin $REMOTE
git fetch origin $DEPLOY_BRANCH 2>/dev/null || true
git add .
git commit -m "Deployment to ubacm.org - $(date)"

if git push --force origin gh-pages; then
    echo "Deployment successful!"
else
    echo "Deployment failed"
    exit 1
fi