
let settings = {
    userName: "loremipsum",
    password: "password124",
    isActive: false,
    ip:"127.0.0.1",
    serverName:"kodluyoruz.org"
}




// let {userName,password,isActive,ip,serverName} = settings
// console.log(userName,password,isActive,ip,serverName)


// rename & destructuring 
// let {userName:user,password,isActive,ip: serverIp,serverName} = settings // userName adını user olarak degistir
// console.log(user,password,isActive,serverIp,serverName) // userName ile alamazsınn. user keyi ile user bilgisini alabilirsin

let {userName,password:userPassword,isActive,...gerikalanlar} = settings
console.log(userName,userPassword,isActive)
console.log(gerikalanlar) // gerikalanlar ın içinde ip ve serverName bilgisi yer almaktadır.

// objenin destructuring ile kopyalanması

// let yeni_settings = settings // !!! KOPYALAMA DEGIL BU ---- HATALI KULLANIM
// yeni_settings.userName = "Degisen Bilgi"
// console.log(yeni_settings) // ikiside degisen bilgi  degerini almıs
// console.log(settings)

// DOGRU KULLANIM ( DESTRUCTURING İLE DOGRU KOPYALAMA YAPABILIRIZ.)

let settings_yeni_dogru_kullanim = {...settings}  // ************************ ONEMLI*********
settings_yeni_dogru_kullanim.userName= "DEGISTI"
console.log("settings_yeni_dogru_kullanim",settings_yeni_dogru_kullanim)
console.log("settings",settings)

let score = [1000,2000,3000,4000]

let [score1,score2,...otherScore] = score // kalanları ... ile destructuring yaparak otherScore a attık
console.log(score1,score2,otherScore)

let copyScore =[...score] // ARRAY DESTRUCTURING COPY DOGRU KULLANIM
score.score1=600
console.log("copyScore",copyScore)
console.log("score",score)

let person={name:"Selin",city:"Ankara",favoriteColor:"aqua blue"}; 
let {name:foo}=person;
console.log(foo)