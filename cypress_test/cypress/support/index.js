console.log("Support file is being loaded");

// cypress/support/index.js
import { HttpClient } from "test-publish-es6-package";

try {
  // Create an instance using Cypress environment variables
  const apiBaseUrl = Cypress.env("API_BASE_URL");
  const apiTimeout = Cypress.env("API_REQUEST_TIMEOUT") || 10000;

  const httpClientInstance = new HttpClient({
    baseURL: apiBaseUrl,
    timeout: apiTimeout,
  });

  // Store the instance in the Cypress environment for later use in tests
  Cypress.env("httpClientInstance", httpClientInstance);
  console.log("HttpClient instance created with baseURL:", apiBaseUrl);
} catch (error) {
  console.error("Failed to create HttpClient:", error.message);
  throw error; // Fail the setup if configuration is incorrect
}
