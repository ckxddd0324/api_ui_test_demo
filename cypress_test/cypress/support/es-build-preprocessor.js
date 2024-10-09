import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { polyfillNode } from "esbuild-plugin-polyfill-node";
/**
The collection of tasks to use with cy.task()
@param on `on` is used to hook into various events Cypress emits
 */
export default (on, config) => {
  const bundler = createBundler({
    plugins: [
      polyfillNode({
        // Options (optional)
      }),
    ],
    define: {
      global: "window",
    },
  });
  on("file:preprocessor", bundler);
};
