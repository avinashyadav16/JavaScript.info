/**
 *  @file: Day-23.js
 *  @author: Avinash Yadav
 *  @brief: Day 23 - Leetcode Hard
 *  @date: 04-08-2024
 */


// Activity 1: Median of Two Sorted Arrays
// • Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
//          o Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
//          o Log the median for a few test cases, including edge cases.

function findMedianSortedArrays(nums1, nums2)
{
    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    const len = merged.length;
    
    if (len % 2 === 0)
    {
        return (merged[len / 2 - 1] + merged[len / 2]) / 2;
    }
    else
    {
        return merged[Math.floor(len / 2)];
    }
}


console.log("Activity 1: Median of Two Sorted Arrays");

console.log(findMedianSortedArrays([1, 3], [2])); 
// Output: 2

console.log(findMedianSortedArrays([1, 2], [3, 4])); 
// Output: 2.5

console.log(findMedianSortedArrays([], [1])); 
// Output: 1
















// Activity 2: Merge k Sorted Lists
// • Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
//          o Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
//          o Create a few test cases with linked lists and log the merged list.

class ListNode
{
    constructor(val = 0, next = null)
    {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists)
{
    if (lists.length === 0)
        return null;

    const mergeTwoLists = (l1, l2) =>
    {
        const dummy = new ListNode();
        let current = dummy;

        while (l1 !== null && l2 !== null)
        {
            if (l1.val < l2.val)
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

        current.next = l1 || l2;
        return dummy.next;
    };

    while (lists.length > 1)
    {
        const l1 = lists.shift();
        const l2 = lists.shift();

        const merged = mergeTwoLists(l1, l2);

        lists.push(merged);

    }
    return lists[0];
}


function arrayToList(arr)
{
    let dummy = new ListNode();
    let current = dummy;

    for (let val of arr)
    {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
}


console.log("\nActivity 2: Merge k Sorted Lists");

let lists = [arrayToList([1, 4, 5]), arrayToList([1, 3, 4]), arrayToList([2, 6])];

let mergedList = mergeKLists(lists);

while (mergedList)
{
    console.log(mergedList.val);
    mergedList = mergedList.next;
}


// Activity 2: Merge k Sorted Lists
// 1 1 2 3 4 4 1 2 3 4 4 2 3 4 4 4 4 4 5 6











// Activity 3: Trapping Rain Water
// • Task 3: Solve the 'Trapping Rain Water" problem on LeetCode.
//          o Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
//          o Log the amount of trapped water for a few test cases.

function trap(height)
{
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0, totalWater = 0;

    while (left < right)
    {
        if (height[left] < height[right])
        {
            if (height[left] >= leftMax)
            {
                leftMax = height[left];
            }
            else
            {
                totalWater += leftMax - height[left];
            }
            left++;

        }
        else
        {
            if (height[right] >= rightMax)
            {
                rightMax = height[right];
            }
            else
            {
                totalWater += rightMax - height[right];
            }
            right--;

        }
    }

    return totalWater;
}


console.log("\nActivity 3: Trapping Rain Water");

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); 
// Output: 6

console.log(trap([4, 2, 0, 3, 2, 5])); 
// Output: 9


















// Activity 4: N-Queens
// • Task 4: Solve the "N-Queens" problem on LeetCode.
//          o Write a function that places n queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
//          o Log the distinct solutions for a few test cases.

function solveNQueens(n)
{
    const result = [];
    const board = Array.from({ length: n }, () => ".".repeat(n));
    
    const isSafe = (row, col) =>
    {
        for (let i = 0; i < row; i++)
        {
            if (board[i][col] === 'Q' ||
                (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') ||
                (col + (row - i) < n && board[i][col + (row - i)] === 'Q'))
            {
                return false;
            }
        }

        return true;
    };

    const solve = (row) =>
    {
        if (row === n)
        {
            result.push([...board]);
            return;
        }

        for (let col = 0; col < n; col++)
        {
            if (isSafe(row, col))
            {
                board[row] = board[row].substr(0, col) + 'Q' + board[row].substr(col + 1);
                solve(row + 1);
                board[row] = board[row].substr(0, col) + '.' + board[row].substr(col + 1);
            }

        }
    };

    solve(0);

    return result;
}


console.log("\nActivity 4: N-Queens");

console.log(solveNQueens(4)); 
// Output: 2 solutions
// [
//   [ '.Q..', '...Q', 'Q...', '..Q.' ],
//   [ '..Q.', 'Q...', '...Q', '.Q..' ]
// ]

console.log(solveNQueens(1)); 
// Output: 1 solution
// [ [ 'Q' ] ]



















// Activity 5: Word Ladder
// • Task 5: Solve the "Word Ladder" problem on LeetCode.
//          o Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
//          o Log the length of the shortest transformation sequence for a few test cases.

function ladderLength(beginWord, endWord, wordList)
{
    const wordSet = new Set(wordList);

    if (!wordSet.has(endWord))
        return 0;

    let queue = [[beginWord, 1]];

    while (queue.length > 0)
    {
        const [word, len] = queue.shift();

        if (word === endWord)
            return len;

        for (let i = 0; i < word.length; i++)
        {
            for (let c = 97; c <= 122; c++)
            {
                const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);

                if (wordSet.has(newWord))
                {
                    wordSet.delete(newWord);
                    queue.push([newWord, len + 1]);
                }
            }
        }
    }

    return 0;
}

console.log("\nActivity 5: Word Ladder");

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); 
// Output: 5

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); 
// Output: 0