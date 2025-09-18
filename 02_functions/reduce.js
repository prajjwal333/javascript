const nums = [1,2,3,9]

const total = nums.reduce((acc, val )=>{
    console.log(`acc ${acc} , val ${val}`)
    return acc + val
},0
)
console.log(total)
