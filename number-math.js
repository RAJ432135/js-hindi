let num=new Number(4000000)
console.log(num)
console.log(typeof(num))

console.log(num.toFixed(3))  // toFixed is used to return after the point .000

console.log(num.toExponential(0))

console.log(num.toLocaleString('en-IN'))  // IT IS USED to show the number in indian structure

console.log(num)

let value=400
console.log(value.toPrecision(3))   // upto which number you wnat 

console.log(num.toString()) // it convert the number in string

console.log(num.valueOf()) // it convert object number to simple number



// math operation

console.log(Math.abs(-4))  // it chance the negative value to positive

console.log(Math.round(4.3)) // it chance the value to nearest abslute value

console.log(Math.ceil(4.2)) // when one or more point big it return next number

console.log(Math.floor(4.3))  // it return same value without decimal

console.log(Math.min(2,3,4,5,1))  // min value max value

console.log(Math.round(Math.random()*10)+1)


// date ans time

let mydate=new Date();
console.log(mydate)

console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(mydate.getDay())

// convert now date to sec

console.log(Math.floor(Date.now()/1000))

