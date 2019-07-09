"use strict";  
function f(i){
    return i*2;
}
var functor = [1,[2,3,[4]],[5,[6]],[]];

function fmap(f, functor) {
    for (let index in functor)
    {
        let item = functor[index];
        if(!Array.isArray(item)) {functor[index] = f(item);}
        else {functor[index] = fmap(f,item);}
    }
    return functor
}

console.log(fmap(f, functor))
