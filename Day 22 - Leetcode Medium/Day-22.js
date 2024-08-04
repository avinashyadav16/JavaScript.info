/**
 *  @file: Day-22.js
 *  @author: Avinash Yadav
 *  @brief: Day 22 - LeetCode Medium
 *  @date: 03-08-2024
 */

// Activity 1: Add Two Numbers
// • Task 1 : Solve the "Add Two Numbers" problem on LeetC0de.
//          o Write a function that takes non•empty linked lists representing two non-negative integers. 
//              The digits are stored in reverse order, and each node contains a single digit.Add the two numbers and return the sum as a linked list.
//          o Create a few test cases with linked lists and log the sum as a linked list.

class ListNode
{
    constructor(val = 0, next = null)
    {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2)
{
    let dummyHead = new ListNode();
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0)
    {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1)
            l1 = l1.next;

        if (l2)
            l2 = l2.next;
    }

    return dummyHead.next;
}


let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let sumList = addTwoNumbers(l1, l2);

let output = [];
while (sumList)
{
    output.push(sumList.val);
    sumList = sumList.next;
}
console.log("Activity 1 - Add Two Numbers:", output); 





















// Activity 2: Longest Substring Without Repeating Characters
// • Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
//          o Write a function that takes a string and returns the length of the longest substring without repeating characters.
//          o Log the length for a few test cases, including edge cases.
function lengthOfLongestSubstring(s)
{
    let charMap = new Map();
    let left = 0, maxLen = 0;

    for (let right = 0; right < s.length; right++)
    {
        if (charMap.has(s[right]))
        {
            left = Math.max(charMap.get(s[right]) + 1, left);
        }

        charMap.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}


console.log("Activity 2 - Longest Substring Without Repeating Characters:", lengthOfLongestSubstring("abcabcbb")); // Output: 3





















// Activity 3: Container With Most Water
// • Task 3: Solve the "Container With Most Water" problem on LeetCode.
//          o Write a function that takes an array of non-negative integers where each integer represents the height Of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
//          o Log the maximum amount of water for a few test cases.
function maxArea(height)
{
    let left = 0, right = height.length - 1, maxArea = 0;

    while (left < right)
    {
        let minHeight = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, minHeight * (right - left));
        
        if (height[left] < height[right])
        {
            left++;
        }
        else
        {
            right--;
        }
    }

    return maxArea;
}


console.log("Activity 3 - Container With Most Water:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49




















// Activity 4: 3Sum
// • Task 4: Solve the "3Sum" problem on LeetCode.
//          o Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
//          o Log the triplets for a few test cases, including edge cases.
function threeSum(nums)
{
    let result = [];
    
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++)
    {
        if (i > 0 && nums[i] === nums[i - 1])
            continue;

        let left = i + 1, right = nums.length - 1;

        while (left < right)
        {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0)
            {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1])
                    left++;

                while (left < right && nums[right] === nums[right - 1])
                    right--;

                left++;
                right--;

            }
            else if (sum < 0)
            {
                left++;
            }
            else
            {
                right--;
            }
        }
    }

    return result;
}


console.log("Activity 4 - 3Sum:", threeSum([-1, 0, 1, 2, -1, -4])); 



















// Activity 5: Group Anagrams
// • Task 5: Solve the "Group Anagrams" problem on LeetCode.
//          o Write a function that takes an array of strings and groups anagrams together.
//          o Log the grouped anagrams for a few test cases.
function groupAnagrams(strs)
{
    let map = new Map();

    for (let str of strs)
    {
        let sortedStr = str.split('').sort().join('');
        
        if (!map.has(sortedStr))
        {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
}


console.log("Activity 5 - Group Anagrams:", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));