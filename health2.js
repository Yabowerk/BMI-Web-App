import { datajs } from "./data.js";
let data=JSON.parse(localStorage.getItem('data'))
document.querySelector('.weightJs').innerHTML=`${data[0].weight}kg`;
document.querySelector('.heightJs').innerHTML=`${data[0].height}m`;
document.querySelector('.ageJs').innerHTML=data[0].age;
document.querySelector('.genderJs').innerHTML=data[0].gender;
const resultJs=document.querySelector('.result');
const BMI=data[0].BMI;
console.log(data[0].BMI);


    //no let fix if the BMI is normal
    if(data[0].BMI>=18.5 && data[0].BMI<24.5){
        resultJs.innerHTML="YOU ARE NORMAL";
        document.querySelector('.letfixcontainer').innerHTML='';
         
    }
console.log(resultJs);
 //male image

        if(data[0].gender==='male'){
        let theimage;
            if(BMI<18.5){
            theimage='underweight';
            }
            else if(BMI>=18.5 && BMI<24.5){
                theimage='normal';
            }
            else if(BMI>=24.5 && BMI<40){
                theimage='overweight';
            }
            else{
                theimage='obese';
            }

            document.querySelector('.image').innerHTML=`<img src="male/${theimage}.PNG">`;
        }
//female image
        else if(data[0].gender==='female'){
            let theimage;
            if(BMI<18.5){
                theimage='underweight';
            }
            else if(BMI>=18.5 && BMI<24.5){
                theimage='normal';
            }
            else if(BMI>=24.5 && BMI<40){
                theimage='overweight';
            }
            else{
                theimage='obese';
            }
        
            document.querySelector('.image').innerHTML=`<img src='female/${theimage}.PNG'>`;
        }    

document.querySelector('.fixJs').addEventListener('click',()=>{
    window.location.href="nutrition.html";//take note
});
console.log(data[0].weight);
console.log(BMI);
console.log('its working');



   
   if(BMI<18.5){
    resultJs.innerHTML="YOU ARE UNDERWEIGHT";
    
   }
   else if(BMI>=18.5 && BMI<24.5){
    console.log('fghf');
    resultJs.innerHTML="YOU ARE NORMAL";
   
   }
   else if(BMI>=24.5 && BMI<40){
    resultJs.innerHTML="YOU ARE OVERWEIGHT";
   }
   else{
    resultJs.innerHTML="YOU ARE OBESE";
   }
   