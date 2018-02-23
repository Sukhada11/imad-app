console.log('Loaded!');
var x=document.getElementById("text");
x.innerHTML="New value"
var img=document.getElementById("mandi");
img.onclick=function(){
  var intrval=setInterval(moveRight,100);
};