
let userTop=prompt("enter distance from top of the window:","0");
let userRight=prompt("enter distance from right of the window","0");
let userHtml=prompt("enter the html notif:");
let userClassName=prompt("enter the className:"); 

let el = document.createElement('div');
document.body.appendChild(el);
el.style.backgroundColor="pink";
el.style.width="5rem";
el.style.height="5rem";
el.style.float="right"


let myobj={
    top:userTop,
    right:userRight,
    html:userHtml,
    className:userClassName,
    showNotification:function(){
        
        el.style.marginTop=this.top;
        el.style.marginRight=this.right;
        el.textContent =this.html;
        el.className=this.className;
     

    }
}
myobj.showNotification();








    