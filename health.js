import { datajs } from "./data.js";
const weightjs=document.querySelector('.weight');
const heightjs=document.querySelector('.height');
const agejs=document.querySelector('.age');
const genderjs=document.querySelector('.gender');

const enterjs=document.querySelector('.enter').addEventListener('click',()=>{

  let BMI=weightjs.value/(heightjs.value*heightjs.value);

  datajs.push({weight:weightjs.value,height:heightjs.value,age:agejs.value,gender:genderjs.value,BMI:BMI});
  localStorage.setItem('data',JSON.stringify(datajs));
window.location.href="statusdisplay.html";
   /*console.log(BMI);
   console.log(datajs)
   if(BMI<18.5){
    document.querySelector('.result').innerHTML=`${BMI.toFixed(2)}   Under weight`;
   }
   else if(BMI>=18.5 && BMI<24.5){
     document.querySelector('.result').innerHTML=`${BMI.toFixed(2)}   Normal`
   }
   else if(BMI>=24.5 && BMI<40){
    document.querySelector('.result').innerHTML=`${BMI.toFixed(2)}Over weight`;
   }
   else{
    document.querySelector('.result').innerHTML=`${BMI.toFixed(2)} Obese`;
   }*/
  weightjs.value='';
  heightjs.value='';
  agejs.value='';
  genderjs.value='';
}

);

