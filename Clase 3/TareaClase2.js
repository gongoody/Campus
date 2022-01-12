//Solucion del profe ejercicio dia 2
const mainFunction = () =>{
    const age1 = 30;
    const age2 = 25;
    const age3 = 30;
    console.log(getAgeAverage(age1,age2,age3,10))
}

const getAgeAverage = (age1, age2, age3, num = 25) => {
    return (age1 + age2 + age3 + num)/4
}

mainFunction()