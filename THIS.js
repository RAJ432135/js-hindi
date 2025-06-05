const user={
    name:"shivam",
    price:445676543,
    message:function(){
        console.log(`${this.name} welcome to js hindi course`)//this refere to current value in object
        console.log(this)
    }
}

console.log(this)  // it return empty    fromm console in browser it return first window
user.message()

function chai(){
    console.log(this)
}
chai()

/*function user(){
    const name="shivam"
    const age =21
    console.log(this.name)    


}*/
//user()  // you cannot used this keyword in function
//function letral in bs6
const addtwo=(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(4,5))

const oneadd=(num1,num2)=>(num1+num2)   // not need to return used when used small baracket
console.log(oneadd(3,4))

//immideat invoked function  expression iife
// global scope ke palution se problem hoti hai kai bar us global scope ke jo bhi variable or decleration hai papulution usko htane ke liye use kiye hai
/*(function chai() { named iife
    console.log("db connected");
})();
(function chai1() {
    console.log(`Hello from anonymous IIFE`);
})();
(()=>{   // unnamed iife
    console.log("name")});
*/

