import { getItems } from "test-publish-es6-package";

describe("Users API", () => {
  describe("getUser", () => {
    it("fetches users successfully", async () => {
      const response = await getItems();
      console.log(response);
     
      // Add more specific assertions based on your API's response structure
    });
  });


});
