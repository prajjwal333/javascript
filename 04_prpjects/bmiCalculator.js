const form = document.querySelector("form")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const hght = parseInt(document.querySelector("#height").value)
    const wght = parseInt(document.querySelector("#weight").value)
    console.log(hght , wght)
    const bmi = (hght/wght)*(hght/wght)
    const res = document.querySelector("#results")
    res.innerHTML=bmi
})
const btn = document.querySelector("button")
btn.addEventListener("submit", (e)=>{
    console.log(e)
})