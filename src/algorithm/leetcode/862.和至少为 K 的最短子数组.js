/**
 * 链接：https://leetcode-cn.com/problems/shortest-subarray-with-sum-at-least-k
 * 题目：返回 A 的最短的非空连续子数组的长度，该子数组的和至少为 K 。如果没有和至少为 K 的非空子数组，返回 -1 。
 **** 输入：A = [2,-1,2], K = 3
 **** 输出：3
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    const preSum = [0];
    for (let i = 0; i < nums.length; i++) {
        preSum[i + 1] = nums[i] + preSum[i]
    }
    const indexList = [];
    let result = -1;
    for (let i = 0; i < nums.length; i++) {
        while (!indexList.length && preSum[i] <= preSum[indexList[indexList.length - 1]]) {
            indexList.pop();
        }
        while (!indexList.length)
        indexList.push(i);
    }
    return result;
    console.log(preSum)
};

console.log(shortestSubarray([2, -1, 2], 3));