import { describe, expect, it } from "vitest";
import playground from "./index.js";

describe("base cases", () => {
  it("should return a result object", () => {
    expect(playground()).toEqual({ message: "Hello World!" });
  });
});
