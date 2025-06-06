// forEach loop not returned value it show un defined
let arr2=["js","c++","python","ruby"]
let result=arr2.forEach((item)=> console.log(item))
console.log(result) // undefined



/*let result1=num.filter((val)=>{
    return val>3
})
console.log(result1)*/

// FILTER IS USED TO FIND SOME THINGS FROM ARR
let num=[1,2,3,4,5,6]
let num1=[]
num.forEach((num)=>{

if(num>3){ 
    num1.push(num)
}
}
)
console.log(num1)

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 }
];

const res=books.filter((val)=> val.publish>2000)
console.log(res)
// use multiple map filter in one 

let val=[1,2,3,4,5,6,7,8,9,10]

let neval=val.map((val)=> val*10) 
             .map((val)=>val+1)
console.log(neval)

//js reduce

let array1=[1,2,3,4]
let newa=array1.reduce((acc,cval)=>{
console.log(`${acc}is accumlator and ${cval} is current val`);
return acc+cval
},0)
console.log(newa)



/*
array.reduce((accumulator, currentValue) => {
  // logic
  return updatedAccumulator;
}, initialValue);

*/

const shoppingCart = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 },
  { name: "USB Cable", price: 500 }
];
let totalprice=shoppingCart.reduce((acc,cval)=>{
    console.log(`${cval.name} is price of every items${cval.price} `)
      return acc+cval.price
    },0)
console.log(`total price ${totalprice}`)