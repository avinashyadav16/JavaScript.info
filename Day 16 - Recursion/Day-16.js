/**
 *  @file: Day-16.js
 *  @author: Avinash Yadav
 *  @brief: Day 16 - Recursion
 *  @date: 28-07-2024
 */



// Activity 1: Basic Recursion
// • Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n) {
    if (n === 0 || n === 1)
        return 1;

    return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 3:", factorial(3));
console.log("Factorial of 0:", factorial(0));



















// • Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibonacci(n) {
    if (n <= 1)
        return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci of 5:", fibonacci(5));
console.log("Fibonacci of 7:", fibonacci(7));
console.log("Fibonacci of 0:", fibonacci(0));
console.log("Fibonacci of 1:", fibonacci(11));



















// Activity 2: Recursion with Arrays
// • Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumArray(arr) {
    if (arr.length === 0)
        return 0;

    return arr[0] + sumArray(arr.slice(1));
}

console.log("Sum of array [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5]));
console.log("Sum of array [10, 20, 30]:", sumArray([10, 20, 30]));
console.log("Sum of array []:", sumArray([]));



















// • Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxArray(arr) {
    if (arr.length === 1)
        return arr[0];

    const maxOfRest = maxArray(arr.slice(1));

    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

console.log("Max of array [1, 5, 3, 9, 2]:", maxArray([1, 5, 3, 9, 2]));
console.log("Max of array [7, 4, 7, 2]:", maxArray([7, 4, 7, 2]));
console.log("Max of array [10]:", maxArray([10]));



















// Activity 3: String Manipulation with Recursion
// • Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str) {
    if (str === "")
        return "";

    return reverseString(str.substr(1)) + str.charAt(0);
}

console.log("Reverse of 'Avinash':", reverseString("Avinash"));
console.log("Reverse of 'Yadav':", reverseString("Yadav"));
console.log("Reverse of '':", reverseString(""));



















// • Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function isPalindrome(str) {
    if (str.length <= 1)
        return true;

    if (str.charAt(0) !== str.charAt(str.length - 1))
        return false;

    return isPalindrome(str.substr(1, str.length - 2));
}

console.log("'racecar' is palindrome:", isPalindrome("racecar"));
console.log("'hello' is palindrome:", isPalindrome("hello"));
console.log("'madam' is palindrome:", isPalindrome("madam"));



















// Activity 4: Recursive Search
// • Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right)
        return -1;

    const mid = Math.floor((left + right) >> 1);

    if (arr[mid] === target)
        return mid;

    if (arr[mid] > target)
        return binarySearch(arr, target, left, mid - 1);

    return binarySearch(arr, target, mid + 1, right);
}

console.log("Index of 4 in [1, 2, 3, 4, 5, 6, 7]:", binarySearch([1, 2, 3, 4, 5, 6, 7], 4));
console.log("Index of 1 in [1, 2, 3, 4, 5, 6, 7]:", binarySearch([1, 2, 3, 4, 5, 6, 7], 1));
console.log("Index of 7 in [1, 2, 3, 4, 5, 6, 7]:", binarySearch([1, 2, 3, 4, 5, 6, 7], 7));
console.log("Index of 8 in [1, 2, 3, 4, 5, 6, 7]:", binarySearch([1, 2, 3, 4, 5, 6, 7], 8));



















// • Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countOccurrences(arr, target) {
    if (arr.length === 0)
        return 0;

    const count = arr[0] === target ? 1 : 0;

    return count + countOccurrences(arr.slice(1), target);
}

console.log("Occurrences of 2 in [1, 2, 2, 3, 4, 2]:", countOccurrences([1, 2, 2, 3, 4, 2], 2));
console.log("Occurrences of 5 in [5, 5, 5, 5, 5]:", countOccurrences([5, 5, 5, 5, 5], 5));
console.log("Occurrences of 6 in [1, 2, 3, 4, 5]:", countOccurrences([1, 2, 3, 4, 5], 6));



















// Activity 5: Tree Traversal (Optional)
// • Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(node) {
    if (node === null)
        return;

    inOrderTraversal(node.left);

    console.log(node.value);

    inOrderTraversal(node.right);
}

const inOrderRoot = new TreeNode(4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(6, new TreeNode(5), new TreeNode(7))
);

console.log("In-order traversal of the tree:");
inOrderTraversal(inOrderRoot);



















// • Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

function treeDepth(node) {
    if (node === null)
        return 0;

    const leftDepth = treeDepth(node.left);

    const rightDepth = treeDepth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

const root = new TreeNode(4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(6, new TreeNode(5), new TreeNode(7))
);

console.log("Depth of the tree:", treeDepth(root));
console.log("Depth of a null tree:", treeDepth(null));