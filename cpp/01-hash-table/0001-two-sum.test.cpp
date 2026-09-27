// 1. 两数之和的本地测试（C++）
#include <algorithm>
#include <cassert>
#include <cstdio>
#include <vector>

#include "0001-two-sum.cpp"

static std::vector<int> sorted(std::vector<int> v) {
    std::sort(v.begin(), v.end());
    return v;
}

int main() {
    assert((sorted(twoSum({2, 7, 11, 15}, 9)) == std::vector<int>{0, 1}));
    assert((sorted(twoSum({3, 2, 4}, 6)) == std::vector<int>{1, 2}));
    assert((sorted(twoSum({3, 3}, 6)) == std::vector<int>{0, 1}));
    assert((sorted(twoSum({-3, 4, 3, 90}, 0)) == std::vector<int>{0, 2}));

    std::puts("0001 twoSum: ALL PASSED");
    return 0;
}
