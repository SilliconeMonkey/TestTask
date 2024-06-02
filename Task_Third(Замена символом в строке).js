//Можем ли мы заменить в строке:
//    Я изучаю JavaScript
//символ ю на другой? Если да, то как?
//    Можем ли заменить слово JavaScript на 'Frontend`?

//для замены символа 'ю' на другой символ, мы можем использовать метод replace() в JS:

let stroka = "Я изучаю JavaScript"
stroka = stroka.replace(/ю/,"о");//Заменяем символ ю на о
console.log(stroka);

// таким же образом мы можем заменить и слово:
stroka = stroka.replace(/JavaScript/,"Frontend");//Замена JS на FE
console.log(stroka);

//еще один способ решения задчи - это использование методов строк в JS, такие как indexOf() и substring():
let index = stroka.indexOf("JavaScript");
if (index !== -1) {
    stroka = stroka(0, index) + "FrontEnd" + stroka.substring(index + 9);
}
console.log(stroka);
//мы сначала ищем индекс слова JS в строке с помощью метода indexOf() если индекс не равен - 1,
// мы исползуем метод substring( ) для замены слова "JS" на "FE".
//Мы берем часть строки до индекса слова JS добавляем слово "FE" и
// добавляем оставшуюся часть строки после индекса слова "JS"

//таким же образом заменим ю на о
let index1 = stroka.indexOf("ю");
if (index1 !== -1){
    stroka = stroka.substring(0, index) + "о" + str.substring(index + 1);
}
console.log(stroka);