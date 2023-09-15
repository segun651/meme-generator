 let topvalue = document.getElementById("top")
 let bottomvalue = document.getElementById("bottom")
let  toptext = document.getElementById("toptext")
let bottomtext = document.getElementById("bottomtext")
 
  
 function generate() {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
   .then(function(data){
     console.log(data)
   let current = Math.floor(Math.random() * data.data.memes.length)
   let img = document.getElementById("img")

   if(topvalue.value === "" && bottomvalue.value === "") {
       alert("No inputs ")
   }
   else {
     let array = data.data.memes[current]
    

       img.src = array.url
     toptext.innerHTML = topvalue.value
     bottomtext.innerHTML = bottomvalue.value
   }
   })
     
 }