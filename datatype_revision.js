/*
two type of datatype in js
1. primitive 
2. non-primitive

 primitive type
1. Number
2. String
3. Null
4. undefined
5. Boolean
6. symbol
7. Bigint 
*/
let number=345;
let name="shivam"
let date=null
let state;
let isenail=true
let bigint=12345674565667n
const id=Symbol('123')
const id1=Symbol('123')
console.log(id===id1)
console.log(number)
console.log(name)
console.log(date)
console.log(state)
console.log(isenail)
console.log(bigint)

/*
Non-primitive
array object


*/
// array write in [] square bracket
let arr=["shivam","khushi","ravi","aditya"]

// object write in {} curly bracket
let obj={
    name1:"shivam",
    age:23,

}

// function store in variables
let con=function(){
    console.log("hello world")
}

con()

/*
what show datatype after using typeof()---it return which type variable object array function have

Nunber variable----Number
String---String
Null---Object
Undefined---undefined
Symbol---Synbol
bigint---bigint
object---object
array--object
function--function

*/
console.log(typeof(bigint))


// memory in js
//  stack heap
// primitive data type used stack memory it store copy and change occured in  c++ 
// non-primitive type used heap    

/* 
stack contain copy not directly chanced from main variable 


*/
let a=5;
b=a;
b=3
console.log(a)
//stack contain copy not directly chanced from main variable 
console.log(b)
  let youtube={
    email:"shiamrjp4321@gmail.com",
    money:50000,
  }
  // non-primitive store in heap and chance direct happen in main it not take copy it take refrence
  let secemail=youtube;
  secemail.email="shivamrjput@gmail.com"
  console.log(youtube.email) // dot operator used to for value from object