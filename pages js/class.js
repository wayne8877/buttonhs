const img=document.querySelector(".left-img")
const sx=document.querySelector(".sx")
const main=document.querySelector(".main")
img.addEventListener("click",
    function(){
     sx.classList.toggle("active")
    }
)
main.addEventListener("click",function(){
    sx.classList.remove("active")
})
// 分类1
const btn1=document.querySelector(".btn1")
const itema=document.querySelector(".item1")
btn1.addEventListener("click",
    function(){
       itema.classList.toggle("center")
       itema.classList.toggle("center")
       itema.classList.toggle("center")

       itemb.classList.remove("center")
       itemc.classList.remove("center")
       itemd.classList.remove("center")
    })

// 2
const btn2=document.querySelector(".btn2")
const itemb=document.querySelector(".item2")
btn2.addEventListener("click", 
    function(){
itemb.classList.toggle("center")
itemb.classList.toggle("center")
itemb.classList.toggle("center")

itema.classList.remove("center")
itemc.classList.remove("center")
itemd.classList.remove("center")

})
// 3
const btn3=document.querySelector(".btn3")
const itemc=document.querySelector(".item3")
btn3.addEventListener("click",
    function(){
       itemc.classList.toggle("center")
       itemc.classList.toggle("center")
       itemc.classList.toggle("center")

       itemb.classList.remove("center")
       itema.classList.remove("center")
       itemd.classList.remove("center")

    }
)
// 4
const btn4=document.querySelector(".btn4")
const itemd=document.querySelector(".item4")
btn4.addEventListener("click",
    function(){
 itemd.classList.toggle("center")
 itemd.classList.toggle("center")
 itemd.classList.toggle("center")

 itema.classList.remove("center")
 itemb.classList.remove("center")
 itemc.classList.remove("center")
})
// 联动
window.onload=function(){
const urlparsams=new URLSearchParams(window.location.search);
const buttonca=urlparsams.get('autoClick');
if(buttonca){
const button=document.querySelector(`.${buttonca}`);
if(button){
    button.click();
}

}

}
