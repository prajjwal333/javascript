const name = "hiteshhc"
// console.log("HI")
// console.log(`Hi my name is ${name.toUpperCase()}`)

console.log(name.charAt(1))
let val = name.substring(0,4,2)
// console.log(val)

// console.log(name.slice(-8,1))

const newStringOne =  "prajj--wal is -greate  -  "

// console.log(newStringOne)

// console.log(newStringOne.trimEnd())
// console.log(newStringOne.trim('\''))

console.log(newStringOne.split("-",3))


const arr1 = ["prajjwal","is","great"]
const arr2 = ["but", "he","is","lazy"]
const newarr = [ ...arr1,...arr2]
console.log(newarr)