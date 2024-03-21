//window.alert(`Please view this page on Desktop or Laptop`);
const nam="INDRANIL DE";

function printName(){
    const label=document.querySelector("h1");
    label.style.opacity="0";
    for(let i=1;i<=nam.length;i++){
        setTimeout(()=>{
            label.innerHTML=nam.substring(0,i);
            label.style.transition="opacity 500ms ease";
            label.style.opacity="1";
        },150*i);
    }
}

function printCaption(){
    const caption=document.querySelector(".caption");
    caption.style.opacity="0";
    printName();
    setTimeout(()=>{
        caption.innerHTML="I am an aspiring Java Developer";
        caption.style.transition="opacity 1000ms ease";
        caption.style.opacity="1";
    },170*nam.length);
}

printCaption();

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
});

const hiddenelement=document.querySelectorAll(".hidden");
hiddenelement.forEach((el)=>observer.observe(el));