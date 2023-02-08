// prime nos between 1 to 100

const arr = [];
for(let i=1; i<=100; i++){
    let count = 0;
    for(let j=1;j<=i; j++){
        if(i%j==0){
            count ++;
        }
    }
    if(count == 2){
            console.log(i); //every prime no between 1 to 100
            arr.push(i)
        }
}

arr.length = 10;//if you need to print first 10 prime no
console.log(arr)


// to check particular no is prime or not

const num = 31;
let countt = 0;

for(let a = num; a<=num; a++){
    for(let b = 1; b<=a; b++){
        if(a%b==0){
            countt++;
        }
    }
    if(countt == 2){
        console.log(`${num} is a prime no`)
    }else{
        console.log(`${num} is not a prime no`)
    }
}