/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s==="") return true;
    s = s.toUpperCase();
    var len = s.length;
    var array = [];
    for(var n = 0; n < len; n++){
        if(isValid(s.charAt(n))) array.push(s.charAt(n)); 
    } 
    for(var i = 0,j = array.length - 1; i < j; i++,j--){  
        if(array[i] != array[j]){  
            return false;  
        }  
    }  
    return true;
};

function isValid(ch){  
    if((ch >= '0' && ch <= '9') || (ch >= 'A' && ch <= 'Z')) return true; else return false;  
} 