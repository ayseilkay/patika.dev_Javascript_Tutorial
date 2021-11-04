let userName=prompt("Kullanici bilginizi yazınız")
let info=document.querySelector('#greeting')

//ternary operator
info.innerHTML=`${(userName.length)>0 ? userName: "bilgi yok" }`