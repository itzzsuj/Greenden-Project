var a=document.querySelector(".cancel")
var b=document.getElementById("sidenav")
a.addEventListener("click",function(){
    b.style.right="-50%"
})

var c=document.getElementById("snav")
c.addEventListener("click",function(){
    b.style.display="block"
    b.style.right=0
})