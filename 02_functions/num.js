const myNumbers =[1,2,3,4,5,6,7,8,9,10]

const newNUms = myNumbers.map((item)=>
    item=item+10
).filter((item)=>item>15)
console.log(newNUms)