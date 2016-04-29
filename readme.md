### Recursive Function to Flatten a Multidimentional Array

Implemented function uses recursion to convert multidimentional array into one-dimentional array. To run the tests install testem (https://github.com/testem/testem), run the command "testem" in the terminal and open the URL http://localhost:7357/ in a browser to connect.

The run time of the function is O(n) as the number of recursive calls equal to the number of all elements in the given array. 

The drawback of the recursive approach is that if the passed array has a large number of nested levels, each of these levels will trigger a recursive call, which will result in stack overflow (see line 26 in tests.js).


