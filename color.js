const wrap = document.getElementById("wrap");
const color = document.getElementById("color");
const btn = document.getElementById("btn");

const index= [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
btn.addEventListener("click",stb)

function stb(){
    let as='#'
    for(let i=1;i<=6;i++){
        as = as+ col()
    }
    console.log(as)
    wrap.style.backgroundColor=as
    color.innerHTML=as
}


function col(){
    let col  = Math.floor(Math.random()*16)
    return index[col]
}

