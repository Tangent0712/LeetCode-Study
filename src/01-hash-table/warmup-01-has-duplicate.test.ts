import { describe, it, expect } from "vitest";
import { hasDuplicate } from "./warmup-01-has-duplicate";

describe("热身 W1 · hasDuplicate", () => {
  it("有重复 -> true", () => {
    expect(hasDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it("无重复 -> false", () => {
    expect(hasDuplicate([1, 2, 3, 4])).toBe(false);
  });

  it("空数组 -> false", () => {
    expect(hasDuplicate([])).toBe(false);
  });

  it("单元素 -> false", () => {
    expect(hasDuplicate([5])).toBe(false);
  });

  it("负数也能正确处理", () => {
    expect(hasDuplicate([-1, 0, -1])).toBe(true);
  });
});
