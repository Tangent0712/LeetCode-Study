# 现在看这里（current-task.md）

> **规则（AGENTS.md R17）**：教学与说明都写进文档；对话窗口只提醒「现在看哪个文档」。
> 本文件是**唯一导览**：每次推进后由 Agent 更新，指向下一步该读什么、做什么。
>
> **最后更新**：2026-09-27

---

## 你在哪

- 当前专题：**01 哈希（Hash Table）** · 状态 🟨 进行中
- 当前任务：**修正 W1** —— 你的思路对了，但 `for...in` 用错导致不 AC；改完再做变式题。
- 全部进度看：`README.md` 状态真相源 ｜ 总目录：`topics/00-index.md`

---

## 现在请阅读

1. **`topics/01-hash-table.md`** → 找到 **「热身 W1」** 里的 **`✅ 批改（2026-09-27）`** 一整段（判定 / 为什么错 / 改法 / 复杂度 / 变式题）。
2. **`notes/typescript-basics.md`** → **`011. for...in vs for...of`**（这是这次出错的关键语法）。

---

## 现在要做的动作

1. 打开 `src/01-hash-table/warmup-01-has-duplicate.ts`，按批改里的**最小修改**调整（关键：`for...in` → `for...of`，`var` → `const`）。
2. 跑自测，确认全绿、且类型检查通过：
   ```bash
   npx vitest run src/01-hash-table/warmup-01-has-duplicate.test.ts
   npx tsc --noEmit
   ```
3. 回到 `topics/01-hash-table.md` 的 **W1** 区，把 **`复杂度自评`** 补上（时间 / 空间）。
4. 顺手做批改里的 **变式题**：返回第一个重复出现的数字（没有则 `-1`）。

---

## 卡住了怎么办

- 告诉我卡在哪一步，或在专题 md 里新增 `### 我的疑问（<日期>）`。
- 我只给 L1 方向提示，并把提示写进文档。

## 做完之后

- Agent 批改 → 更新 `README.md` / `learner-profile.md` / `review-log.md` → 本文件指向 **W2**。
