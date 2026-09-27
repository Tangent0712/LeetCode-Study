// C++ 版 LeetCode 常用数据结构（与 src/shared/structures.ts 对应）
#pragma once
#include <vector>
#include <queue>

// 单链表节点
struct ListNode {
    int val;
    ListNode* next;
    ListNode(int v = 0, ListNode* n = nullptr) : val(v), next(n) {}
};

// 二叉树节点
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int v = 0, TreeNode* l = nullptr, TreeNode* r = nullptr)
        : val(v), left(l), right(r) {}
};

// [1,2,3] -> 1->2->3
inline ListNode* buildList(const std::vector<int>& nums) {
    ListNode dummy;
    ListNode* cur = &dummy;
    for (int x : nums) {
        cur->next = new ListNode(x);
        cur = cur->next;
    }
    return dummy.next;
}

// 1->2->3 -> [1,2,3]
inline std::vector<int> listToArray(ListNode* head) {
    std::vector<int> out;
    for (ListNode* cur = head; cur != nullptr; cur = cur->next) out.push_back(cur->val);
    return out;
}
