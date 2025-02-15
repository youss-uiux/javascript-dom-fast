document.getElementById('demo').innerHTML = 'Hello JavaScript!';
var chiffre=document.querySelector('.chiffre').textContent;
var chiffre=parseInt(chiffre);
chiffre=chiffre+1;
document.querySelector('.chiffre').textContent=chiffre;

function plus(){
    var chiffre=document.querySelector('.chiffre').textContent;
    var chiffre=parseInt(chiffre);
    chiffre=chiffre+1;
    document.querySelector('.chiffre').style.color='red';
}