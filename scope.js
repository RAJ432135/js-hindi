//Closure   means child function access parent variable  it also called nested function
function user(){
  const name="shivam"
  function channel(){
    const channelname="rajput";
    console.log(name)
  }
  
  channel()
}
user()

//global scope 

var a=20;

//local scope 
let b=30;  //it reassign only in scope
const c=40;  // it is not redeclered re assign in scope
{
    //scope
}

//HOSTING 
console.log(addone(5))
function addone(num){
  return num+1;
}
/*console.log(addtwo(5))
const addtwo=function(num){
  return num+2;
}*/  //it return error because of hosting rule