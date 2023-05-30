let arr = [1,3,4,5,6,7];
let l = arr.length;
let num = Math.floor(l / 2);
let res;

// if(num){
//     res = arr[num];
// }

// if(l % 2 === 0){
//     res = (arr[num - 1] + arr[num + 1]) / 2;
// }

// console.log(res);


for(let i = 0; i <= l; i++){
    if(i % 2 == 0){
        res = (arr[i + 1] + arr[i - 1]) / 2;
    }
}

console.log(res);