let arr = [1,3,5,4,5,10];
// let l = arr.length;
// let num = Math.floor(l / 2);
// let res;


showArr = (arr) => {
    const l = arr.length - 1;

    if(l % 2 == 0){
        return arr[Math.floor(l / 2)];
    }

    else{
        return (arr[Math.floor(l / 2)] + arr[Math.floor(l / 2) + 1]) / 2;
    }
}

console.log(showArr(arr));