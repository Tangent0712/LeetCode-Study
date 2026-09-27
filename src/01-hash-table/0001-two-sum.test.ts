import { describe, it, expect } from "vitest";
import { twoSum } from "./0001-two-sum";

const norm = (a: number[]): number[] => [...a].sort((x, y) => x - y);

describe("1. 两数之和", () => {
  it("示例 1", () => {
    expect(norm(twoSum([2, 7, 11, 15], 9))).toEqual([0, 1]);
  });

  it("示例 2", () => {
    expect(norm(twoSum([3, 2, 4], 6))).toEqual([1, 2]);
  });

  it("示例 3（相同值不同下标）", () => {
    expect(norm(twoSum([3, 3], 6))).toEqual([0, 1]);
  });

  it("含负数", () => {
    expect(norm(twoSum([-3, 4, 3, 90], 0))).toEqual([0, 2]);
  });
});
