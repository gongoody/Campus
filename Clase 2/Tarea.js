//opcion ejecutando funcion
function ages1(age1,age2,age3){
    function average(defaultAge = 7){
         return (age1 + age2 + age3 + defaultAge)/4
     }
     console.log(average() , "Hola")
 }
 
 //opcion clousure
 function ages2(age1,age2,age3){
    return function(defaultAge = 7){
     console.log((age1 + age2 + age3 + defaultAge)/4)
     }
 }
 
 ages1(1,2,3)
 ages2(3,2,9)(10)