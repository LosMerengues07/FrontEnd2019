"use strict";  
function isNum(c){
    return c<='9' && c>='0';
}

function operate(defination,x,y)
{
    if(defination=="x+y" || defination=="y+x"){
        return x+y;
    }else if(defination=="x-y"){
        return x-y;
    }else if(defination=="y-x"){
        return y-x;
    }else if(defination=="x*y" || defination=="y*x"){
        return x*y;
    }else if(defination=="x/y"){
        return Math.floor(x/y);
    }else if(defination=="y/x"){
        return Math.floor(y/x);
    }
}

function operatorDefinition(defination, expression) {
    let num_stack = [];
    let opr_stack = [];
    expression = '('+expression+')';
    for (let i in expression)
    {
        let item = expression[i];
        if(isNum(item)) 
        {   
            item = item-'0';
            if(i==0 || !isNum(expression[i-1]))
                num_stack.push(item);
            else{
                let temp = num_stack.pop();
                num_stack.push(temp*10 + item);
            }
        }
        else
        {
            switch(item)
            {
                case '(':
                    opr_stack.push(item);
                    break;
                case '&':
                    opr_stack.push(item);
                    break;
                case ')':
                    while(opr_stack.slice(-1)!='(')
                    {
                        opr_stack.pop();
                        let y = num_stack.pop();
                        let x = num_stack.pop();
                        num_stack.push(operate(defination,x,y));
                    }
                    if(opr_stack.slice(-1)=='(')
                        opr_stack.pop();
            }
        }
    }
    return String(num_stack.pop());
}

var defination = "y/x";
var expression = "4&((2&4)&43)";
console.log(operatorDefinition(defination, expression));