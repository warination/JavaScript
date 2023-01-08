const calcAverage = (a, b, c) =>{
    return (a+b+c)/3
}

avgDolphins = calcAverage(85,54,41);
avgKolas = calcAverage(23,34,27)

const checkWinner = (avgDolphins, avgKolas) =>{
    if(avgDolphins > 2*avgKolas){
        console.log(`Dolphins win ( ${avgDolphins} vs. ${avgKolas})`)
    }else if(avgKolas > 2*avgDolphins){
        console.log(`Kolas win (${avgKolas} vs. ${avgDolphins})`)
    }else{
        console.log("no team wins!")
    }
}

checkWinner(avgDolphins,avgKolas)
