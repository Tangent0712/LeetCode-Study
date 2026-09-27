# LeetCode-GOGOGO · 热题 Hot 100（TypeScript 系统刷题）

> 目标：**按专题系统推进**刷完 LeetCode 热题 Hot 100，用 **TypeScript** 在 **本地 Windows + Node.js** 运行。
> 纯文档、中文、术语中英对照、讲透底层；文件里就地作答 → 即时批改 → 更新画像 → git 提交。

- 主协议：[`AGENTS.md`](./AGENTS.md)（每次开工先读）
- 学习者画像：[`learner-profile.md`](./learner-profile.md)
- 约定：[`conventions.md`](./conventions.md)
- 总目录：[`topics/00-index.md`](./topics/00-index.md)
- 错题台账：[`review-log.md`](./review-log.md)

## 一、状态真相源（进度以此表为准）

> 图例：⬜ 未开始 ｜ 🟨 进行中 ｜ ✅ 已掌握（自测 + 批改双确认）
> **已完成数** = ✅ 的题数；不是「文件是否建了」。

| # | 专题 | 文件 | 题数 | 已完成 | 状态 |
|---|---|:--:|:--:|:--:|:--:|
| 01 | 哈希 Hash Table | [`topics/01-hash-table.md`](./topics/01-hash-table.md) | 3 | 0 | 🟨 |
| 02 | 双指针 Two Pointers | [`topics/02-two-pointers.md`](./topics/02-two-pointers.md) | 4 | 0 | ⬜ |
| 03 | 滑动窗口 Sliding Window | [`topics/03-sliding-window.md`](./topics/03-sliding-window.md) | 2 | 0 | ⬜ |
| 04 | 子串 Substring | [`topics/04-substring.md`](./topics/04-substring.md) | 3 | 0 | ⬜ |
| 05 | 普通数组 Array | [`topics/05-array.md`](./topics/05-array.md) | 5 | 0 | ⬜ |
| 06 | 矩阵 Matrix | [`topics/06-matrix.md`](./topics/06-matrix.md) | 4 | 0 | ⬜ |
| 07 | 链表 Linked List | [`topics/07-linked-list.md`](./topics/07-linked-list.md) | 14 | 0 | ⬜ |
| 08 | 二叉树 Binary Tree | [`topics/08-binary-tree.md`](./topics/08-binary-tree.md) | 15 | 0 | ⬜ |
| 09 | 图论 Graph | [`topics/09-graph.md`](./topics/09-graph.md) | 4 | 0 | ⬜ |
| 10 | 回溯 Backtracking | [`topics/10-backtracking.md`](./topics/10-backtracking.md) | 8 | 0 | ⬜ |
| 11 | 二分查找 Binary Search | [`topics/11-binary-search.md`](./topics/11-binary-search.md) | 6 | 0 | ⬜ |
| 12 | 栈 Stack | [`topics/12-stack.md`](./topics/12-stack.md) | 5 | 0 | ⬜ |
| 13 | 堆 Heap / Priority Queue | [`topics/13-heap.md`](./topics/13-heap.md) | 3 | 0 | ⬜ |
| 14 | 贪心算法 Greedy | [`topics/14-greedy.md`](./topics/14-greedy.md) | 4 | 0 | ⬜ |
| 15 | 动态规划 Dynamic Programming | [`topics/15-dynamic-programming.md`](./topics/15-dynamic-programming.md) | 10 | 0 | ⬜ |
| 16 | 多维动态规划 Multidimensional DP | [`topics/16-multidimensional-dp.md`](./topics/16-multidimensional-dp.md) | 5 | 0 | ⬜ |
| 17 | 技巧 Tricks | [`topics/17-tricks.md`](./topics/17-tricks.md) | 5 | 0 | ⬜ |
| — | **合计** |  | **100** | **0** |  |

## 二、怎么用

1. 进入一个专题：先读该文件的**套路卡**，再按「循序渐进」路线的简单热身题找感觉。
2. 每题：先自己在文件里写 `✍️ 我的思路` 与 `✍️ 我的代码`，写完自评复杂度。
3. 本地跑通：代码放 `src/NN-专题/`，一题一文件，配 `.test.ts`。
4. 交给 Agent 批改（判定 + 原因 + 改法 + 复杂度复核 + 变式题）。
5. 批改后：更新画像 → `git add -A` → `git commit` → push。

## 三、运行（本地 Windows 终端）

```bash
npx tsx src/01-hash-table/0001-two-sum.ts        # 直接跑某个文件
npx vitest run src/01-hash-table/0001-two-sum.test.ts   # 跑该题测试
npx vitest run                                  # 跑全部测试
npx tsc --noEmit                                # 严格类型检查
```

> 环境：Node.js LTS（本地）+ npm；devDeps：`typescript` / `tsx` / `vitest` / `@types/node`。

## 四、更新日志

| 日期 | 内容 | 更新者 |
|---|---|---|
| 2026-09-27 | Phase 0：初始化目录、TypeScript 工程、Hot 100 总目录与 17 个专题骨架 | AI |
