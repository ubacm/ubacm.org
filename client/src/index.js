import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";

// Initialize PostHog with environment variable
// Wait for PostHog to be available (from the loader script in index.html)
const initPostHog = () => {
  if (window.posthog && process.env.REACT_APP_POSTHOG_API) {
    window.posthog.init(process.env.REACT_APP_POSTHOG_API, {
      api_host: process.env.REACT_APP_POSTHOG_API_HOST || 'https://us.i.posthog.com',
      defaults: '2025-11-30',
      person_profiles: 'identified_only',
    });
  } else if (process.env.REACT_APP_POSTHOG_API) {
    // If PostHog loader hasn't finished yet, wait a bit and try again
    setTimeout(initPostHog, 100);
  }
};

// Initialize PostHog after a short delay to ensure the loader script has run
setTimeout(initPostHog, 0);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
