import { expect, it } from "vitest";
import playground from "./index.js";

it("should return a result object", () => {
  expect(playground()).toEqual({ message: "Hello World!" });
});
