let array=[1,2,3,4,5]
console.log(typeof(array))

let arra=new Array(1,2,3,4,5)
console.log(typeof(arra))

// method of string 

console.log(array.toString())
console.log(array.toLocaleString('en-IN'))
array.sort()
console.log(array)

console.log(array.slice(2,3))
console.log(array.shift())
console.log(array.unshift(0))
array.reverse()
console.log(array)

console.log(array.push(16))
console.log(array.pop())

let a=[1,2,3]
let b=[4,5,6]
console.log(a.concat(b))

console.log(a.at(0))  // 0 start from first00.
console.log(a.at(-1))   // -1 start from last 

console.log(a.includes(2))  // it is used to find value present in array or not

// join change the datatype to string and binding also happend
const newa=a.join()
console.log(console.log(typeof(newa)))   

let d=[1,2,3,4]

console.log(d.slice(1,3))
console.log(d.splice(1,2))


let hero=[1,2,3,4,5]
let h=[5,6,7,8]

let newh=[...hero,...h]  // it is used to cancatened multiple array spread concatination 
console.log(newh)

hero.copyWithin(1,3)
console.log(hero)

for(let [index,value] of hero.entries()){
    console.log(index,value)
}

console.log(hero.every(n=>n%2===0))


// fill(number you want to fill,where you want to start ,where you want to end)
hero.fill(7,2,4)
console.log(hero)

// filter is used to find element accourding to condition

let arr=[1,2,3,4,5]
let even=arr.filter(n=> n%2==1)
console.log(even)

// FIND

let arr1=[12,10,5,4]
let gv=arr1.find(n=>n>10)
console.log(gv)

console.log(arr1.findIndex(n=>n>10))