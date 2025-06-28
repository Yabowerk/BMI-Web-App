const adviceJs=document.querySelector('.advice');
const data=JSON.parse(localStorage.getItem('data'));
let BMI=data[0].BMI.toFixed(2);
let age=data[0].age;
let weight=data[0].weight;
let detailpartjs=document.querySelector('.detailpart');
let exerciseJs=document.querySelector('.exercise');
let mealplanJs=document.querySelector('.meal-plan');
const dashimageJs=document.querySelector('.dashcontainer');

 document.querySelector('.agejs').innerHTML=`Age: ${age}`;
 document.querySelector('.bmijs').innerHTML=`BMI: ${BMI}`;
 document.querySelector('.weightjs').innerHTML=`Weight: ${weight}`;

//nutrition advice
if(BMI<18.5){
    detailpartjs.innerHTML="<ul><br><li>Try to consume 0.8 gram of protein per pound body weught(if you weight 116 pound to to take about 93g protein per day)<br></li><li>Eat more frequently with energy-dense meals.</li><br><li>Include healthy fats like avocados, nuts, and olive oil.</li><br><li>Add smoothies and milkshakes to boost calories.</li><br><li>Increase protein: eggs, beans, chicken, tofu.</li></ul>";
   }
   
   else if(BMI>=24.5 && BMI<40){
    detailpartjs.innerHTML="<ul><li>Reduce sugary drinks and snacks</li><br><li>Eat more fiber (vegetables, whole grains, legumes)</li><br><li>Cook meals at home and control portions</li><br><li>Drink water before meals to prevent overeating.</li></ul>";
   }
   else if(BMI>=40){
    detailpartjs.innerHTML="<ul><li>Adopt a calorie-controlled, nutrient-rich diet</li><br><li>Avoid fast food, fried foods, and sugary drinks</li><br><li>Prioritize whole foods: vegetables, lean proteins, whole grains</li><br><li>Consider seeking help from a dietitian or health professional.</li></ul>";
   }
   //exercise advice

   if(BMI<18.5){
    exerciseJs.innerHTML="<ul><li>Focus on compound exercises rather than isolation exercise which target only one muscle group(prefer barbell squat,benchpress,deadlift,barbell row rather than biceps curl)</li><br><li>Avoid excessive cardio—keep it minimal</li><br><li>Rest well between workouts to allow muscle gain.</li></ul>";
   }
   
   else if(BMI>=24.5 && BMI<40){
    exerciseJs.innerHTML="<ul><li>Increase cardio (walking, jogging, cycling)</li><br><li>Add strength training to build muscle and burn fat</li><br><li>Be consistent with moderate-intensity workouts.</li></ul>";
   }
   else if(BMI>=40){
    exerciseJs.innerHTML="<ul><li>Start with low-impact activities like walking or swimming</li><br><li>Slowly build up intensity and frequency</li><br><li>Focus on consistency and set achievable goal, and then you can progress</li></ul>";
   }
   //meal plan

   if(BMI<18.5){
    mealplanJs.innerHTML="<tr><th>Breakfast</th><td> Peanut butter toast, whole milk, banana</td></tr><tr><th>Snack</th><td>Greek yogurt with granola</td></tr><tr><th>Lunch</th><td>Chicken and rice bowl with avocado and veggies</td></tr> <tr><th>Snack</th><td>Mixed nuts and a protein smoothie</td></tr><tr><th>Dinner</th><td>Salmon, roasted potatoes, sautéed spinach</td></tr>";
   }
   
   else if(BMI>=24.5 && BMI<40){
    mealplanJs.innerHTML="<tr><th>Breakfast</th><td> Scrambled eggs with spinach, whole grain toast</td></tr><tr><th>Snack</th><td>Handful of almonds</td></tr><tr><th>Lunch</th><td>Grilled chicken salad with olive oil & lemon dressing</td></tr> <tr><th>Snack</th><td>Greek yogurt with chia seeds</td></tr><tr><th>Dinner</th><td>Baked fish, quinoa, and mixed vegetables</td></tr>";
   }
   else if(BMI>=40){
    mealplanJs.innerHTML="<tr><th>Breakfast</th><td> Oatmeal with cinnamon and blueberries</td></tr><tr><th>Snack</th><td>Boiled eggs or a piece of fruit</td></tr><tr><th>Lunch</th><td>Grilled turkey breast with mixed salad (no dressing)</td></tr> <tr><th>Snack</th><td>Celery sticks with hummus</td></tr><tr><th>Dinner</th><td>Steamed vegetables with grilled tofu or chicken</td></tr>";
   }

   //dashboard image
   if(BMI<18.5){
   dashimageJs.innerHTML=`<img src="dashboard/${'underweight'}.png" class="dashboard">`;
   }
   else if(BMI>=24.5 && BMI<40){
    dashimageJs.innerHTML=`<img src="dashboard/${'overweight'}.png" class="dashboard">`;
   }
   else if(BMI>=40){
    dashimageJs.innerHTML=`<img src="dashboard/${'obese'}.png" class="dashboard">`;
   }

