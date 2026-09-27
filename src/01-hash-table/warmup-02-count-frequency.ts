/**
 * 热身 W2：统计数组元素出现次数（自出 · 简单）
 * 题面见 topics/01-hash-table.md
 *
 * L1 方向提示：遍历数组，用 Map 维护「值 -> 次数」，边遍历边累加。
 */
export function countFrequency(nums: number[]): Map<number, number> {
  // TODO(你): 在这里实现；实现后删掉下面两行占位。
  const count = new Map <number,number> () ;
  for(const num of nums){
    count.set(num , (count.get(num) ?? 0) + 1 );
  }
  return count;
}
