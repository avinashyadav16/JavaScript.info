/**
 *  @file: Day-21.js
 *  @author: Avinash Yadav
 *  @brief: Day 21 - Leetcode Easy
 *  @date: 02-08-2024
 */

// Activity 1: Two Sum
// • Task 1: Solve the 'Two Sum" problem on LeetCode.
// Problem: Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.
//          o Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
//          o Log the indices for a few test cases.

function twoSum(nums, target)
{
    const map = new Map();

    for (let i = 0; i < nums.length; i++)
    {
        const complement = target - nums[i];
        if (map.has(complement))
        {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

console.log("Activity 1: Two Sum");
console.log("Test Case 1: ", twoSum([2, 7, 11, 15], 9));  // Output => [0, 1]
console.log("Test Case 2: ", twoSum([3, 2, 4], 6));       // Output => [1, 2]
console.log("Test Case 3: ", twoSum([3, 3], 6));          // Output => [0, 1]
console.log("");














// Activity 2: Reverse Integer
// • Task 2: Solve the "Reverse Integer" problem on LeetCode.
// Problem: Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range, return 0.
//          o Write a function that takes an integer and returns it with its digits reversed.
//          o Handle edge cases like negative numbers and numbers ending in zero.
//          o Log the reversed integers for a few test cases.


function reverseInteger(x)
{
    let reversed = 0;
    let sign = Math.sign(x);

    x = Math.abs(x);

    while (x > 0)
    {
        reversed = reversed * 10 + (x % 10);
    
        x = Math.floor(x / 10);
    }

    reversed = reversed * sign;

    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1)
    {
        return 0;
    }

    return reversed;
}


console.log("Activity 2: Reverse Integer");
console.log("Test Case 1: ", reverseInteger(123));    // Output => 321
console.log("Test Case 2: ", reverseInteger(-123));   // Output => -321
console.log("Test Case 3: ", reverseInteger(120));    // Output => 21
console.log("Test Case 4: ", reverseInteger(0));      // Output => 0
console.log("");


















// Activity 3: Palindrome Number
// • Task 3: Solve the "Palindrome Number" problem on LeetCode.
// Problem: Given an integer x, return true if x is a palindrome, and false otherwise.
//          o Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
//          o Log the result for a few test cases, including edge cases like negative numbers.

function isPalindrome(x)
{
    if (x < 0) return false;

    const str = x.toString();

    const reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
}

console.log("Activity 3: Palindrome Number");
console.log("Test Case 1: ", isPalindrome(121));  // Output => true
console.log("Test Case 2: ", isPalindrome(-121)); // Output => false
console.log("Test Case 3: ", isPalindrome(10));   // Output => false
console.log("Test Case 4: ", isPalindrome(0));    // Output => true
console.log("");


















// Activity 4: Merge Two Sorted Lists
// • Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// Problem: Merge two sorted linked lists and return it as a new sorted list.
//          o Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
//          o Create a few test cases with linked lists and log the merged list.


function ListNode(val, next = null)
{
    this.val = val;
    this.next = next;
}

function mergeTwoLists(l1, l2)
{
    let dummy = new ListNode(-1);
    let current = dummy;

    while (l1 !== null && l2 !== null)
    {
        if (l1.val <= l2.val)
        {
            current.next = l1;
            l1 = l1.next;
        }
        else
        {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 !== null ? l1 : l2;

    return dummy.next;
}

console.log("Activity 4: Merge Two Sorted Lists");

let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

let mergedList = mergeTwoLists(l1, l2);
let mergedListStr = '';

while (mergedList)
{
    mergedListStr += mergedList.val + " -> ";
    mergedList = mergedList.next;
}
console.log("Merged List: ", mergedListStr.slice(0, -4)); // Output => "1 -> 1 -> 2 -> 3 -> 4 -> 4"
console.log("");




















// Activity 5: Valid Parentheses
// • Task 5: Solve the 'Valid Parentheses" problem on LeetCode.
// Problem: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//          o Write a function that takes a string containing just the characters 'C, 'Y, T, •y, and 'J, and determines if the input string is valid.
//          o A string is valid if open brackets are closed in the correct order.
//          o Log the result for a few test cases.

function isValid(s)
{
    const stack = [];
    const map =
    {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++)
    {
        const char = s[i];
        if (map[char])
        {
            stack.push(char);
        }
        else
        {
            const top = stack.pop();
            if (map[top] !== char) return false;
        }
    }

    return stack.length === 0;
}

console.log("Activity 5: Valid Parentheses");
console.log("Test Case 1: ", isValid("()"));     // Output => true
console.log("Test Case 2: ", isValid("()[]{}")); // Output => true
console.log("Test Case 3: ", isValid("(]"));     // Output => false
console.log("Test Case 4: ", isValid("([)]"));   // Output => false
console.log("Test Case 5: ", isValid("{[]}"));   // Output => true
console.log("");