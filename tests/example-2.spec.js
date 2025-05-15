// @ts-check
const { test, expect } = require("@playwright/test");

test("this is going to fail", async () => {
  expect(1).toBe(2);
});
