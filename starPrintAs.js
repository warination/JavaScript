// stars in ascending orders

function starAscending(){
    for(let i =1; i<=5; i++){
        let result = "";
        for(let j=1; j<=i; j++){
            result += "*"
        }
        console.log(result)
        
    }
}

starAscending()


console.log("\n")

// stars in descending order

function starDescending(){
    for(let i =1; i<=5; i++){
        let result = "";
        for(let j=5; j>=i; j--){
            result += "*"
        }
        console.log(result)
        
    }
}

starDescending()

