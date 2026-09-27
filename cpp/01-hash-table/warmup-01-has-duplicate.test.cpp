// 热身 W1 的本地测试（C++）
// 说明：C++ 里没有 vitest 这种框架，这里直接用 <cassert> 的 assert 手写断言。
// 编译运行见 topics/01-hash-table.md 的题目区块。
#include <cassert>
#include <cstdio>
#include <vector>

#include "warmup-01-has-duplicate.cpp"   // 直接包含解法文件，拿到 hasDuplicate 函数

int main() {
    assert(hasDuplicate({1, 2, 3, 1}) == true);
    assert(hasDuplicate({1, 2, 3, 4}) == false);
    assert(hasDuplicate({}) == false);
    assert(hasDuplicate({5}) == false);
    assert(hasDuplicate({-1, 0, -1}) == true);

    std::puts("warmup-01 hasDuplicate: ALL PASSED");
    return 0;
}
