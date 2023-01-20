//Escribe un algoritmo que determine si un nº es par o no. Si es par, que escriba todos los nº pares de manera descendiente desde sí mismo y hasta el cero. Si es impar, lo mismo. 

let number = 4; 

let isPairOrNot = (number) => {

    if(number%2===0){
        while(number>=0){
            console.log("Pair number", number);
            number = number - 2;
        }
    }else{
        while(number>=1){
            console.log("Odd number", number);
            number = number -2;
        }
    }

}

isPairOrNot(4);
isPairOrNot(3);


//Clasificación de 50 personas según edad y sexo (creo 10 para no tener que crear tantos objetos). Debe mostrar la cantidad de personas mayor o igual a 18 años, la cantidad de personas menores de edad, cantidad de personas masculinas mayores de edad, cantidad de personas femeninas menores de edad, % de personas que representan las mayores de edad respecto al conjunto de personas y porcentaje que representan las mujeres respecto al total de personas.


let people = [{sex: "F", age: 10}, {sex: "F", age: 21}, {sex: "F", age: 5}, {sex: "F", age: 40}, {sex: "F", age: 30}, {sex: "M", age: 20}, {sex: "M", age: 2},{sex: "M", age: 50},{sex: "M", age: 30}, {sex: "M", age: 23}]

//To calculate if it's older than 18 or not
let isOlderThan18 = (people) => {
    const result = people.filter(person => person.age >= 18 );
    console.log("result", result);
}

let isYoungestThan18 = (people) => {
    const result = people.filter(person => person.age < 18 );
    console.log("result", result);
}

let isAMaleOlderThan18 = (people) => {
    const result = people.filter(person => person.sex === "M" && person.age>=18 );
    console.log("result", result);
}

let isAFemaleYoungerThan18 = (people) => {
    const result = people.filter(person => person.sex === "F" && person.age<18 );
    console.log("result", result);
}

let calculatePercentageOlderThan18 = (people) => {
    const olderThan18People = people.filter(person => person.age >= 18 ).length;
    const totalPeople = people.length;
    const result = (olderThan18People/totalPeople)*100;
    console.log("result", result + "%");
}

let calculatePercentageOfWomen = (people) => {
    const women = people.filter(person => person.sex === "F").length;
    const totalPeople = people.length;
    const result = (women/totalPeople)*100;
    console.log("result", result + "%");
}

isOlderThan18(people);
isYoungestThan18(people);
isAMaleOlderThan18(people);
isAFemaleYoungerThan18(people);
calculatePercentageOlderThan18(people);
calculatePercentageOfWomen(people);

//Desarrolle un algoritmo para el calculo del salario de un trabajador. El sueldo depende de una tarifa o precio hora establecida y de las horas trabajadas, si la cantidad de horas trabajadas es mayor a 40, la tarifa se incrementa un 50% para las horas extras. Calcular el sueldo recibido por el trabajador en base a las horas trabajadas y la tarifa. 


let hoursOfWork = 40;
let ratePerHour = 10;


let calculateSalary = (hoursOfWork, ratePerHour) => {

    let salary = hoursOfWork > 40 ? (hoursOfWork - 40)*(1.5*ratePerHour) + 40 * ratePerHour : hoursOfWork * ratePerHour;
    console.log("salary", salary);
    return salary;
}

calculateSalary(40, 1); // expectedResult: 40
calculateSalary(45, 1); // expectedResult: 47.5