/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
import { getItems } from "test-publish-es6-package";

describe("example to-do app", () => {
  const result = {};
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });

  before(() => {
    // const apiBaseUrl = Cypress.env("API_BASE_URL");
    // const apiBaseUrl = process.env.API_BASE_URL;
    // console.log(apiBaseUrl, "SDAs");
    cy.wrap(getItems()).then((res) => {
      console.log(res.body, "ASDASD");
    });
  });

  it("displays two todo items by default", () => {
    cy.get(".todo-list li").should("have.length", 2);

    cy.get(".todo-list li").first().should("have.text", "Pay electric bill");
    cy.get(".todo-list li").last().should("have.text", "Walk the dog");
    console.log(result);
  });

  it("click to todo and type result user name", () => {
    cy.get('[data-test="new-todo"]').type(result.users[0].name).type("{enter}");
    cy.get(".todo-list li").last().should("have.text", result.users[0].name);
  });
});
