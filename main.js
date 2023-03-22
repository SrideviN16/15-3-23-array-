// return the alphabet from the word//
let words=prompt("enter the new word");
let regex=/[a-z]/g;
let ans=words.match(regex);
console.log(ans);
// 2.Change the upper case and lower case//
let word=prompt("enter the new word");
let b="";
let  uw=word.toUpperCase();
let lw=word.toLowerCase();
console.log(uw);
console.log(lw);
 for( i=0;i<lw.length;i++)
 {
	 for(j=0;j<uw.length;j++)
	 {
		  if(uw[i]==lw[i])
		  {
		  }
		  else 
		  {
			b=uw[i];
		  }
	 }
	 
 }
 console.log(b);