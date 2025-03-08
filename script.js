function mafonction(){
    alert("Ma fonction ");
}
function afficheVert(){
    alert("Vert");
}
var btn=document.getElementsByTagName("button");
//alert(btn[0].innerHTML);
//alert(btn[1].innerHTML);
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
document.querySelectorAll('.btn').forEach((btn)=>{
    btn.addEventListener('click',afficheVert)
})
document.querySelectorAll('.btnrouge').forEach((boutton)=>{
    boutton.addEventListener('click',()=>{
        alert('rouge');
    })
})

document.querySelector('.un').addEventListener('click',()=>{
    alert(1);
})