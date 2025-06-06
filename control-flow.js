//Implicit Scope 
if(3>2) console.log("greater")

    /*
    falsy value

    fasle,0,-0,BigInt 0n,null,undefined,""

    */

    // nullish coaeleshing operator ?? null undefined

    let val;
    val =5??10 // when value is not null or undefined it return first value

    let v;
    val= null??10 // it return 10

    // ternairy operator

   // condition ? true :false

    const iceprice=50;
    iceprice>=80 ? console.log("price is grater than 80"):console.log("price is less than 80")

    //IF

    let email="shivamrjp4321"
    if(email){
        console.log("email present")
    }

    let balance=10000
    if(balance<500){
        console.log("balance is less than 500")
    }
    else if(balance<700){
        console.log("balance is less than 700")
    }
    else{
        console.log("balance is greater than 700")
    }

    let day=1;
    switch(day){
        case 1:
            console.log("monday")
            break;
        case 2:
            console.log("tuesday")   
            break; 
        default:
            console.log("please enter true value")   
            break;

    }

    //for loop

    let array=[2,3,4,5,6]
    for(let i=0;i<array.length;i++){
        console.log(array[i])
    }

    // for loop with break and continue

    for(let k=0;k<array.length;k++){
         if(array[k]%2==1) continue;
         console.log(array[k]);
    }
 let count =20

    while(count<30){   // check the condition then run
        count+=2;
        console.log(count)
    }

    do{
        let count=20;
        count++;
        console.log(count)
    }while(count>30)

        // FOR EACH LOOP

        let arr=[1,2,3,4,5]
        for(const num of arr){
            console.log(num)
        }

        let map=new Map();
        map.set("in","india")
        map.set("usa","united state america")
        map.set("cn","canada")
        for(const [key,values] of map){
            console.log(`${key}" " ${values}`)
        }

        // FOR EACH LOOP NOT WORKING IN OBJECT VALUE KEY RETRIVAL

        // FORIN LOOP FOR OBJECT
        let objects={
            cpp:"c++",
            py:"python",
            js:"java script",
        }
        for(const key in objects){
            console.log(objects[key])
        }

        // foreach loop
        let arr2=["js","c++","python","ruby"]

        arr2.forEach((val)=> {
            console.log(val)
        });

        const coding=[
            {
                languagename:"java",
                languagefilename:"j",
            },
             {
                languagename:"javascript",
                languagefilename:"js",
            },
             {
                languagename:"c++",
                languagefilename:"cpp",
            },
        ]
        coding.forEach((item)=>{
          console.log(item.languagename)
        })

        