function hello(name){
    console.log(`Merhaba ${name}`)
}

hello("Javascript")

//const la tanımladık.=> (fat arrow ifadesidr.)
const helloFunc= (name)=>{console.log(`Merhaba${name}`)}

helloFunc("AYSE")

const helloFunc2=name=>console.log(`Merhaba${name}`)
helloFunc2("Ali")

const helloFunc3 =(firstName,LastName) => console.log(`Merhaba ${firstName} ${LastName}`)
helloFunc3("Ayse","İlkay")

const helloFunc4=(firstName,LastName,age)=>{
    let personal_info = `Merhaba ${firstName} ${LastName} yasınız ${age}`
    console.log(personal_info)
    return personal_info
}
helloFunc4("İkra","Yasa","3")