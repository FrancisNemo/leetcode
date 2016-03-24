/**
 * @param {number[]} height
 * @return {number}
 */

 var maxArea = function(height) {
    var len = height.length;
    if(len < 2) return 0;
    var l = 0, r = len-1, v = 0;
    while(l < r){
        v = Math.max(v, Math.min(height[l],height[r])*(r-l));
        if(height[l] < height[r]){
            var k=l;  
                while(k<r&&height[k]<=height[l])  
                    k++;  
                l=k;  
        }else{
            var s=r;  
                while(s>l&&height[s]<=height[r])  
                    s--;  
                r=s; 
        }
    }
    return v;
};

// var maxArea = function(height) {
//     var len = height.length;
//     if(len < 2) return 0;
//     var l = 0, r = len-1, v = 0;
//     while(l < r){
//         v = Math.max(v, Math.min(height[l],height[r])*(r-l));
//         if(height[l] < height[r]){
//             l++;
//         }else{
//             r--;
//         }
//     }
//     return v;
// };