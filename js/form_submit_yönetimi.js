let formDOM= document.querySelector("#userForm")
let scoreInputDOM= document.querySelector("#score")// input elementini sectik.
formDOM.addEventListener('submit',formSubmit)


// preventDefault() ile default islemi ENGELLEDIK.( ben islemi yapayım ama hic birsey yapma demektir.)
// Örn: Gönder butonuna bastık ama herhangi bir işlem yapma dedik.
//(  // index.html sayfasına geldiğimizde göndere basıldıgında artık göndrilen parametre gözükmez.)

//İNPUT içerisindeki değeri almak
//Dikkat: İnputun name bilgisi mutlaka olmalıdır.
function formSubmit(event){
    event.preventDefault()// formdaki method post da olsa get de olsa bunu engelliyoruz.
    console.log(scoreInputDOM.value)
    localStorage.setItem("not",scoreInputDOM.value)
}

//Form - submit bölüm sonu egzersizi

let formDom = document.querySelector("#info")
let alertDom=document.querySelector("#alert")
const alertFunction= (type,title,message) =>`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

formDom.addEventListener('submit',formSubmited)

 function formSubmited(e){
    e.preventDefault();
    const firstName = document.querySelector("#username")
    const lastName = document.querySelector("#lastname")
    const not= document.querySelector("#not")
    if(firstName.value && lastName.value && not.value){
        addItem(firstName.value,lastName.value,not.value)
        firstName.value="" // veriyi ekledikten sonra iclerini bosalttık.
        lastName.value=""
        not.value=""
    }
    else{
       alertDom.innerHTML = alertFunction("danger","Baslık Bilgisi","Eksik bilgi girdiniz.");
    }
}

/** <li class="list-group-item d-flex justify-content-between align-items-center mb-8" >
                    dsfkşdf
    <span class="badge bg-primary rounded-pill"> 2</span>
     </li>
  */
 let userList= document.querySelector("#userList")
// function addItem(firstname,lastname){
//     let li = document.createElement('li')
//     li= li.innerHTML=`${firstname} ${lastname}`
//     userList.append(li)
// }
const addItem = (name,lastname,not)=> {
    let liDOM = document.createElement('li')
    liDOM.innerHTML=`${name} ${lastname}  <span class="badge bg-primary rounded-pill"> ${not}</span>`
    liDOM.classList.add(
        'list-group-item','d-flex', 'justify-content-between','align-items-center'
        )
    userList.append(liDOM)
}
