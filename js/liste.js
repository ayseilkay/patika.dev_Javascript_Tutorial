//**** Liste içerisinde son elemana ulasmak veya eleman eklemek ****/

//listin son elemanını bulma

let item= document.querySelector('ul#liste>li:last-child').innerText
console.log(item)
//listin ilk elemanını bulma
let item2=document.querySelector('ul#liste>li:first-child').innerText
console.log(item2)
let item3=document.querySelector('ul#liste>li:first-child').innerText="İlk elemanı degistirdik"
console.log(item3)
// listeye yeni bir eleman ekleme (append)

let yeni= document.querySelector('ul#liste')
let li=document.createElement('li')
li.innerHTML="Yeni olusturdugumuz oge"
yeni.append(li) //en sona ekler.

let ilkbasakelenecek= document.querySelector('ul#liste')
let yeni_li=document.createElement('li')
yeni_li.innerHTML="ilk basa eklemek istedigimiz ifade"
ilkbasakelenecek.prepend(yeni_li)// ilk basa ekler.