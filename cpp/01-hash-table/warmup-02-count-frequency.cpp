// 热身 W2：统计数组元素出现次数（C++ 对照版）
// 题面见 topics/01-hash-table.md
//
// 用到的 C++ 头文件：
//   <vector>           —— 动态数组
//   <unordered_map>    —— 哈希映射（≈ TS 的 Map）
#include <vector>
#include <unordered_map>

std::unordered_map<int, int> countFrequency(const std::vector<int>& nums) {
    std::unordered_map<int, int> count;
    for (int x : nums) {
        count[x]++;    // 关键：operator[] 遇到新键会"默认插入 0"，再自增
                       //   相当于 TS 的 count.set(x, (count.get(x) ?? 0) + 1)
    }
    return count;      // 返回值时按值返回（C++ 会自动优化，不用手写拷贝）
}
