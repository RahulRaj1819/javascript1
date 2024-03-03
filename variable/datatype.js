//primitive
//7 types : String ,Number,Boolean,null,undefined,symbol,BigInt

const score =100
const scorevalue=100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id== anotherId); //false

const bigNumber = 12093751937



//reference(non primitive)
//array,Objects,functions
const heros = ["rahul","divyanshu","doga"]
let myObj = {
    name:"rauhl raj",
    age:21,
}
 const myfunction = function(){
    console.log("rahul raj");
}
console.log(typeof bigNumber)