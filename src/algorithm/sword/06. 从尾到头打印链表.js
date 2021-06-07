/**
 * 链接：https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 * 题目：输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * 输入：head = [1,3,2]
 * 输出：[2,3,1]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const testHead = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 2,
            next: null
        }
    }
};

/**
 * @param {ListNode} head
 * @return {number[]}
 */
const reversePrint = function(head) {
    const result = [];
    let current = head;
    if (!current || current.val == null) return result;
    result.unshift(current.val);
    while (current.next) {
        result.unshift(current.next.val);
        current = current.next;
    }
    return result;
};