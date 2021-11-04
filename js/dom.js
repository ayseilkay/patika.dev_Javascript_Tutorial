
let title=document.getElementById('title')
title.innerHTML="iyiyim sen nasılsın?"
console.log(title.innerHTML)

let link=document.querySelector("ul#list>li>a")
link.innerHTML="link bilgisi degisti"
console.log(link.innerHTML)
let link2=document.querySelector("#a_id")
console.log(link2.innerHTML)
link.style.color="purple"
link.classList.add('btn');

const animals=document.getElementsByTagName('p')
console.log(animals)

//id ler için # kullanılır
const email = document.querySelector('#signup input[name="email"]');
console.log(email)
const inputs= document.getElementById('signup').getElementsByTagName('input')
console.log(inputs)
// classlar için . kullanılır
const elems = document.querySelectorAll('.bird, .animal');
console.log(elems.length); 
