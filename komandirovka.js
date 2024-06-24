// Создадим, функцию, которая будет осуществлять ввод данных пользователем
function getUserInput(promptMessage) {
    const input = prompt(promptMessage);
    return input ? input.trim() : '';//trim для удаления пробелов в начала и конца строки
    //если input = 1 то метод trim, если ложно то пустую строку
}

// Функция для сбора данных в требуемом формате
function collectTripData() {
    const tripData = {
        user: {
            name: '',
            institute: ''
        },
        trip: {
            startDate: '',
            name: '',
            endDate: ''
        },
        isActive: false
    };

    tripData.user.name = getUserInput('Введите ваше имя:');
    tripData.user.institute = getUserInput('Введите название вашего института:');

    tripData.trip.startDate = getUserInput('Введите дату начала командировки (в формате ГГГГ-ММ-ДД):');
    tripData.trip.name = getUserInput('Введите название командировки:');
    tripData.trip.endDate = getUserInput('Введите дату окончания командировки (в формате ГГГГ-ММ-ДД):');

    const isActiveInput = getUserInput('Командировка активна? (да/нет):');
    tripData.isActive = isActiveInput.toLowerCase() === 'да';

    return tripData;
}

// Функция для запуска функции, отвечающей за ввод данных
function main() {
    const tripData = collectTripData();
    console.log('Данные о командировке:', tripData);
}

// Запуск программы
main();