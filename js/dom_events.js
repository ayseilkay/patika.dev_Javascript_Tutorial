
// let greeting= document.querySelector('#greeting')
// greeting.addEventListener("click",function(){
//     console.log("Tiklandi")
// })

let greeting= document.querySelector('#greeting')
greeting.addEventListener("click",domClick)

function domClick(){
    console.log("Tiklandi")
    console.log(this)// tıkladıgımız dom elementinin kim oldugunu bize gösterir.
    console.log(this.innerHTML)// tıkladıgımız dom elementinin innerHTML'ine ulastık.
    this.innerHTML="Bilgi degisti"
    console.log(this.style.color="red")//tıkladıgımız dom elementinin rengini degistirdi.
}

let title=document.querySelector("#title")
title.addEventListener("mouseover",domClick2)

function domClick2(){
   ( this.style.color == "black") ? (this.style.color = "red" ) : (this.style.color = "black")
}

// Event Capturing

/**event.stopPropagation() --> bir eventin özelligini durdurmak icin kullanılır. */

/**event.preventDefault() --> bir HTML elementinin varsayılan eylemini tamamen engellemek için kullanılır. */