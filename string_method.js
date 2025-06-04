let youtubename=new String('shivam123')

console.log(typeof(youtubename))  // it show object beacuse new String create object string

console.log(youtubename.length)   // it show length of string object

console.log(youtubename.charAt(1))   // it find which ch which position

console.log(youtubename.charCodeAt(0)) //it show ascii value of char

console.log(youtubename.at(1))  // char at position

console.log(youtubename.includes('shi'))  // find present for not

console.log(youtubename.indexOf('va')) // starting value of index

console.log(youtubename.lastIndexOf('am')) // starting value of last substring

console.log(youtubename.toUpperCase())   // convert to uppercase

console.log(youtubename.toLowerCase())   // convert to lowercase

console.log(youtubename.startsWith('s'))  // it find start with true or false

console.log(youtubename.endsWith('am'))   // endwith true or false

console.log(youtubename.slice(2,6))  // it used to slice from the string starting to ending length +1

console.log(youtubename.substring(2,6))  //it is used to find substring starting to ending length+1

console.log(youtubename.substr(2,4)) // it is find substr starting position to length required

console.log(youtubename.replace('shi','khu')) // it is used to replace 

console.log(youtubename.replaceAll('h','k'))// it is used to replace all h to k 

console.log(youtubename.trim())  //  it is used to trim whitespace

console.log(youtubename.trimStart()) // it is used to trim first front white-space

console.log(youtubename.trimEnd()) // it is used to trim last white-space

console.log(youtubename.repeat(3)) // it is used to repeat string 

console.log("a,b,c".split(','))  //split 

console.log(youtubename.concat(" ",'kumar')) // it is used to cancatinate string

console.log(youtubename.match(/\d+/))  // it is used to find digit in the string

let matches=youtubename.matchAll(/\d/g) // it is used to find all digit and print 1 by 1
for(const match of matches){
console.log(match)
}

console.log(youtubename.search(/\d/)) // it is used to search first position of digit

console.log("5".padStart(3,'0')) // add first

console.log("5".padEnd(3,'0')) // add last

console.log('a'.localeCompare('a')) // comapare if equal 0 , if grater 1,if smaller -1

console.log(youtubename.valueOf())  // string value 

console.log(youtubename.toString()) // actual string from string object

let codename='shivam'
let video=400
console.log(`my name is ${codename} and my video count is${video}`)

