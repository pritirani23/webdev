let bars = document.querySelector(".bars")
let nav = document.querySelector(".nav")
let  close = document.querySelector(".close")

bars.addEventListener('click', function(){
    // console.log("click is working")
   nav.classList.add("active")
})


close.addEventListener('click', function(){
    //console.log("click is working")
   nav.classList.remove("active")
})
  
