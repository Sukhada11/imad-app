console.log('Loaded!');
var x=document.getElementById("text");
x.innerHTML="New value"
var img=document.getElementById("mandi");
marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick=function(){
  var intrval=setInterval(moveRight,100);
};