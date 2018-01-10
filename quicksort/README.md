# Quicksort

- Written in a variety of langauges. 
- One of the more efficient sorts, but a bit trickier to code.
- Has an average and best case asymptotic behavior of O(n log n).
- Worst case is O(n^2).

## Overview

1. We pick a pivot. May be done in a number of ways such as picking the last element or a random element. 
2. In linear time, we partition the current list into two lists on the left and right, the left list has every element less than the pivot, and the right list has every element greater than the pivot.
3. Recursively repeat steps 1 and 2 on the smaller lists until the lists have a length of one, keeping track of the pivots.
4. We now build back up, using the pivots we previously kept track of. Noting that, smaller elements were on the left, and larger elements are on the right. 


![Visual depiction of quicksort from geeksforgeeks.org](https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/QuickSort2.png)

- ((A good resource to read about quicksort.))[https://www.geeksforgeeks.org/quick-sort/]

