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
        console.log(item.name)
    }
})


numarray.forEach(function tripledArray(item){
    console.log(item*3)
})



// array method : map

arr.map((item)=>{
    const {name,age,designation} = item;

    console.log(item)
    console.log(name,age,designation)
})

const doubledArray = numarray.map(item=>item*2);
console.log(doubledArray);

// map method return an array.