//singleton
// object.create

// object literals
const sym=Symbol("key1")
const jsuser={
    name:"shivam",
    "full name":"shivam kumar",
    age:21,
    [sym]:"keyone1",
    location:"jaipur",
    email:"shivamrjp4321@gmail.com",
    islogdin:false,
    lastlogindate:["monday","tuesday"],

}
console.log(jsuser["name"])
console.log(typeof jsuser[sym])
console.log(jsuser["lastlogindate"])

// change the value in object 
jsuser.email="shivamrjaput01"
//Object.freeze(jsuser)   // IT FREEZE ALL VALUE KEY IN OBJECT

// for MULTIPLE  object
Object.defineProperties(jsuser,{
  email:{ writable: false, 
  configurable: false },
  name: { writable: false,
    configurable : false,

  }})
jsuser.email="suryavanshi"
jsuser.name="piyush"
console.log(jsuser["name"])

jsuser.greeting=function(){
  console.log("hello js users")
}
console.log(jsuser.greeting())

jsuser.greetingtwo=function(){
  console.log(`hello js user ${this.name}`)
}
jsuser.greetingtwo()



//SINGLETON OBJECT
/*const tinderuser=new Object()
console.log(tinderuser)*/

const  tinderuser={
  id : 43,
  email:"shivamrjp4321@gmail.com ",
  fullname:{
    username:{
        firstname:"shivam",
        lastname:"kumar",
    }
  }
}
console.log(tinderuser.fullname.username.firstname)

// cancatination 

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3=Object.assign(obj1,obj2)
//const obj3={...obj1,...obj2}
console.log(obj3)

const users=[
  {
  id:23,
  email:"shi"
  },
  {},
  {},
  {},
]
console.log(users[0].email)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty("email1"))

// distructure in object
const course={
  coursename:"c++",
  amount:999,
  instructorname:"shivam rajput",


}
const {instructorname:instructor}=course
console.log(instructor)

// json api format
{
 // "name":"shivam",
 // "id":"456"
}
[
  {},
  {},
]


