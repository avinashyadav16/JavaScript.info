/**
 *  @file: Day-17.js
 *  @author: Avinash Yadav
 *  @brief: Day 17 - Data Structures
 *  @date: 29-07-2024
 */



// Activity 1: Linked List
// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.

class Node
{
    constructor(value)
    {

        // Value of the node
        this.value = value;

        // Pointer to the next node
        this.next = null;
    }
}


















// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList
{
    constructor()
    {
        
        // Head of the linked list
        this.head = null;
    }

    // Method to add a node to the end of the list
    add(value)
    {
        const newNode = new Node(value);

        if (this.head === null)
        {
            this.head = newNode;
        }
        else
        {
            let current = this.head;

            while (current.next !== null)
            {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to remove a node from the end of the list
    remove()
    {
        if (this.head === null)
        {
            return null;
        }

        if (this.head.next === null)
        {
            const value = this.head.value;
            this.head = null;
            return value;
        }

        let current = this.head;

        while (current.next.next !== null)
        {
            current = current.next;
        }

        const value = current.next.value;
        current.next = null;
        return value;
    }

    // Method to display all nodes
    display()
    {
        let current = this.head;
        while (current !== null)
        {
            console.log(current.value);
            current = current.next;
        }
    }
}


console.log("LinkedList:");
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
console.log("Linked List after adding nodes:");
list.display();
console.log("Removed node:", list.remove());
console.log("Linked List after removing a node:");
list.display();


















// Activity 2: Stack
// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack
{
    constructor()
    {
        this.items = [];
    }

    // Method to add an element to the stack
    push(element)
    {
        this.items.push(element);
    }

    // Method to remove an element from the stack
    pop()
    {
        if (this.items.length === 0)
        {
            return "Stack is empty/Underflow";
        }

        return this.items.pop();
    }

    // Method to view the top element of the stack
    peek()
    {
        if (this.items.length === 0)
        {
            return "Stack is empty/Underflow";
        }
        return this.items[this.items.length - 1];
    }

    // Method to check if the stack is empty
    isEmpty()
    {
        return this.items.length === 0;
    }

    // Method to display all elements in the stack
    display()
    {
        console.log(this.items.toString());
    }
}

console.log("\nStack:");
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Stack after pushing elements:");
stack.display();
console.log("Top element:", stack.peek());
console.log("Popped element:", stack.pop());
console.log("Stack after popping an element:");
stack.display();


















// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

function reverseStrUsingStack(str)
{
    const stack = new Stack();

    for (let char of str)
    {
        stack.push(char);
    }

    let reversedStr = "";

    while (!stack.isEmpty())
    {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

console.log("\nReverse String using Stack:");
const originalStr = "hello";
console.log(`Original string: ${originalStr}`);
const reversedStr = reverseStrUsingStack(originalStr);
console.log(`Reversed string: ${reversedStr}`);


















// Activity 3: Queue
// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class Queue {
    constructor()
    {
        this.items = [];
    }

    // Method to add an element to the queue
    enqueue(element)
    {
        this.items.push(element);
    }

    // Method to remove an element from the queue
    dequeue() {
        if (this.items.length === 0)
        {
            return "Queue is empty/Underflow";
        }
        return this.items.shift();
    }

    // Method to view the first element of the queue
    front()
    {
        if (this.items.length === 0) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Method to check if the queue is empty
    isEmpty()
    {
        return this.items.length === 0;
    }

    // Method to display all elements in the queue
    display()
    {
        console.log(this.items.toString());
    }
}

console.log("\nQueue:");
const queue = new Queue();
queue.enqueue(55);
queue.enqueue(37);
queue.enqueue(21);
console.log("Queue after enqueuing elements:");
queue.display();
console.log("Front element:", queue.front());
console.log("Dequeued element:", queue.dequeue());
console.log("Queue after dequeuing an element:");
queue.display();


















// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

class PrinterQueue
{
    constructor()
    {
        this.queue = new Queue();
    }

    addPrintJob(job)
    {
        this.queue.enqueue(job);
        console.log(`Added print job: ${job}`);
    }

    processPrintJob()
    {
        if (this.queue.isEmpty())
        {
            console.log("No print jobs to process");
        }
        else
        {
            const job = this.queue.dequeue();
            console.log(`Processing print job: ${job}`);
        }
    }

    displayJobs()
    {
        this.queue.display();
    }
}


console.log("\nPrinter Queue:");
const printerQueue = new PrinterQueue();
printerQueue.addPrintJob("Job 1");
printerQueue.addPrintJob("Job 2");
printerQueue.addPrintJob("Job 3");
console.log("Print jobs in the queue:");
printerQueue.displayJobs();
printerQueue.processPrintJob();
printerQueue.processPrintJob();
console.log("Print jobs remaining in the queue:");
printerQueue.displayJobs();


















// Activity 4: Binary Tree
// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.

class TreeNode
{
    constructor(value, left = null, right = null)
    {
        // Value of the node
        this.value = value; 
        
        // Left child node
        this.left = left;
        
        // Right child node
        this.right = right;
    }
}


















// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class BinaryTree
{
    constructor()
    {
        // Root of the binary tree
        this.root = null;
    }

    // Method to insert a value into the tree
    insert(value)
    {
        const newNode = new TreeNode(value);

        if (this.root === null)
        {
            this.root = newNode;
        }
        else
        {
            this.insertNode(this.root, newNode);
        }
    }

    // Method to insert a node into the tree
    insertNode(node, newNode)
    {
        if (newNode.value < node.value)
        {
            if (node.left === null)
            {
                node.left = newNode;
            }
            else
            {
                this.insertNode(node.left, newNode);
            }
        }
        else
        {
            if (node.right === null)
            {
                node.right = newNode;
            }
            else
            {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Method to perform in-order traversal of the tree
    inOrderTraversal(node)
    {
        if (node !== null)
        {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    // Method to display the in-order traversal of the tree
    displayInOrder() {
        this.inOrderTraversal(this.root);
    }
}

console.log("\nBinaryTree:");
const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(8);
console.log("In-order traversal of the binary tree:");
binaryTree.displayInOrder();


















// Activity 5: Graph (Optional)
// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

class Graph 
{
    constructor() 
    {
        this.adjacencyList = {}; // Adjacency list to represent the graph
    }

    // Method to add a vertex to the graph
    addVertex(vertex) 
    {
        if (!this.adjacencyList[vertex]) 
        {
            this.adjacencyList[vertex] = [];
        }
    }

    // Method to add an edge between two vertices
    addEdge(vertex1, vertex2) 
    {
        if (!this.adjacencyList[vertex1]) 
        {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) 
        {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    // Method to perform BFS on the graph
    bfs(startVertex) 
    {
        const queue = [startVertex];
        const visited = {};
        visited[startVertex] = true;

        while (queue.length > 0)
        {
            const vertex = queue.shift();
            console.log(vertex);

            this.adjacencyList[vertex].forEach(neighbor =>
            {
                if (!visited[neighbor])
                {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
    }

    // Method to find the shortest path between two vertices using BFS
    shortestPath(startVertex, endVertex)
    {
        const queue = [startVertex];
        const visited = { [startVertex]: true };
        const predecessors = { [startVertex]: null };

        while (queue.length > 0)
        {
            const vertex = queue.shift();

            if (vertex === endVertex)
            {
                const path = [];
                let current = endVertex;
                while (current !== null)
                {
                    path.unshift(current);
                    current = predecessors[current];
                }
                return path;
            }

            this.adjacencyList[vertex].forEach(neighbor =>
            {
                if (!visited[neighbor])
                {
                    visited[neighbor] = true;
                    predecessors[neighbor] = vertex;
                    queue.push(neighbor);
                }
            });
        }

        // No path found
        return null; 
    }
}

console.log("\nGraph:");
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

console.log("BFS traversal from vertex A:");
graph.bfs('A');

console.log("\nShortest Path in Graph:");
console.log("Shortest path from A to E:");
console.log(graph.shortestPath('A', 'E'));