var bulb = document.querySelector(".bulb")

var btn = document.querySelector("button")

var flag = 0;

btn.addEventListener("click",function(){
   if(flag === 0){
    bulb.style.backgroundColor = "yellow"
    console.log("clicked")
    flag = 1
    btn.textContent="OFF"
   }
   else{
    bulb.style.backgroundColor = "transparent"
    console.log("clicked")
    flag = 0
    btn.textContent="ON"

   }
   
}) 