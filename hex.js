const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E"];
const btn=document.getElementsByClassName("btn")[0];
const bgc=document.getElementById("bgc");


console.log(bgc);
btn.addEventListener("click",()=>{
    let hexcolor="#"
    for(let i=0 ; i<6 ; i++){
        const num=randomnum();
        hexcolor+=hex[num];
    }

    document.body.style.backgroundColor= hexcolor;
    bgc.innerText=hexcolor;

})

const randomnum=()=>{
    return Math.floor(Math.random()*hex.length);
}