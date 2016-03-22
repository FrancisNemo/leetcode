/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfThree = function(n) {
//     if(n === 0){
//         return false;
//     }
//     if(n === 1 || n===3 || n===9){
//         return true;
//     }
//     var b = n%10;
//     var r = b;
//     var q = (n-r)/10;
//     while(q > 1){
//         r=q%10;
//         q = (q-r)/10;
//         b=b+r;
//     }
//     if(b%9 === 0) return true; else return false;
// };

var isPowerOfThree = function(n) {
    if(n === 0){
        return false;
    }
   var res = Math.log(n)/Math.log(3);
    return Math.abs(ans - Math.round(ans)) < 0.000000000001;
};