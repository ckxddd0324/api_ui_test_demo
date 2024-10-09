import { defineConfig } from "cypress";
import dotenv from "dotenv";
import esbuildPreprocessor from "./cypress/support/es-build-preprocessor.js";
// import cyGrepPlugin from "@bahmutov/cy-grep/src/plugin";
// Load environment variables
// dotenv.config();

export default defineConfig({
  env: {
    API_BASE_URL: "https://jsonplaceholder.typicode.com",
    API_REQUEST_TIMEOUT: "10000",
  },
  e2e: {
    supportFile: "cypress/support/index.js",
    async setupNodeEvents(on, config) {
      // Dynamically import the plugins file
      // const plugins = await import("./cypress/plugins/index.js");
      // const updatedConfig = await plugins.default(on, config);
      // const apiBaseUrl = process.env.API_BASE_URL;
      // console.log(apiBaseUrl, "Cypress API Base URL");

      // // Pass the environment variable to HttpClient
      // const httpClient = new HttpClient({ baseURL: apiBaseUrl });
      // console.log(httpClient, "httpClient in Cypress");
      // console.log(httpClient);

      esbuildPreprocessor(on);
      return config;
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});
