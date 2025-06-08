function calculateBMI(){
  const weight=parseFloat(document.getElementById("weight").value)
  const height=parseFloat(document.getElementById("height").value)
  const result=document.getElementById("results")

  if(!weight || !height || weight<=0 || height<=0){
    result.innerHTML=`<p style="color:red">please enter correct height and weight</p>`
    return;
  }
  const bmi=(weight/((height*height)/10000)).toFixed(2)

  let category=""
  if(bmi<18.6){
    category="under weight"
  }
  else if(bmi>=18.6  && bmi<24.9){
    category="normal weight"
  }
  else if(bmi>24.9){
    category="over weight"
  }
  result.innerHTML=`<p style="color:blue"> your bmi score ${bmi} your category is <strong style="color:red">${category}</strong></p>`
  
}
