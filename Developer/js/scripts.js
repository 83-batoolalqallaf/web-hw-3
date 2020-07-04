// السؤال الاول 
console.log("مرحبا بك  في برنامج توظيف المبرمجين ، يرجى الاجابه عن الأسئله التالية")

let name = prompt("ما هو اسمك  ؟ ");

let age = prompt(" كم عمرك  ؟");

 let experiance = prompt("كم عدد سنوات الخبره لديك ؟");

 console.log("لغات البرمجة : ");

 const languages = ["HTML","CSS","Javascript","PHP","swift","Java"];
 const needed_languages = languages[2];
 
 console.log(languages[0])
 console.log(languages[1])
 console.log(languages[2])
 console.log(languages[3])
  console.log(languages[4])
  console.log(languages[5])
 
for (let i = 1 ; i <= languages.length; i++){
    console.log(i +" ." +languages[i-1 ]);
}
let skills1 = prompt("اختر اللغه ");

let skills2 = prompt("اختر اللغه ");

if(age > 25 && age < 40  && experiance > 3 
     && skills1 == needed_languages || skills2 == needed_languages ){
         console.log("مقبول ");
        }else { console.log("مرفوض ");
        }

// السؤال الثاني 

const logger = function (array) {
 array.forEach((temp) => console.log (temp)) ;
          

  const logger = function (array ) {
     for (let i = 0 ; i < array.length ; i++){
         console.log(array[i]); }
   };
};
 const toCel =  function (temp) {
     return temp.map ((t) => parseInt((t - 32) * (5 / 9)));
 

 const toCel = function(temp){
     for (let i = 0 ; i < temp.length ; i++){
         cel_temp_array.push(temp[i] = parseInt((temp[i]- 32 ) * (5 / 9)));
     }
     return cel_temp_array;
 };
};


 const hottestDays = function (temp , threshold) {
     return temp.filter((t) => t > threshold);  


 const hottestDays = function (temp , threshold) {
     for (let i = 0 ; i > temp.length ; i++){
         if (temp[i] > threshold){
             temp_gt_th.push(temp[i])
         }
     }
     return temp_gt_th
 };
};

 const logHottestDays =  function (temp, threshold) {
     logger (toCel(hottestDays(temp,threshold)));



 const logHottestDays =  function (temp, threshold) {
    logger (toCel(hottestDays(temp,threshold), cel_temp_array));
};
};

let fehrenheit_temp_array = [31, 80, 90 ,100,];
let threshold = 80 ;
let cel_temp_array = [];
let temp_gt_th = [];

console.log ("درجه الحراره بالفهرنهايت ", fehrenheit_temp_array);
console.log ("القيمه الاوليه بالفهرنهايت", threshold);
  


