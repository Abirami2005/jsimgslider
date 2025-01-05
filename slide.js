const i=document.getElementById("a");
const im=document.getElementById("b");
const img=document.getElementById("c");
const n=document.getElementById("next");
const p=document.getElementById("prev");
var c=0;
n.addEventListener("click",event=>{
  c=c+1
  console.log(c+"n");
  if(c==1||c==-2){
  i.style.visibility ="hidden";
  im.style.visibility ="visible";
  }
  if(c==2 || c==-1){
    im.style.visibility ="hidden";
    img.style.visibility ="visible";
    }
  if(c>2 || c==0){
     i.style.visibility ="visible";
  im.style.visibility ="hidden";
  img.style.visibility="hidden";
  c=0
  }
}
);
p.addEventListener("click",event=>{
    c=c-1;
    console.log(c+"p");
    if(c==-1){
        i.style.visibility ="hidden";
        img.style.visibility="visible";
    }
    if(c==0||c==-3){
    i.style.visibility ="visible";
    im.style.visibility ="hidden";
    c=0;
    }
    if(c==1||c==-2){
      i.style.visibility="hidden";
      im.style.visibility ="visible";
      img.style.visibility ="hidden";
      }
  }
)