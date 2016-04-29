'use strict'

var flatten = function(arr) {
   var result = [];
   for(var i = 0; i < arr.length; i++) {
       var cur = arr[i]
       if(typeof cur === "number" ) {
          result.push(cur);
       } else if (Array.isArray(cur)) {
          result = result.concat(flatten(cur));
       }
   }
   return result;
}


