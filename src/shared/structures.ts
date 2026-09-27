/**
 * LeetCode 常用数据结构定义（全题库共用）。
 *
 * 为什么单独放这里：
 * - 链表 / 二叉树的节点类型在几十道题里反复出现，集中定义避免「每道题各写一份」。
 * - 本地测试需要把「数组」还原成真正的链表 / 二叉树，因此顺带提供构造与打印工具。
 *
 * 注意：LeetCode 的入参 / 出参用数组表示，但函数内部操作的是节点，所以这层转换很有必要。
 */

/** 单链表节点（LeetCode 标准定义，与题面一致） */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

/** 二叉树节点（LeetCode 标准定义，与题面一致） */
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/** [1,2,3] -> 1 -> 2 -> 3 */
export function buildList(nums: number[]): ListNode | null {
  const dummy = new ListNode();
  let cur = dummy;
  for (const n of nums) {
    cur.next = new ListNode(n);
    cur = cur.next;
  }
  return dummy.next;
}

/** 1 -> 2 -> 3 -> [1,2,3] */
export function listToArray(head: ListNode | null): number[] {
  const out: number[] = [];
  for (let cur = head; cur !== null; cur = cur.next) out.push(cur.val);
  return out;
}

/**
 * LeetCode 层序数组 -> 二叉树，null 表示空节点。
 * 例：[3,9,20,null,null,15,7]
 */
export function buildTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null;
  const root = new TreeNode(arr[0]);
  const queue: TreeNode[] = [root];
  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift()!;
    const lv = arr[i++];
    if (lv !== null && lv !== undefined) {
      node.left = new TreeNode(lv);
      queue.push(node.left);
    }
    const rv = arr[i++];
    if (rv !== null && rv !== undefined) {
      node.right = new TreeNode(rv);
      queue.push(node.right);
    }
  }
  return root;
}

/** 二叉树 -> LeetCode 层序数组（去掉尾部多余的 null） */
export function treeToArray(root: TreeNode | null): (number | null)[] {
  if (root === null) return [];
  const out: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];
  while (queue.length > 0) {
    const node = queue.shift()!;
    if (node === null) {
      out.push(null);
      continue;
    }
    out.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }
  while (out.length > 0 && out[out.length - 1] === null) out.pop();
  return out;
}
