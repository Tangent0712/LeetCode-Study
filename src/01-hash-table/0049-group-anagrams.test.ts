import { describe, it, expect } from "vitest";
import { groupAnagrams } from "./0049-group-anagrams";

// 分组顺序、组内顺序都不重要 -> 统一排序后再比较
const normalize = (groups: string[][]): string[][] =>
  groups
    .map((g) => [...g].sort())
    .sort((a, b) => (a.join(",") < b.join(",") ? -1 : 1));

describe("49. 字母异位词分组", () => {
  it("示例 1", () => {
    const got = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
    const want = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];
    expect(normalize(got)).toEqual(normalize(want));
  });

  it("空字符串", () => {
    expect(groupAnagrams([""])).toEqual([[""]]);
  });

  it("单个字符", () => {
    expect(groupAnagrams(["a"])).toEqual([["a"]]);
  });

  it("两个空串归为一组", () => {
    expect(groupAnagrams(["", ""])).toEqual([["", ""]]);
  });

  it("没有异位词时各自成组", () => {
    const got = groupAnagrams(["abc", "def"]);
    expect(normalize(got)).toEqual(normalize([["abc"], ["def"]]));
  });
});
