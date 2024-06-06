//Дан массив:

//[31, 10, 'chicken', 9, 'fish', 10]
//Как отфильтровать исходный массив так, чтобы получить массив, где будут только строки?

//Как отфильтровать исходный массив так, чтобы получить массив, где будут только элементы со значением 10?
//Для решения задачи воспользуюсь методом filter() и проверю тип каждого элемента с помощью оператора typeof. Пример:
/*array = [31, 10, 'chicken', 9, 'fish', 10];
const stringarray = array.filter(element >= typeof element === "string");
console.log(stringarray)

//для того, чтобы вывести только значения "10" также используем метод filter()
const chislaarray = array.filter(element => element === 10);
console.log(chislaarray);
stringarray = array.filter(element >= typeof element === "string");


 */
/*
const stringarray = array.filter(element >= typeof element === "string");
^

ReferenceError: element is not defined
*/

/*
let array = [31, 10, 'chicken', 9, 'fish', 10];
let stringarray = array.filter(element >= typeof element === "string");
console.log(stringarray);

let chislaarray = array.filter(element => element === 10);
console.log(chislaarray); объявление let не решило проблему
*/

let arr = [31, 10, 'chicken', 9, 'fish', 10];
let result = arr.filter(function(element){
    return typeof element === 'string';
});
console.log(result); //[ 'chicken', 'fish' ]


//используем анонимную функцию, которая будет принимать один аргумент: element.
//Внутри функции мы проверяем тип каждого элемента в массиве при помощи оператора typeof()
//аналогично решу задачу для получения массива со значением 10:
let result1 = arr.filter(function(element){
    return element === 10;
});
console.log(result1); //[ 10, 10 ]

