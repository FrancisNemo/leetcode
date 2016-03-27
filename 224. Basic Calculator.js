/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var num = [], op = [];
    var a=0, b=0, n, tmp, sign;
    for(var i =0; i< s.length; i++){
        ch = s.charAt(i);
        if(ch >='0' && ch <='9'){
            n = parseInt(ch);
            tmp = s.charAt(++i);
            while(tmp !== null && tmp >='0' && tmp <='9' ){
                n = n*10 + parseInt(tmp);
                tmp = s.charAt(++i);
            }
            num.push(n);
            --i;
            continue;
        }
        if(ch === ' '){
            continue;
        }
        if(ch === '+' || ch === '-' || ch === '('){
            op.push(ch);
            continue;
        }
        if(ch === ')'){
            if((sign = top(op)) === '('){
                op.pop();
            }else{
                while((sign = top(op)) !== '('){
                    a = num.pop();
                    if(sign === '-'){
                        a = 0 - a;
                    }
                    op.pop();
                    sign = top(op);
                    b = num.pop();
                    if(sign === '-'){
                       b = 0 - b; 
                       op.pop();
                       op.push('+');
                    }
                    num.push(a+b);
                }
                op.pop();
            }
            continue;
        }
    }
    while(top(op) !== null){
        a = num.pop();
        b = num.pop();
        if(top(op) === '-'){
            a = 0 - a;
        }
        op.pop();
        if(top(op) === '-')
        {
            b = 0 - b;
            op.pop();
            op.push('+');
        }
        num.push(a+b);
    }
    return num.pop();
};

function top(array){
    if(array.length>0) 
        return array[array.length-1]; 
    else 
        return null;
}

//  console.log(0 === calculate('0'));
//  console.log(0 === calculate(' 0'));
//  console.log(0 === calculate('0 '));
//  console.log(0 === calculate(' 0 '));

//  console.log(1 === calculate('(1)'));
//   console.log(1 === calculate('( 1)'));
//     console.log(1 === calculate('( 1)'));
//   console.log(1 === calculate('(1 )'));
  
//   console.log(1 === calculate('( 1)'));
//   console.log(1 === calculate('(1 ) '));
//     console.log(1 === calculate(' ( 1 ) '));
//    console.log(1 === calculate(' ( 1 )'));

//  console.log(2147483647 === calculate('2147483647'));

//  console.log(2 === calculate(' 1 + 1 '));

//  console.log(0 === calculate(' 1 - 1 '));

//   console.log(2 === calculate(' (1 + 1) '));
//   console.log(0 === calculate(' (1 - 1) '));

//  console.log(3 === calculate(' 1 + 1 + 1'));
// console.log(2 === calculate('1-2+3'));

// console.log(2 === calculate('(1-2+3)'));

//  console.log(-4 === calculate('1-(2+3)'));
//  console.log(23 === calculate('(1+(4+5+2)-3)+(6+8)'));
//  console.log(-1 === calculate('(1+(4-5+2)-3)'));

//  console.log(-2 === calculate("(6)-(8)-(7)+(1+(6))"));