const btns = document.querySelectorAll(".button")
const body = document.querySelector("body")


btns.forEach((btn)=>{
    console.log(btn)
    btn.addEventListener('click',function(e){
        console.log(e)
            body.style.backgroundColor=e.target.id

    })

})