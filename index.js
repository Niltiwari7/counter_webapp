let count=0;
document.getElementById("decreaseBtn").onclick=function(){
   count-=1;
   document.getElementById("countLabel").innerHTML=count;
}

document.getElementById("ResetBtn").onclick=function(){
    count=0;
    document.getElementById("countLabel").innerHTML=count;
}

document.getElementById("inecreaseBtn").onclick=function(){
    count+=1;
    document.getElementById("countLabel").innerHTML=count;
}