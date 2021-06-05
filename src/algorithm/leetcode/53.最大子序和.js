/**
 * 链接：https://leetcode-cn.com/problems/house-robber
 * 题目理解：给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 **** 输入：输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 **** 输出：6
 **** 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 * 动态规划：关键是构建新数组，上述输入，新数组为 [ -2, 1, -2, 4, 3, 5, 6, 1, 5 ]
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    const newNums = [nums[0]];
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        newNums[i] = Math.max(Math.max(newNums[i - 1], 0) + nums[i]);
        result = Math.max(newNums[i], result);
    }
    return result;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
