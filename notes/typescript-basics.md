# TypeScript 语法首课（notes/typescript-basics.md）

> **规则（AGENTS.md R16）**：每个 TS 语法 / 类型 / 标准 API **第一次出现**时，Agent 必须讲解：
> **是什么 / 为什么需要 / 最小示例 / 常见坑**，并登记到本文件。
> 学习者 TS 零基础 —— 从不默认「这个你应该会」。
>
> 本文件按「首次出现顺序」累积。想复习某个语法，直接搜标题编号。

---

## 001. `export function`：定义并导出函数

- **首次出现**：`src/01-hash-table/warmup-01-has-duplicate.ts`
- **是什么**：定义一个函数，并用 `export` 让它能被**别的文件** `import` 使用。
- **为什么**：每个题目一个文件；测试文件要调用你写的函数，所以函数必须可被导出。
- **最小示例**：
  ```ts
  export function add(a: number, b: number): number {
    return a + b;
  }
  ```
  - `function add` —— 函数名。
  - `(a: number, b: number)` —— 参数列表，每个参数后写 `: 类型`。
  - `: number` —— 函数**返回值**的类型。
  - `{ ... }` —— 函数体。
- **常见坑**：
  - 返回类型写错会被 `tsc` 报错（比如声明返回 `boolean`，却 `return 1`）。
  - 忘了 `export` → 测试文件 `import` 报「找不到导出」。

---

## 002. 类型注解：`参数: 类型` 与 `: 返回类型`

- **首次出现**：同上（所有函数签名）
- **是什么**：在你写的名字后面标出「这个值应该是什么类型」。TS 靠它做静态检查。
- **为什么**：不用运行就能发现类型错误；也是「自文档」。
- **常用基础类型**：
  | 写法 | 含义 | 例子 |
  |---|---|---|
  | `number` | 数字 | `let n: number = 3;` |
  | `boolean` | 布尔 | `let ok: boolean = true;` |
  | `string` | 字符串 | `let s: string = "hi";` |
  | `number[]` | 数字数组 | `let a: number[] = [1, 2];` |
  | `Set<number>` | 数字集合 | `let st: Set<number> = new Set();` |
- **最小示例**：
  ```ts
  function isPositive(n: number): boolean {
    return n > 0;
  }
  ```
- **常见坑**：`number` 和 `number[]` 是两种类型；把数组当数字用会报错。

---

## 003. `const` 与 `let`：声明变量

- **首次出现**：写 W1 实现时（你会用到）
- **是什么**：声明变量的两个关键字。`const` = 常量（不能再指向别的值），`let` = 变量（可重新赋值）。
- **为什么**：`const` 更安全，优先用；需要改变时再用 `let`。
- **最小示例**：
  ```ts
  const PI = 3.14;     // 之后不能再 PI = 3
  let count = 0;
  count = count + 1;   // 可以
  ```
- **常见坑**：
  - 对 `const` 重新赋值会报错；**但** `const` 的数组/对象内部仍可改（`const a = [1]; a.push(2);` 合法）。
  - 少用 `var`（作用域规则易出错），本项目基本不用。

---

## 004. `new Set<number>()`：集合 + 泛型 + `add/has/size`

- **首次出现**：W1 的思路（「把见过的数放进集合」）
- **是什么**：`Set` 是一个「不重复元素」的集合（JS 内置）。`<number>` 是**泛型参数**，表示「这个集合里装的是 number」。
- **为什么**：判断「某个值是否出现过」是 O(1) 的平均查找 —— 正好是哈希的用途。
- **最小示例**：
  ```ts
  const s = new Set<number>();
  s.add(3);          // 加入 3
  s.add(3);          // 重复加入无效果，集合里仍只有一个 3
  s.has(3);          // true：判断是否存在
  s.has(5);          // false
  s.size;            // 元素个数
  s.delete(3);       // 删除
  ```
- **常见坑**：
  - `Set` 用**值**判重；对象按「引用」判重（两个内容相同的对象算不同）。
  - `.add()` 返回集合本身（可链式），不是返回是否新增成功。

---

## 005. `for...of`：遍历数组/集合

- **首次出现**：W1 实现（遍历数组）
- **是什么**：按顺序取出「可迭代对象」（数组、Set、字符串…）里的每个值。
- **为什么**：比手写下标更简洁、不易越界。
- **最小示例**：
  ```ts
  const nums = [10, 20, 30];
  let sum = 0;
  for (const x of nums) {
    sum += x;         // x 依次是 10、20、30
  }
  ```
- **对比**：还有下标循环（当你需要**下标 i**时用它）：
  ```ts
  for (let i = 0; i < nums.length; i++) {
    // nums[i] 是当前元素，i 是下标
  }
  ```
- **常见坑**：`for...of` 拿的是**值**；`for...in` 拿的是**键/下标**（数组上多数情况不要用 `for...in`）。

---

## 006. `if` / `return`：条件与返回

- **首次出现**：W1 实现
- **是什么**：`if (条件) { ... }` 按条件执行；`return 值;` 结束函数并交回结果。
- **最小示例**：
  ```ts
  function isBig(n: number): boolean {
    if (n > 100) {
      return true;
    }
    return false;
  }
  ```
- **常见坑**：
  - `=` 是赋值，`===` 才是比较（用 `===`）。
  - 有返回类型的函数，所有分支都要有 `return`，否则 `tsc` 报「可能返回 undefined」。

---

## 007. 脚手架里的 `void x;` 与 `throw new Error(...)`（重要：这是占位，不是答案）

- **首次出现**：你打开的 `warmup-01-has-duplicate.ts` 等脚手架文件
- **它是什么**：
  - `void nums;` —— 只是一个「用到该参数」的语句，用来**避免 TS 报「参数未使用」**。实现后要删掉。
  - `throw new Error("...")` —— 「抛出异常」，让程序在这里报错停止。
- **为什么放这两行**：这在**初始脚手架**里是刻意的——让你一运行就失败（测试是「红」的），等你写实现后变「绿」。
- **你要做的**：删掉这两行，换成你的实现。
- **常见坑**：不要误以为题目要求你 `throw`；它只是开发用的占位。

---

## 008. `import { ... } from "..."`：ES Module 导入

- **首次出现**：测试文件 `warmup-01-has-duplicate.test.ts`
- **是什么**：从别的模块（文件/库）里把导出的东西拿进来用。
- **最小示例**：
  ```ts
  import { hasDuplicate } from "./warmup-01-has-duplicate";
  import { describe, it, expect } from "vitest";
  ```
  - `"./xxx"` 表示**同目录**下的文件；`"vitest"` 表示第三方库。
- **常见坑**：路径写错、或对方没 `export` → 导入报错。

---

## 009. 箭头函数 `=>`（读测试文件会遇到）

- **首次出现**：测试文件里的 `const norm = (a: number[]): number[] => ...`
- **是什么**：一种更简短的函数写法：`(参数) => 表达式`。
- **最小示例**：
  ```ts
  const double = (n: number): number => n * 2;   // 等价于 function double(n){ return n*2; }
  const square = (n: number): number => { return n * n; };
  ```
- **常见坑**：只有一行表达式时可省略 `{}` 和 `return`；一旦写了 `{}` 就必须显式 `return`。

---

## 待登记（用到时再补）

> 按 R16，下面这些语法在**首次实际用到**的那一步会补进来：
> `Map<T,U>` 与计数、`new Array(26).fill(0)`、可选链 `?.`、空值合并 `??`、`!` 非空断言、
> 泛型函数、接口 `interface`、`Math.max`、排序 `sort((a,b)=>a-b)` 等。
