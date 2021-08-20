let total = document.getElementById("emojiWrapper");
let emoji = document.getElementById("emoji");
let port;
let movement1;
let movement2;
let percent;
let difference;
let eyeArea = document.getElementById("eyeArea");
let reset = document.querySelectorAll("*");
let emojiEyes = document.getElementsByClassName("emojiEyes");
let mouth = document.getElementById("mouth");
let eyeballs = document.getElementsByClassName("eyeballs");
percent = 100/40;
if (innerWidth>innerHeight){
    difference = innerWidth-innerHeight;
    percent = difference/innerHeight * 100;
    port = innerWidth/(100+percent) * 40;
}
else {
    if (innerHeight==innerWidth){
        port = 40/100 * innerHeight;
    }
    else {
        difference = innerHeight-innerWidth;
        percent = difference/innerWidth * 100;
        port = innerHeight/(100+percent) * 40;


    }
}
emoji.setAttribute("style",`width: ${port}px;height: ${port}px;border-radius: 50%;overflow:hidden;display: flex;flex-direction: column;align-items: center;background-color: yellow;`);
total.setAttribute("style",`width: ${innerWidth}px;height:${innerHeight}px;display: flex;justify-content: center;align-items: center;`);
eyeArea.setAttribute("style",`width: ${port * 100/100}px;height: ${port * 50/100}px;display: flex;justify-content: space-around;align-items: center;`);
emojiEyes = Array.from(emojiEyes);
emojiEyes.forEach(element => {
    element.setAttribute("style",`width: ${port * 20/100}px;height: ${port * 20/100}px;border-radius: 50%;background-color: white;`);
});
mouth.setAttribute("style",`width:${75/100 * port}px;height: ${port * 25/100}px;border-radius: 50%;margin-top: 10%;background-image: linear-gradient(yellow 50%,red 50%)`);
eyeballs = Array.from(eyeballs);
eyeballs.forEach(element => {
    element.setAttribute("style",`width: ${port * 7.5/100}px;height: ${port * 7.5/100}px;background-color: black;border-radius: 50%;`);
});
window.addEventListener("mousemove",(e)=>{
let x_coords = e.pageX;
let y_coords = e.pageY;
movement1 = (port*7/100)/innerWidth;
movement2 = (port*7/100)/innerHeight;
eyeballs.forEach(element => {
    element.setAttribute("style",`width: ${port * 7.5/100}px;height: ${port * 7.5/100}px;background-color: black;border-radius: 50%;transform: translate(${x_coords * movement1}px,${y_coords * movement2}px)`);
});

});
emoji.addEventListener("mouseover",()=>{
    mouth.setAttribute("style",`width:${50/100 * port}px;height: ${port * 25/100}px;border-radius: 30px;margin-top: 10%;background-image: linear-gradient(red 50%,red 50%)`);
});
emoji.addEventListener("mouseout",()=>{
    mouth.setAttribute("style",`width:${75/100 * port}px;height: ${port * 25/100}px;border-radius: 50%;margin-top: 10%;background-image: linear-gradient(yellow 50%,red 50%)`);
});


