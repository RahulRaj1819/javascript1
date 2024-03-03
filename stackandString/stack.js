//primitive stack(primitive) heap(non-primitive)
// let myYotubename = "rahul raj"
// let anothername = myYotubename
// anothername ="rahul1819"

//     console.log(myYotubename);
//     console.log(anothername);

//     let userOne ={
//         email: "rahulrajpck"
//         upi : "7091****93"
//     }

    /*************************String**************************************/

const name="rahul"
const  repoCount = 50
console.log(`Hello my name is ${name} and repoCount is ${repoCount}`); //string Interpolation

const gameName = new String ('Rahul-Raj')
console.log(gameName[0]); //R
console.log(gameName.__proto__); //{}object
console.log(gameName.length); //8
console.log(gameName.toUpperCase()); //
console.log(gameName.charAt(3)); //u
console.log(gameName.indexOf('u')); //3

//substring
const newString = gameName.substring(0,4)
console.log(newString); //Rahu

//slice
const anotherString = gameName.slice(-8,4)
console.log(anotherString); //ahu

//trim
const newStringOne = " Rahul  Raj "
console.log(newStringOne); //   Rahul Raj
console.log(newStringOne.trim()); //Rahul  Raj

//replace
const url = "https: //rahulraj.com/rahul%20raj"

console.log(url.replace('%20','-'));//https: //rahulraj.com/rahul-raj

//split
const newName = "rahul-kumar-kushwaha"
console.log(newName.split('-'));//[ 'rahul', 'kumar', 'kushwaha' ]