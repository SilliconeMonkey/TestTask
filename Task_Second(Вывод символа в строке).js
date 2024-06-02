//Дана строка:
//    Я изучаю JavaScript
//Как вывести 3-й символ? 1-й? Последний?

//Первое решение
//Использую метод substring, для извлечения подстроки, начиная с определенного и до конца строки.
//В данном случае чтобы получить 3-й элемент:

let stroka = "Я изучаю JS";
let therdsymbol = stroka.substring(2,3)
console.log('Третий символ')
console.log(therdsymbol);

//Таким образом допишу код для 1-го символа и для полседнего
let lastsymbol = stroka.substring(stroka.length - 1,stroka.length);
console.log('Последний символ')
console.log(lastsymbol);

let firstsymbol = stroka.substring(0, 1);
console.log('Первый символ')
console.log(firstsymbol);

// Еще один способ решения задачи осуществляется через преобразования
// строки в массив и обращение в этом массиве к различным элементам.
// Используем метод split, который позволит разделить строку на подстроки, используя заданый разделитель

// код для получения 3-го символа
let array = stroka.split("");
let tretiysymbol = array[2];
console.log('Третий символ')
console.log(tretiysymbol);

let posledniysymbol = array[array.length - 1];
console.log('Последний символ');
console.log(posledniysymbol);

let perviysymbol = array[0];
console.log('Первый символ')
console.log(perviysymbol);

// и еще один способ это использование метода charAt(), который возвращает символ по указанному индексу.
console.log('Третий символ')
console.log(stroka.charAt(2));

console.log('Первый символ')
console.log(stroka.charAt(0));

console.log('Последний символ');
console.log(stroka.charAt(stroka.length - 1));


