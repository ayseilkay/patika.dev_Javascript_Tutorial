function LetterChanges(str) { 

    let result = '';
    let vowel = 'aeiou';
    str.split("").forEach(item => {
      if(item >= "a" && item <= "z"){
        let a = item.charCodeAt() + 1;
        if( a >= 123 ) a-=26;
        item = String.fromCharCode(a);
        if(vowel.includes(item)){
          item =item.toUpperCase();
        }
  
      }
      result += item;
    })    
    return result; 
  
  }
     
  // keep this function call here 
  console.log(LetterChanges(readline()));


  /*************************************** */
  function LetterCapitalize(str) { 

    let splitWord = str.split(" ");
    let result ;
    for(let i = 0 ; i < splitWord.length ; i++){
     splitWord[i]= splitWord[i].charAt(0).toUpperCase() + splitWord[i].slice(1);
    }
    result = splitWord.join(" ")
    
  return result; 

}
   
// keep this function call here 
console.log(LetterCapitalize(readline()));

