// 热身 W1：判断数组是否有重复元素（C++ 对照版）
// 题面见 topics/01-hash-table.md
//
// 用到的 C++ 头文件：
//   <vector>          —— std::vector，动态数组（≈ TS 的 number[]）
//   <unordered_set>   —— 哈希集合（≈ TS 的 Set）
#include <vector>
#include <unordered_set>

// const std::vector<int>& —— 传引用且不修改，避免复制（相当于 TS 里"只读"传参）
bool hasDuplicate(const std::vector<int>& nums) {
    std::unordered_set<int> seen;       // 空集合（"白板"）
    for (int x : nums) {                // 范围 for，≈ TS 的 for (const x of nums)
        if (seen.count(x) > 0) {        // count > 0 表示"已经在集合里"
            return true;
        }
        seen.insert(x);                 // 没出现就记进去
    }
    return false;
}
