//spread operator(...)
const arr=[3,7,8];
const arr1=[5,6,9,20,12];

const copiedArr=[...arr];
//console.log(copiedArr);

//combine arrays
const combinedArr=[...arr,...arr1];
//console.log(combinedArr);

//function arguments
const arr2=[4,3];
function add(a,b){
    return a+b;
}
//console.log(add(...arr2));

//rest parameters(...)-converts a list into an array
function add(a,b,...rest){
    //console.log(rest);

}
add(6,7,8,9);

//array length property
const arr3=[4,6,79,5];
//console.log(arr3.length);

//solution
const argumentsLength=function(...args){
    return args.length;
}
console.log(argumentsLength(5));
console.log(argumentsLength({}, null, "3"));