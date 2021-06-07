/**
 * 链接：https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 * 题目：请实现一个函数，把字符串 s 中的每个空格替换成"%20"。请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 */

/**
 * @param {string} s
 * @return {string}
 */
const replaceSpace = function(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        result += (s[i] === ' ' ? '%20' : s[i]);
    }
    return result;
};


console.log(replaceSpace('We are happy.'));