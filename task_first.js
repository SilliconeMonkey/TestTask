//1. slice: Этот метод используется для создания нового массива, содержащего часть или все элементы из исходного массива.
//Он принимает два аргумента: начальный индекс и конечный индекс (оба включены).
//Если конечный индекс не указан, то метод вернет все элементы после начального индекса до конца массива.

//    Пример:
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 3); // [2, 3]

//2. splice: Этот метод используется для добавления, удаления или замены элементов в исходном массиве.
//Он принимает два аргумента: индекс, на котором нужно вставить или удалить элементы,
//и количество элементов, которые нужно добавить или удалить. Он возвращает новый массив, содержащий удаленные элементы.

//    Пример:
let arr = [1, 2, 3, 4, 5];
let newArr = arr.splice(1, 2, 6, 7); // [2, 3, 6, 7]
//3. map: Этот метод используется для создания нового массива, содержащего результаты применения указанной функции к каждому элементу исходного массива.

//    Пример:
let arr = [1, 2, 3, 4, 5];
let newArr = arr.map(x => x * 2); // [2, 4, 6, 8, 10]

//4. for: Этот метод используется для итерации по элементам массива с помощью цикла for.

//    Пример:
    let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 1, 2, 3, 4, 5
}

//5. forEach: Этот метод используется для итерации по элементам массива и выполнения указанной функции для каждого элемента.

//    Пример:
let arr = [1, 2, 3, 4, 5];
arr.forEach(x => console.log(x)); // 1, 2, 3, 4, 5
//6. filter: Этот метод используется для создания нового массива, содержащего только те элементы,
//которые удовлетворяют условию, указанному в переданной функции.

//    Пример:
let arr = [1, 2, 3, 4, 5];
let newArr = arr.filter(x => x > 3); // [4, 5]

//7. reduce: Этот метод используется для создания одного значения,
//путем применения указанной функции к каждой паре элементов массива, начиная с последнего элемента.

//    Пример:
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((acc, curr) => acc + curr, 0); // 15
//8. sort: Этот метод используется для сортировки элементов массива в порядке возрастания или убывания.

//    Пример:
let arr = [3, 1, 4, 2, 5];
arr.sort(); // [1, 2, 3, 4, 5]
//9. some: Этот метод используется для проверки, есть ли хотя бы один элемент в массиве, который удовлетворяет условию, указанному в переданной функции.

//    Пример:
let arr = [1, 2, 3, 4, 5];
let hasEven = arr.some(x => x % 2 === 0); // true

//10. every: Этот метод используется для проверки, удовлетворяет ли каждый элемент в массиве условию, указанному в переданной функции.

//    Пример:
let arr = [1, 2, 3, 4, 5];
let allEven = arr.every(x => x % 2 === 0); // false