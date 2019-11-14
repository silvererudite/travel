var dark=false;
const btn= document.getElementById('switch');


btn.addEventListener('click',

function ifClicked(){
   
   if(!dark){
    document.getElementById('bc').style.backgroundColor="gray";
    document.getElementById('bc').style.color="white";
    dark=true;
   }
   else{
    document.getElementById('bc').style.backgroundColor="white";
    document.getElementById('bc').style.color="black";
    dark=false;
   }
});

const search_icon=document.getElementById('search');
const input1=document.getElementById('input');
search_icon.addEventListener('click',

function ifClicked(){
   search_icon.style.visibility="hidden";
   input1.style.display="block";
   // input1.style.backgroundColor="grey";
   
});