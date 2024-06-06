/*
Вам дам объект

const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location
        : 'Caribbean sea',
}
1) Необходимо вывести в консоль браузера все свойства и значения объекта person в следующем виде:

    <property>: <value>
        2) Необходимо вывести в консоль браузера все свойства и значения объекта person таким образом, чтобы вывод выглядел следующим образом:

        First name: Jack
        Last name: Sparrow
        Age: 25 ages
        Where to find: Caribbean sea
        Задание необходимо сделать без создания нового объекта.
        ПОДСКАЗКА: используйте условный оператор
*/
//Для выполнения задания буду использовать метод Object.entries(),
// который нужен для получения массива параметров значений объекта person,
// а затем использовать цикл for для вывода каждого свойства и значения в консоль браузера
const person = {
    firstName: "Jack",
    lastName: "Sparrow",
    age: 25,
    location: "Caribean sea",
}

for (const [proerty, value] of Object.entries(person)){
    console.log(`${proerty}: ${value}`);
}
// так же можно использовать условный оператор для вывода свойств объекта и его значений
console.log(`First name: ${person.firstName}`);
console.log(`Last name: ${person.lastName}`);
console.log(`Age: ${person.age} ages`);
console.log(`Where to find: ${person.location}`);
//В этом коде используем условный оператор для вывода свойств и значений объекта person в консоль браузера.