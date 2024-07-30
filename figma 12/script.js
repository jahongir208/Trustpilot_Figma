let btn1 = document.querySelector(".box3 .bar")
let btn2 = document.querySelector(".box3 .mark")
let list = document.querySelector(".responsive")


btn1.addEventListener("click", () => {
    list.style.display = "block"
    btn2.style.display = "block"
    btn1.style.display = "none"
})
btn2.addEventListener("click", () => {
    list.style.display = "none"
    btn1.style.display = "block"
    btn2.style.display = "none"
})

let first = document.querySelector(".btn-search1");
let second = document.querySelector(".btn-search2");
let last = document.querySelector(".btn-search3");
first.addEventListener("click",()=>{
     first.style.background="#35b8be"
     first.style.color="white"
     first.style.border="none"
     second.style.background=" transparent"
     second.style.color="black"
     second.style.border="1px solid gray"
     last.style.background=" transparent"
     last.style.color="black"
     last.style.border="1px solid gray"
 
 })
second.addEventListener("click",()=>{
    first.style.background=" transparent"
    first.style.color="black"
    first.style.border="1px solid gray"
    second.style.background="#35b8be"
    second.style.color="white"
    second.style.border="none"
    last.style.background=" transparent"
    last.style.color="black"
    last.style.border="1px solid gray"

})
last.addEventListener("click",()=>{
    first.style.background=" transparent"
    first.style.color="black"
    first.style.border="1px solid gray"
    second.style.background=" transparent"
    second.style.color="black"
    second.style.border="1px solid gray"
    last.style.background="#35b8be"
    last.style.color="white"
    last.style.border="none"
})






