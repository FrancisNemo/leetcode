/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var hash = {};
    for(var a in nums){
        if(hash[nums[a]]){
            hash[nums[a]]++;
        }else{
            hash[nums[a]] = 1;
        }
    }
    var len = parseInt(nums.length/3);
    var result = [];
    for(var n in hash){
        if(hash[n] > len){
            result.push(parseInt(n));
        }
    }
    return result;
};
