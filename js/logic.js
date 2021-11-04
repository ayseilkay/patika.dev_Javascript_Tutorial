let userName=prompt("Kullanıcı bilginizi giriniz")
let age=prompt("Yasiniz:")
let info=document.querySelector("#greeting")
if(userName && age>=18){
    info.innerHTML="ehliyet alabilirsiniz"
}
else if(!userName){
    info.innerHTML="Kullanıcı bilginiz yok"
}
else if(!(age >= 18)){
    info.innerHTML="Yas bilginiz yok veya 18 yasindan kucuksunuz"
}

