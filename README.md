# Sort Microservice

This microservice supports bubble sort and merge sort.

Supported API endpoints:

#### Bubble sort
`/bubbleSort`

Performs a bubble sort. Request body should contain one field, called "unsortedNumbers", which is an array of numbers.

The response body will contain one field, called "sortedNumbers", which is the sorted result of the array given.

#### Merge sort
`/mergeSort`

Performs a merge sort. Request body should contain one field, called "unsortedNumbers", which is an array of numbers.

The response body will contain one field, called "sortedNumbers", which is the sorted result of the array given.

## Instructions

Run `npm install` to install dependencies

Run `npm start` to start the server.

Then send your request to http://localhost:3000.

## Complexity

### Bubble sort
**On average**, bubble sort has O(n<sup>2</sup>) time complexity. In the **worst case**, it has O(n<sup>2</sup>). If the input array is **already sorted** (which is the best case), it has O(n) runtime.

Bubble sort is an in-place algorithm so has O(1) space complexity **in all cases**.

### Merge sort
Merge sort has O(n log n) time complexity **in all cases**, since it has to recurse the full depth and compare every element.

Merge sort has O(n) space complexity **in all cases**, because each function call is executed sequentially depth-first.

## Design choices

Albeit its simplicity, the server code has been split into two main parts for separation of concerns: controllers and managers.

Controllers are requests and response-level layer handlers which perform sanity checks on requests, pass the formatted input to managers, and format the result from managers to send responses.

Managers only handle business logic. In this case, the only business logic is the sorting algorithms so there are only algorithm managers.