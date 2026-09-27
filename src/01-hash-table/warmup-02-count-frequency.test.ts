import { describe, it, expect } from "vitest";
import { countFrequency } from "./warmup-02-count-frequency";

describe("热身 W2 · countFrequency", () => {
  it("统计出现次数", () => {
    const m = countFrequency([1, 1, 2, 3, 3, 3]);
    expect(m.get(1)).toBe(2);
    expect(m.get(2)).toBe(1);
    expect(m.get(3)).toBe(3);
    expect(m.has(4)).toBe(false);
    expect(m.size).toBe(3);
  });

  it("空数组 -> 空 Map", () => {
    expect(countFrequency([]).size).toBe(0);
  });

  it("负数与 0", () => {
    const m = countFrequency([0, -1, -1, 0, 0]);
    expect(m.get(0)).toBe(3);
    expect(m.get(-1)).toBe(2);
  });
});
