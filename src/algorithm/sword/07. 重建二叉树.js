/**
 * 链接：https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 输入：前序遍历 preorder = [3,9,20,15,7]  中序遍历 inorder = [9,3,15,20,7]
 * 输出：
 3
 / \
 9  20
 /  \
 15   7
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
    if (!preorder || preorder.length === 0) return null;
    const root = new TreeNode(preorder[0]);

    const rootIndexOfInorder = inorder.indexOf(preorder[0]);
    const leftTreePreorder = preorder.slice(1, rootIndexOfInorder + 1);
    const leftTreeInorder = inorder.slice(0, rootIndexOfInorder);
    const rightTreePreorder = preorder.slice(rootIndexOfInorder + 1);
    const rightTreeInorder = inorder.slice(rootIndexOfInorder + 1);

    root.left = buildTree(leftTreePreorder, leftTreeInorder);
    root.right = buildTree(rightTreePreorder, rightTreeInorder);

    return root;
};

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))