
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let li=document.querySelectorAll("li")
let inp=document.querySelector("input")

btn.addEventListener("click",function(){
    console.log(inp.value);
    // console.log(inp.innerText);
    inp.value="";
    
})