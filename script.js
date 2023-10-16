const color=["Red","rgb(34,67,89)","#0e458c","hsl(89,45%,70%)"];
const btn=document.getElementsByClassName("btn")[0];
const bgc=document.getElementById("bgc");


console.log(bgc);
btn.addEventListener("click",()=>{
    const num=randomnum();
    console.log(color[num]);

    document.body.style.backgroundColor=color[num];
    bgc.innerText=color[num];
})

const randomnum=()=>{
    return Math.floor(Math.random()*color.length);
}
console.log(color[randomnum()]);

