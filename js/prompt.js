let fullName=prompt("Lütfen adınızı giriniz")
let greeting= document.getElementById("greeting")
greeting.innerHTML=`${greeting.innerHTML} <small style="color:orange"> ${fullName}</small>`