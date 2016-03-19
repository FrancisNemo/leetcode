/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   var str = s.trim();
	var index = str.length;
    if(index === 0){
        return 0;
    }
    
    while(str[index--] !== ' '){
    	if(index === -1){
        	return str.length;
    	}else{
    		continue;
   		 }
    }
    return str.length - index - 2;
};