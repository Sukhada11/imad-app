console.log('Loaded!');
var x=document.getElementById("text");
x.innerHTML="New value"
var img=document.getElementById("mandi");
marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick=function(){
  var intrval=setInterval(moveRight,50);
};