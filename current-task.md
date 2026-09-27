# 现在看这里（current-task.md）

> **规则（AGENTS.md R17）**：教学与说明都写进文档；对话窗口只提醒「现在看哪个文档」。
> 本文件是**唯一导览**：每次推进后由 Agent 更新，指向下一步该读什么、做什么。
>
> **最后更新**：2026-09-27

---

## 你在哪

- 当前专题：**01 哈希（Hash Table）** · 状态 🟨 进行中
- 当前任务：**热身 W1 —— 判断数组是否有重复元素**
- 全部进度看：`README.md` 状态真相源 ｜ 总目录：`topics/00-index.md`

---

## 现在请阅读（按顺序）

1. **`topics/01-hash-table.md`**
   - 先读 **套路卡**（已改成「人话版」）：一句话版 → 生活场景 → `Set` / `Map` → 什么时候用 → O() 人话 → 常见坑 → 术语表。
   - 再读 **「热身 W1」** 那一节，看清题目与要求。
2. **`notes/typescript-basics.md`**
   - 做 W1 只需要看：`001 export function`、`002 类型注解`、`003 const/let`、`004 Set`、`005 for...of`、`006 if/return`、`007 占位 throw`。
   - （`008/009/010` 是测试文件与 Map 的语法，先扫一眼即可。）

---

## 现在要做的动作（W1）

1. 打开 `src/01-hash-table/warmup-01-has-duplicate.ts`。
2. **删掉**这两行占位：
   ```ts
   void nums;
   throw new Error("TODO: hasDuplicate 未实现");
   ```
3. 用「准备一张纸 → 逐个查纸 → 有就返回 true」的思路写出实现（只用 `Set` + `for...of` + `if/return`）。
4. 回到 `topics/01-hash-table.md` 的 **热身 W1** 区，填：
   - `✍️ 我的思路`（哪怕一句话）
   - `复杂度自评`（时间 O(?) ｜ 空间 O(?)）
5. 本地自测（在仓库根目录执行）：
   ```bash
   npx vitest run src/01-hash-table/warmup-01-has-duplicate.test.ts
   npx tsc --noEmit
   ```

---

## 卡住了怎么办

- 不要憋着。**告诉我卡在哪一步**，或哪句语法看不懂。
- 我会按三级提示给 **L1 方向提示**（绝不给答案）；提示同样会写进 `topics/01-hash-table.md` 的 `### 我的疑问（<日期>）` 区，方便回看。

## 做完 W1 之后

- Agent 批改（判定 + 原因 + 改法 + 复杂度复核 + 变式题）→ 更新 `README.md` / `learner-profile.md` / `review-log.md` → 把本文件指向 **W2**。
