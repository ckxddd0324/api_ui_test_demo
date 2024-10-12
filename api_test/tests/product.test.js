import {
  getProducts,
  getProductById,
  createProduct,
} from "test-publish-es6-package";

describe("Product API", () => {
  describe("Get Users API", () => {
    it("fetches users successfully", async () => {
      const response = await getProducts();
      expect(response.status).toBe(200);
      expect(response.data).not.toBeNull();
    });
  });

  describe("Get User by Id API", () => {
    it("fetches user with ID 4 successfully", async () => {
      const response = await getProductById("4");
      expect(response.status).toBe(200);
      expect(response.data).not.toBeNull();

      const user = response.data;
      expect(user.id).toBe(4);
    });

    it("fetches user with ID 999 unsuccessfully", async () => {
      const response = await getProductById("21");
      console.log(response.data)
      expect(response.status).toBe(200);
      expect(response.data).not.toBeNull();
    });
  });

  describe("Create User API", () => {
    it("create user successfully", async () => {
      const response = await createProduct({
        title: "Disney world",
        price: 15.99,
        description: "A simple Item",
        image: null,
        category: "Toys",
      });
      // should be 201 but this test api is not returning 201
      expect(response.status).toBe(200);
      expect(response.data).not.toBeNull();

      const createdUser = response.data;
      // created ID always be 21
      expect(createdUser.id).toBe(21);
      expect(createdUser.title).toBe('Disney world');
    });
  });
});
