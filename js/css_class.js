//*************** css class eklemek veya cikartmak ******************//
let greeting= document.querySelector("#greeting")
greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info","second-class","third-class")//birden fazla class eklendi
greeting.classList.remove("text-primary")
greeting.classList.remove("title","new-info","third-class")//birden fazla class cıkartıldı
console.log(greeting.classList)
console.log(!!2);