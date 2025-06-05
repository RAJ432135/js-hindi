function AddTwoNumber(number1,number2){
    return number1+number2   //it return in variable
    console.log(number1+number2)  // id is not return in variable
}
//AddTwoNumber(4,5)  
const result=AddTwoNumber(4,5)
console.log(result)

function loginusered(user){

    if(user===undefined){
        console.log("please enter user name")
        return
    }
    return `${user} successful logdin`
}
 console.log(loginusered("shivam"))
 console.log(loginusered(""))  // it return
 console.log(loginusered())  // this showundefined


 //claculate cart price
 function calculateCart(val1,val2,...price){   //...rest operator
    return price
 }
 console.log(calculateCart(20,30,40,60))

 //const user={
 // name:"shivam",
 // price:456
 //}
 function getprice(Anyobject){
    return `${Anyobject.name} is price is${Anyobject.price}`
 }
//console.log(getprice(user))

console.log(getprice({
    name:"khushi",
    price:56678
}))

const arrayp=[20,30,40,50]
function seconde(arra){
    return arra[2]
}
const sec=seconde(arrayp);
console.log(sec)
