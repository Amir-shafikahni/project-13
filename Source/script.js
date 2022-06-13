let $ = document

///////////////////////////

const body = $.body
const mainBody = $.querySelector(".mainBody")
const modalBox = $.querySelector(".modalBox")
const modalOpenerBtn = $.querySelector(".mainBody .btn")
const modalCloserBtn = $.querySelector(".modalBox .btn-close")

modalOpenerBtn.addEventListener("click" , function(){
    modalBox.className = "modalBox fade-in"
    mainBody.style.filter = "blur(7px)"

    body.addEventListener("keydown" , modalKeyboardCloser)
})

modalCloserBtn.addEventListener("click" , function(){
    modalBox.className = "modalBox fade-out"
    mainBody.style.filter = "blur(0px)"
    body.removeEventListener("keydown" , modalKeyboardCloser)
})

function modalKeyboardCloser(event){
    if(event.key === "Escape"){
        modalBox.className = "modalBox fade-out"
        mainBody.style.filter = "blur(0px)"
        body.removeEventListener("keydown" , modalKeyboardCloser)
    }
}