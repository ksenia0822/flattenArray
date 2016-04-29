### Recursive Function to Flatten a Multidimentional Array

Implemented function calls iteself recursively to convert a multidimentional array into a one-dimentional array. The run time of this function is O(n) as the number of recursive calls equal to the number of all elements in the given array. 

The drawback of this approach is that if we have a large number of nested arrays, each of them will trigger the recursive call which will result in stack overflow (see line 26 inm tests.js).

To run the tests install testem (https://github.com/testem/testem), run the command "testem" in the terminal and open the URL http://localhost:7357/ in a browser to connect.
