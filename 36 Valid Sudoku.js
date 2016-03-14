/**
 * @param {character[][]} board
 * @return {boolean}
 */
var row,column,submatrix,x,y;

var isValidSudoku = function(board) {
    for(var i=0;i<9;i++){
        row = [];
        column = [];
        submatrix = [];
        
        for(var j=0;j<9;j++){
            if(board[i][j] !== '.'){
                if(row[board[i][j]]){
                    return false;
                }else{
                    row[board[i][j]] = true;
                }
            }
            
            if(board[j][i] !== '.'){
                if(column[board[j][i]]){
                    return false;
                }else{
                    column[board[j][i]] = true;
                }
            }
            
            x = parseInt(i/3)*3 + parseInt(j/3);
            y = (i%3)*3 + j%3;
            if(board[x][y] !== '.'){
                if(submatrix[board[x][y]]){
                    return false;
                }else{
                    submatrix[board[x][y]] = true;
                }
            }
        }
    }
    return true;
};
