function passwordGenerator (){
const root = document.getElementsByClassName('root');
const pass = document.querySelector('h3');
    const small =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const capital = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const num = [0,1,2,3,4,5,6,7,8,9]
    
    const newSmall = small.sort((a,b)=> 0.5 - Math.random());
    newSmall.length = 5;
    
    const newCapital = capital.sort((a,b)=> 0.5 - Math.random());
    newCapital.length = 5;
    const newNum = num.sort((a,b)=> 0.5 - Math.random())
    newNum.length =5;
    const intialPassword = newSmall.concat(newCapital);
    const password = intialPassword.concat(newNum);
    
    const finalPassword = password.sort((a,b)=> 0.5 - Math.random())
    
    console.log(finalPassword.join(""))
    pass.innerHTML = finalPassword;

}
