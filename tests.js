'use strict'

describe ('flatten function', function() {

    it('should flatten recursively down to any level of nested arrays', function () {

    	function createArr(num) {
			var result = null;
			for (var i = num-1; i >=0; i--){
				if (result === null) {
					result = [i]
				}
				else {
					result = [i, result]
				}
			}
			return result;
			}

		var arr = createArr(10000)
		var arr2 = createArr(7)

		expect(flatten(arr).length).toEqual(10000);
		expect(flatten(arr2)).toEqual([0,1,2,3,4,5,6]);

		// If the array consists of a large number of nested arrays, each of them will 
		// trigger the recursive call which will result in stack overflow.
		// The line 29 will throw an error "Maximum call stack exceeded":
		// expect(flatten(arr).length).toEqual(1000000);

	});

	it('should handle non-number and non-array elements(null, undefined, strings) anywhere in the array)', function() {
		var arr = [null, 0, 2, "I am a string", [[2, 3, undefined], 8, 100, null, [[null]]], -2, undefined];
		var result = [0, 2, 2, 3, 8, 100, -2];
		expect(flatten(arr)).toEqual(result);	
	});

	it('should handle arrays where all elements are not numbers)', function() {
		var arr2 = [null, null, [[undefined]], ["string", null]];
		expect(flatten(arr2)).toEqual([]);		
	});

	it('should handle empty arrays', function() {
		var arr = [[],[[]]];
		var result = [];
		expect(flatten(arr)).toEqual(result)
	});

})