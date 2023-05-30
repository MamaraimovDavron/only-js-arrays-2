let arr = [1,3,4,12,43,50,100,20,2000, 14];
let arr1 = arr.filter((arr) => {return arr % 2 == 0 && arr > 9 && arr < 100});
console.log(arr1);

