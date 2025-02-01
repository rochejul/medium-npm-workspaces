import { describe, test, expect } from "@jest/globals";
import "@example/jest-utils";
import { sum } from "../index.js";

describe("@example/module-a - sum", () => {
  test("we should sum the two parameters", () => {
    // Arrange
    const leftOperand = 25;
    const righOperand = 37;
    const expected = { sum: 62 };

    // Act
    const actual = sum(leftOperand, righOperand);

    // Assert
    expect({ sum: actual }).toMatchPlainObject(expected);
  });
});
