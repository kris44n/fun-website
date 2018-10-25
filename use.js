function LetterChanges(str) { 
  
  let fullArr = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let alphaStr = 'bcdfghjklmnpqrstvwxyz';
  let alphaArr = alphaStr.split('');
  let vowelArr = ['a','e','i','o','u'];
  let strArr = str.split('');
  let retArr = [];
  debugger
  for(let i = 0; i<strArr.length; i++){
      if(alphaArr.includes(strArr[i])){
          let index = fullArr.indexOf(strArr[i]);
          if (index === (fullArr.length-1)){
              retArr.push(fullArr[0]);
          }else{
              retArr.push(index+1);
          }
          
      }else if(vowelArr.includes(strArr[i])){
          retArr.push(str[i].toUpperCase());
      }else if(strArr[i] === ' '){
          retArr.push(strArr[i]);
      }
  }
  return retArr.join(''); 
           
}
   