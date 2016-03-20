/**
 * @param {number[]} heights
 * @return {number}
 */
// var largestRectangleArea = function(heights) {
//     var len, subArray, tmp_array = [], heights_len = heights.length;
//     for (var index = 1; index <= heights_len; index++) {
// 		len = heights_len - index;
// 		for (var i = 0; i <= len; i++) {
// 			subArray = heights.slice(i,i+index);
// 			tmp_array.push(Math.min.apply({},subArray)*subArray.length);
// 		}
//     }
//     return Math.max.apply({},tmp_array);
// };

var largestRectangleArea = function(heights) {
	heights.push(0); // set a minimum number to end
	var i = 0, stack = [], len = heights.length, maxAreas = 0;
	while(i < len){
		 if (stack.length === 0 || heights[i] >= heights[stack[stack.length -1]]) {
		 	stack.push(i++);
		 }else{
			maxAreas = Math.max(maxAreas, heights[stack.pop()] * (stack.length === 0 ? i : (i - stack[stack.length -1] - 1)));
		 }
	}
	return maxAreas;
};

console.log(largestRectangleArea([2,1,5,6,2,3]));