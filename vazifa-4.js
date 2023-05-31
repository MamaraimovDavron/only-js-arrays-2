let a = [1,3,5,19];
let b = [2,6,10,5];
// let a1 = 0;
// let b1 = 0;

showArray = (a,b) => {
    if(a.reduce((total, num) => {return total + num}) > b.reduce((total, num) => {return total + num})){
        return a;
    }

    else{
        return b;
    }
}

console.log(showArray(a,b));



// addArr = (a, b) => {
//     let res = 0;
//     let res1 = 0;
//     for(let i = 0; i < a.length; i++){
//         res += a[i];
//     }

//     for(let i = 0; i < b.length; i++){
//         res1 += b[i];
//     }

//     if(res > res1){
//         return a;
//     }

//     else{
//         return b;
//     }
// }


// console.log(addArr(a,b));