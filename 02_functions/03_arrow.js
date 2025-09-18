const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function ()
    {
            console.log(`${this.username}, Welcome to website`);
    }
}

// user.welcomeMessage("sam")
user.username = "sam"
// user.welcomeMessage()


function check()
{
    console.log(this)
}
// check()

const check2 = function() {
    console.log(this)
}
// check2()

const check3= () => {
    console.log(this)
}

// check3()



(function checkIIFE(){
    console.log("My name is khan")
})();

(function checkIIFE2(){
    console.log("My name is joshi")
})()

var val = 2
switch(val){
    case 1:
        console.log("value is 1")
        break;
    case 2:
        console.log("value is 2")
    case 3:
        console.log("value is 3")
        break;
    case 4:
        console.log("value is 4")
        break;
    default:
        console.log("default value printed")
        break
}