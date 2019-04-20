// Simple Javascript solution, faster than 99.91% of JavaScript online submissions 

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if(!t1)
        return t2;
    if(!t2)
        return t1;
    if(!t1 && !t2)
        return null;
    var value=(t1==null? 0:t1.val)+(t2==null ? 0:t2.val);
    var createNode=new TreeNode(value);
    createNode.left=mergeTrees(t1==null?null:t1.left,t2==null?null:t2.left);
    createNode.right=mergeTrees(t1==null?null:t1.right,t2==null?null:t2.right);
    return createNode;
    
};