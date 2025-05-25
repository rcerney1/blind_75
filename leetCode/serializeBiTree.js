
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {


    const result = [];

    const dfs = (node) => {
        if (!node) {
            result.push("null");
            return;
        }
        result.push(node.val.toString());
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);
    return result.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
     const values = data.split(",");
    let index = 0;

    const build = () => {
        if (values[index] === "null") {
            index++;
            return null;
        }
        const node = new TreeNode(parseInt(values[index]));
        index++;
        node.left = build();
        node.right = build();
        return node;
    };

    return build();
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(1,
    new TreeNode(2),
    new TreeNode(3, new TreeNode(4), new TreeNode(5))
);

const data = serialize(root);
console.log("Serialized:", data); 
// Output: "1,2,null,null,3,4,null,null,5,null,null"

const rebuilt = deserialize(data);
console.log(rebuilt); // Output: Reconstructed tree object
