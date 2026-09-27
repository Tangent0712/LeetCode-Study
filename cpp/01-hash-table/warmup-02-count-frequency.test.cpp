// 热身 W2 的本地测试（C++）
#include <cassert>
#include <cstdio>
#include <vector>

#include "warmup-02-count-frequency.cpp"

int main() {
    auto m = countFrequency({1, 1, 2, 3, 3, 3});
    assert(m.at(1) == 2);
    assert(m.at(2) == 1);
    assert(m.at(3) == 3);
    assert(m.find(4) == m.end());   // 没记录过 4
    assert((int)m.size() == 3);

    assert(countFrequency({}).empty());

    auto m2 = countFrequency({0, -1, -1, 0, 0});
    assert(m2.at(0) == 3);
    assert(m2.at(-1) == 2);

    std::puts("warmup-02 countFrequency: ALL PASSED");
    return 0;
}
