function addTwoNumber(a,b){
    console.log(a+b)
    return (a+b)
}

// console.log(addTwoNumber(1,2))
// console.log("Result is " , ans)

function loginUserMessage(username="prajjwal"){
    if(!username)
    {
            console.log("Please Enter a username")
            return
    }
        return `${username} just logged in`
    
    
}
// console.log(loginUserMessage())


// shopping cart

function calculateCartPrice (val1, ...num){
    return num

}
const user ={
    username : "prajjwal",
    price: "199"
}

console.log(calculateCartPrice(2,3,4))

function handleObject(anyObject){
    console.log(`Uername is ${anyObject.username} and price is ${anyObject.proce}`)
}

handleObject(user)