// 1. 两数之和（C++ 对照版）
// 题面见 topics/01-hash-table.md
#include <vector>
#include <unordered_map>

std::vector<int> twoSum(const std::vector<int>& nums, int target) {
    std::unordered_map<int, int> seen;   // 数 -> 下标
    for (int i = 0; i < (int)nums.size(); i++) {
        int need = target - nums[i];     // 补数
        auto it = seen.find(need);       // find 返回迭代器：找到!=end()
        if (it != seen.end()) {
            return {it->second, i};      // {补数下标, 当前下标}
        }
        seen[nums[i]] = i;               // 先查后存
    }
    return {};
}
