import React from 'react';

function add(n1, n2){
    return n1+n2;
}
function sub(n1, n2){
    return n1-n2;
}
function div(n1, n2){
    let ans = n1/n2;
    return ans.toFixed(2);
}
function mul(n1, n2){
    return n1*n2;
}

export {add, sub, div, mul};
