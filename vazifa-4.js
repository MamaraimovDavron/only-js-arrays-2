let a = [1,3,5];
let b = [2,6,10];
let a1 = 0;
let b1 = 0;

for(let i = 0; i < a.length; i++){
    a1 += a[i];
    b1 += b[i];
}

    if(a1 > b1){
        console.log(a);
    }
    else{
        console.log(b);
    }
