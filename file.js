var ch="je suis un bonne homme ."
var count1=0; // longuer de chaine de caractere
var count2=0; // nombre de mots
var count3=0; // nombre de voyelles

while(ch[count1]!="."){
    count1+=1;
  }
  console.log(count1+1);
  
  for(var i=0 ; i<count1 ; i++){
    if(ch[i]==" "){
        count2+=1
    }
  }
  console.log(count2);

var i=0;
while(i<count1){
    if(ch[i]=="a"|| ch[i]=="i"|| ch[i]=="u"|| ch[i]=="e"|| ch[i]=="o"|| ch[i]=="y"){
        count3+=1;
    }
    i++
}
console.log(count3);
