// Local storage ' ın calısma mantıgına bakacak olursak hangi web sitesine girdiysek o web sitesi özelinde bilgileri tutuyor.
localStorage.setItem("animal","dog") // animal keyine karsılık dog value 'sunu set eder.
localStorage.getItem("animal")// animalı get ettigimizde bize dog ' u verir
localStorage.removeItem("animal") //siler


// Peki neden cerez dosyalarında bilgileri tutmuyoruz. Çünkü 4 kb ile sınırlı ve ücüncü sahıslar
//tarafından kolay erişilebiliyor olmasından dolayı.
// LocalStorage ile cookie'ler ile yaptıgımız islemler daha güvenli ve daha hızlı sekilde
// yapılabilir hale gelmiştir.

//LocalStorage: Kayıtları zaman asımı olmaksızın tutarken,
//SessionStorage: Oturum sonlanana kadar yada veri kaybolana kadar tutmaktadır.

// Bilgi: LocalStorage ve SessionStorage kullanıcı tarafından kolayca okunabilir ve degistirilebilir.
// Bu sebeple uygulama içerisindeki güvenlik ile ilgili verilerin depolanmaması gerekmektedir.
// LocalStorage ve SessionStorage sayfalar arasındaki ve client işlemleri arasındaki hassas olmayan verilerin taşınmasında tercih edilmektedir.

//Object

let user = {userName:"ayseilkay",isActive: true}
localStorage.setItem("userInfo",JSON.stringify(user))// json string haline getirdik.
let userInfo=localStorage.getItem("userInfo")
userInfo= JSON.parse(userInfo)// objenin içindeki özelliklerine erismek istedigimiz için,json stringini parse ederek süslü parantezlerden arındırdık.

// JSON.parse() etmeden asağıdaki sekilde erişim mümkün degildi.
console.log(userInfo.userName) // ayseilkay
console.log(userInfo.isActive) // true 

// array
let items= [1,2,3,4,user]
localStorage.setItem("items",JSON.stringify(items))
let item_info=localStorage.getItem("items")
item_info = JSON.parse(item_info)
console.log(item_info[0])
console.log(item_info[4].userName)
console.log(item_info[4].isActive)


//Local Storage verileri string veri tipiyle tutar.


// Local Storage Bolum Sonu Egzersizi
let local_counter = Number(localStorage.getItem("counter") ? localStorage.getItem("counter") : 0 )// localStorage a attıgımızda string veriye donustugu için arttırmak istediğimizde string olarak eklemesin diye numbera cevirdik.
let counter = local_counter;
let counterDOM=document.querySelector("#counter")
let increaseDOM=document.querySelector("#increase")
let decreaseDOM=document.querySelector('#decrease')
counterDOM.innerHTML=counter;

increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click",clickEvent)



function clickEvent(){
    //console.log(this.id)//id bilgisini bize verir.
    this.id== "increase"  ? counter += 1 : counter -= 1 
    localStorage.setItem("counter",counter)
    counterDOM.innerHTML = counter
}
