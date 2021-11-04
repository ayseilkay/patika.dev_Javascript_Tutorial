
// Function Bolum Sonu Egzersizi
let counter = 0;
let counterDOM=document.querySelector("#counter")
let increaseDOM=document.querySelector("#increase")
let decreaseDOM=document.querySelector('#decrease')
counterDOM.innerHTML=counter;

increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click",clickEvent)

function clickEvent(){
    console.log(this.id)//id bilgisini bize verir.
    // if(this.id == "increase" ){
    //     counter += 1;
    //     counterDOM.innerHTML=counter
    // }
    // else{
    //     counter -= 1;
    //     counterDOM.innerHTML=counter
    // }
    // this.id == "increase" ? (counterDOM.innerHTML=counter += 1) : (counterDOM.innerHTML=counter -=1)
    this.id== "increase"  ? counter += 1 : counter -= 1 
    counterDOM.innerHTML = counter
}


// Not: counterı artırıp azaltırken sayfayı refresh ettigimizde counter yine 0 ' dan baslıyor. Biz sayfayı refresh ettiğimizde kaldığı sayı neyse onu göstersin istiyorsak local storage la bunu çözebiliriz.