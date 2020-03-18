let div1=document.createElement('div');
document.body.appendChild(div1);
div1.className='demo';

var x = false;
var lastx;
var lasty;


div1.onmousedown=function(e){
    x = true;
    lastx=e.clientX;
    lasty=e.clientY;

}



document.onmousemove=function(e){
    if(x===true){
        var resultx=e.clientX-lastx;
        var resulty=e.clientY-lasty;
        var top=parseInt(div1.style.top) || 0;
        var left=parseInt(div1.style.left) || 0;
        if(top < 0){
            top=0
        }
        if(left < 0){
            left=0
        }
        div1.style.top=top+resulty+'px';
        div1.style.left=left+resultx+'px';
        lastx=e.clientX;
        lasty=e.clientY;
    }
        
}

document.onmouseup=function(){
    x = false;
}
