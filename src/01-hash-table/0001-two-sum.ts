/**
 * 1. 两数之和（Easy）
 * 题面见 topics/01-hash-table.md
 *
 * L1 方向提示：哈希表能不能把「查找补数 target - nums[i]」降到 O(1)？
 *              注意「先查后存」，避免同一个元素用两次。
 */
export function twoSum(nums: number[], target: number): number[] {
  const num_map = new Map<number,number> () ;
  for (let i = 0 ; i < nums.length ; i++ ){
    if(num_map.has(target-nums[i])){
      return [i , num_map.get(target-nums[i]) ?? 0];
    }
    num_map.set(nums[i],i);
  }
  return [-1,-1];
}
