function claculate(){
    var val =document.getElementById("display").value;
    var len = val.length;
    let sym =""
    let index=0,sum1=0,sum2=0,result=0;
    for(let i=0;i<len;i++){
       if(val[i] == '+' || val[i] == '-' || val[i] == '*' ||val[i] == '/' ){
          index= i;
          sym=val[i];
       }
    }
    for(let i=0;i<index;i++){
       sum1=sum1 * 10 + Number(val[i]);
    }
    for(let i=index+1;i<len;i++){
       sum2=sum2 * 10 + Number(val[i])
    }
    if(sym == '+'){
       result = sum1 + sum2;
    }
    else if(sym == '-'){
       result = sum1 - sum2;
    }
    else if(sym == '*'){
       result = sum1 * sum2;
    }
    else if(sym == '/'){
       result = sum1 / sum2;
    }
   
    document.getElementById("display").value = result;
    document.getElementById("h1").innerHTML = result; 
    
 }
 
 
 document.getElementById("cal").addEventListener("click",claculate);