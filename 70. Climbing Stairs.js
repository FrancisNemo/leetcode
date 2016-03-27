/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	var result = [1,1,2];
	if(n===1 || n===2) return result[n]; 
	for (var i = 3; i <= n; i++) {
		result[i] = result[i-2] + result[i-1];
	}
	return result[n];
};

// console.log(1 === climbStairs(1));
// console.log(2 === climbStairs(2));
// console.log(3 === climbStairs(3));
// console.log(5 === climbStairs(4));
// console.log(8 === climbStairs(5));
console.log(climbStairs(44));