const arr =  [{
    name: "warish",
    age: 25,
    designation: "Web Developer"
},
{
    name: "Rahul",
    age: 5,
    designation: "Shaktiman fan"
},
{
    name: "Soni",
    age: 29,
    designation: "boss"
}
]


const numarray = [1,2,3,4,5,6,7,8,9,10];

// array method : forEach

function showItem(item){
    console.log(item);
    console.log(item.designation);
}

arr.forEach(showItem)

arr.forEach(function(item){
    if(item.designation == "boss"){
        console.log(item)
    }
})


numarray.forEach(function tripledArray(item){
    console.log(item*3)
})



// array method : map()
// map method return new array.
// doesnt affect the size of the original array.

arr.map((item)=>{
    const {name,age,designation} = item;

    console.log(item)
    console.log(name,age,designation)
})

const doubledArray = numarray.map(item=>item*2);
console.log(doubledArray);


// array method: filter()

const youngPeople = arr.filter((person)=> person.age<=10);
console.log(youngPeople)

const greaterThanFour =  numarray.filter((item)=> item>4)
console.log(greaterThanFour);


// array method : reduce()

const totalAdd = numarray.reduce((a,b=0)=>a+b)
console.log(totalAdd);
