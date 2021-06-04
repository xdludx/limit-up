/**
 * 链接：https://leetcode-cn.com/problems/house-robber
 * 题目理解：求非负整数数组，最大非连续子项之和
 * 动态规划
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    const preNums = []; // 存放前n项最大值
    if (!nums.length) return 0;
    preNums[0] = nums[0];
    preNums[1] = Math.max(nums[0] || 0, nums[1] || 0);
    for (let i = 2; i < nums.length; i++) {
        preNums[i] = Math.max(preNums[i - 2] + nums[i], preNums[i - 1]);
    }
    return preNums[nums.length - 1];
};

console.log(rob([2, 7, 9, 3, 1]));