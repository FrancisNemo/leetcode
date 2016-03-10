/**
 * @param {number} numRows
 * @return {number[][]}
 */
var result = [];
var generate = function(numRows) {
    if(numRows === 0){
        return result;
    }
    if(numRows === 1){
        result[0] = [1];
        return result;
    }
    if(numRows >= 2){
        result[0] = [1];
        result[1] = [1,1];
        for(var i=2; i < numRows; i++){
            var array = [];
            array.push(1);
            for(var j=1; j<i; j++){
                array.push(result[i-1][j-1] + result[i-1][j]); 
            }
            array.push(1);
            result[i] = array;
        }
        return result;
    }
};
