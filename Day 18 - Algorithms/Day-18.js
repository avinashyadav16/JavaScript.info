/**
 *  @file: Day-18.js
 *  @author: Avinash Yadav
 *  @brief: Day 18 - Algorithms
 *  @date: 30-07-2024
 */



// Activity 1: Sorting Algorithms
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function bubbleSort(arr)
{
    let n = arr.length;

    for (let i = 0; i < n - 1; i++)
    {
        for (let j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                // Swapping the elements:
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

console.log("Bubble Sort:");
let array = [72, 21, 9, 35, 17];
console.log("Original array:", array);
console.log("Sorted array:", bubbleSort(array));















// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function selectionSort(arr)
{
    let n = arr.length;
    for (let i = 0; i < n - 1; i++)
    {
        let minIdx = i;

        for (let j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[minIdx])
            {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }

    return arr;
}

console.log("\nSelection Sort:");
array = [98, 45, 20, 39, 71];
console.log("Original array:", array);
console.log("Sorted array:", selectionSort(array));















// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function quickSort(arr)
{
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++)
    {
        if (arr[i] < pivot)
            left.push(arr[i]);
        else
            right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log("\nQuicksort:");
array = [174, 125, 102, 202, 111];
console.log("Original array:", array);
console.log("Sorted array:", quickSort(array));
















// Activity 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

function linearSearch(arr, target)
{
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] === target)
            return i;
    }

    return -1;
}

console.log("\nLinear Search:");
array = [18, 27, 39, 45, 59];
let target = 30;
console.log(`Array: ${array}`);
console.log(`Target value: ${target}`);
console.log(`Target index: ${linearSearch(array, target)}`);















// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

function binarySearch(arr, target)
{
    let left = 0;
    let right = arr.length - 1;

    while (left <= right)
    {
        let mid = Math.floor((left + right) >> 1);

        if (arr[mid] === target)
            return mid;
        else if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }

    return -1;
}

console.log("\nBinary Search:");
array = [17, 28, 39, 46, 55];
target = 30;
console.log(`Array: ${array}`);
console.log(`Target value: ${target}`);
console.log(`Target index: ${binarySearch(array, target)}`);
















// Activity 3: String Algorithms
// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

function countCharacterOccurrences(str)
{
    const counts = {};
    for (let char of str)
    {
        counts[char] = (counts[char] || 0) + 1;
    }

    return counts;
}

console.log("\nCharacter Occurrences:");
let string = "Avinash Yadav";
console.log(`String: ${string}`);
console.log(`Character counts: ${JSON.stringify(countCharacterOccurrences(string))}`);

















// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function longestSubstringWithoutRepeating(str)
{
    let maxLength = 0;
    let start = 0;
    let charIndex = {};

    for (let end = 0; end < str.length; end++)
    {
        let char = str[end];

        if (charIndex[char] !== undefined && charIndex[char] >= start)
        {
            start = charIndex[char] + 1;
        }

        charIndex[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log("\nLongest Substring Without Repeating Characters:");
string = "abcabcbb";
console.log(`String: ${string}`);
console.log(`Length of longest substring: ${longestSubstringWithoutRepeating(string)}`);





















// Activity 4: Array Algorithms
// Task 8: Write a function to rotate an array by k positions. Log the rotated array.

function rotateArray(arr, k)
{
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

console.log("\nRotate Array:");
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = 4;
console.log(`Original array: ${array}`);
console.log(`Rotated array by ${k} positions: ${rotateArray(array, k)}`);














// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

function mergeArrays(arr1, arr2)
{
    let merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length)
    {
        if (arr1[i] < arr2[j])
        {
            merged.push(arr1[i]);
            i++;
        }
        else
        {
            merged.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length)
    {
        merged.push(arr1[i]);
        i++;
    }

    while (j < arr2.length)
    {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

console.log("\nMerge Sorted Arrays:");
let array1 = [1, 3, 5, 7, 9];
let array2 = [2, 4, 6, 8, 10];
console.log(`Array 1: ${array1}`);
console.log(`Array 2: ${array2}`);
console.log(`Merged array: ${mergeArrays(array1, array2)}`);
















// Activity 5: Dynamic Programming (Optional)
// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

function fibonacciDP(n)
{
    let fib = [0, 1];

    for (let i = 2; i <= n; i++)
    {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
}

console.log("\nFibonacci Sequence:");
let n = 15;
console.log(`Fibonacci number at position ${n}: ${fibonacciDP(n)}`);



















// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

function knapsack(weights, values, capacity)
{
    let n = weights.length;
    let dp = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++)
    {
        for (let w = 0; w <= capacity; w++)
        {
            if (weights[i - 1] <= w)
            {
                dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            }
            else
            {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

console.log("\nKnapsack Problem:");
let weights = [1, 3, 4, 5];
let values = [1, 4, 5, 7];
let capacity = 7;
console.log(`Weights: ${weights}`);
console.log(`Values: ${values}`);
console.log(`Capacity: ${capacity}`);
console.log(`Maximum value: ${knapsack(weights, values, capacity)}`);