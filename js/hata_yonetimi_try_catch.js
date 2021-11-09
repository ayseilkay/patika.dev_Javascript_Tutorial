// try {
//     //Çalıştırılacak kodlar
//   }catch(hata) {
//     //Hata yakalandığında çalışacak kodlar
//   }finally {
//     //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
//   }
let products;
try {// dene

   products.forEach(item => {
       console.log(item)
   });
}catch(error){ //hatayı bana bildir.
console.log("error: ",error)
}

// Hackerrank örnek challenge
// function reverseString(s) {
//     let word= s;
//     try{
//     let  splitWord = s.split("");
//     let reverseString = splitWord.reverse();
//     let result = reverseString.join("");
//      console.log(result);
//     }
//     catch(error){
//         console.log("s.split is not a function")
//         console.log(s)
//     }
   
    
// }


// function main() {
//     const s = eval(readLine());
    
//     reverseString(s);
// }