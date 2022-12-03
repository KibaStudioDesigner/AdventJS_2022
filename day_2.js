//Por cada dia festivo se tienen que pagar 2 horas extra ese mismo año
//calcular el numero total de horas extras en el año
//Tiene que ser solo los dias festivos entre semana L-V
//Retornar el numero total de horas extra que se tienen que pagar ese año

/* Cosas a tener en cuenta y consejos:

El año puede ser bisiesto. Haz las comprobaciones que necesitas para ello, 
si fuese necesario.
Aunque el 31 de diciembre sea festivo, las horas extra se harán el mismo año
 y no el siguiente.
El método Date.getDay() te devuelve el día de la semana de una fecha. 
El 0 es domingo, el 1 es lunes, etc.
 */

//Referencias
/* 
let day = holidays[2] 
let fecha =`${dia}/${year}`
console.log(fecha);
let day  =  new Date("12/25/2022")
console.log(day.getDay()); */

const year = 2022
const holidays = ['01/06', '04/01', '12/25']



function countHours(year, holidays){
    let counter = 0;
    holidays.forEach((holiday) => {
        
        let date = new Date(holiday +'/'+year)
        if (date.getDay() !=0 && date.getDay() !=6 ){
        
            counter = counter + 2

        }
        
});
return counter
}
console.log(countHours(year,holidays))
