const notification = document.querySelectorAll(".notification1")
const post = document.querySelector(".post")
const number = document.getElementById("number")
const redpoint = Array.from(document.querySelectorAll(".redpoint"))

let numero = parseInt(number.textContent)

console.log(number.textContent)
// numero = 20

notification.forEach((noti, i)=>{
    noti.addEventListener("click", ()=> {
        noti.classList.remove("active")
        if(numero>0){
            number.textContent = numero-1
            numero = parseInt(number.textContent)
        }
        redpoint[i].classList.remove("redpoint")
    })
})

post.addEventListener("click", ()=> {
    number.textContent = 0
    notification.forEach((noti)=>{
        noti.classList.remove("active")
    })
    redpoint.forEach((e)=>{
        e.classList.remove("redpoint")
    })
})