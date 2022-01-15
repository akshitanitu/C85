Canvas=document.getElementById("myCanvas");
CDX=Canvas.getContext("2d");
NASA-imgarray=["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"]
rn=Math.floor(Math.random()*4);
console.log(rn);
RW=100;
RH=90;
BGimg=NASA-imgarray[rn];
console.log("Backgroundimg="+BGimg);
Rimg="rover.png";
RX=10;
RY=10;
function add(){
    newBG=new Image();
    newBG.onload=uploadBackground;
    newBG.src=BGimg;
    
    newRimg=new Image();
    newRimg.onload=uploadrover;
    newRimg.src=Rimg;
}
function uploadBackground(){
    CDX.drawImage(newBG,0,0,Canvas.width,Canvas.height);
}
function uploadrover(){
    CDX.drawImage(newRimg,RX,RY,RW,RH);
}
window.addEventListener('keydown',mykeydown);
function mykeydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=="38")
    {
        up();
    console.log("up");
    }

    if(keypress=="40")
    {
        down();
    console.log("down");
    }

    if(keypress=="37")
    {
        left();
    console.log("left");
    }

    if(keypress=="39")
    {
        right();
    console.log("right");
    }
}
function up(){
    if(RY>=0){
        RY=RY-10;
        console.log ("when up arrow preesed,x="+RX+",y="+RY);
        uploadBackground();
        uploadrover();
    }
}
function down(){
    if(RY<=500){
        RY=RY+10;
        console.log ("when up arrow preesed,x="+RX+",y="+RY);
        uploadBackground();
        uploadrover();
    }
}
function left(){
    if(RX>=0){
        RX=RX-10;
        console.log ("when up arrow preesed,x="+RX+",y="+RY);
        uploadBackground();
        uploadrover();
    }
}
function right(){
    if(RX<=700){
        RX=RX+10;
        console.log ("when up arrow preesed,x="+RX+",y="+RY);
        uploadBackground();
        uploadrover();
    }
}