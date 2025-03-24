// 1 задание

let password = '0unberunity';

let enteredPas = prompt(`1 задание
    Введите пароль`);

alert(`1 задание
    ${password === enteredPas ? 'Пароль введен верно' : 'Пароль введен неправильно'}`);


// 2 задание

let num = 0;

alert (`2 задание
    ${ num > 0 && num < 10 ? 'Верно' : 'Неверно'}`);     

// если num = 0 то неверно
// если num = 10 то неверно
// если num = −3 то неверно
// если num = 2 то верно


// 3 задание

let num1 = 44;
let num2 = 100;

alert (`3 задание
    ${ num1 > 100 || num2 > 100 ? 'Верно' : 'Неверно'}`); 


// 4 задание

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(`4 задание 
    ${(+a) + (+b)}`);


// 5 задание

const monthNumber = Number(prompt(`5 задание
    Введите номер месяца`));
const season1 = 'Зима ❄☃🥶🛷⛸';
const season2 = 'Весна 🌸🐈🐱🌈🌱';
const season3 = 'Лето 🌞👙🍹🌻😎';
const season4 = 'Осень 🍁🍂🌧️☔☁️';

const month_1 = '📅0️⃣1️⃣ - Январь';
const month_2 = '📅0️⃣2️⃣ - Февраль';
const month_3 = '📅0️⃣3️⃣ - Март';
const month_4 = '📅0️⃣4️⃣ - Апрель';
const month_5 = '📅0️⃣5️⃣ - Май';
const month_6 = '📅0️⃣6️⃣ - Июнь';
const month_7 = '📅0️⃣7️⃣ - Июль';
const month_8 = '📅0️⃣8️⃣ - Август';
const month_9 = '📅0️⃣9️⃣ - Сентябрь';
const month_10 = '📅1️⃣0️⃣ - Октябрь';
const month_11 = '📅1️⃣1️⃣ - Ноябрь';
const month_12 = '📅1️⃣2️⃣ - Декабрь';

console.log(monthNumber);

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        switch (monthNumber) {
            case 12:
                alert(`Номер соответствует месяцу ${month_12}, относится к сезону ${season1}`);
                break;
            case 1:
                alert(`Номер соответствует месяцу ${month_1}, относится к сезону ${season1}`);
                break;
            case 2:
                alert(`Номер соответствует месяцу ${month_2}, относится к сезону ${season1}`);
                break;
        }
        break;

    case 3:
    case 4:
    case 5:
        switch (monthNumber) {
            case 3:
                alert(`Номер соответствует месяцу ${month_3}, относится к сезону ${season2}`);
                break;
            case 4:
                alert(`Номер соответствует месяцу ${month_4}, относится к сезону ${season2}`);
                break;
            case 5:
                alert(`Номер соответствует месяцу ${month_5}, относится к сезону ${season2}`);
                break;
        }
        break;

    case 6:
    case 7:
    case 8:
        switch (monthNumber) {
            case 6:
                alert(`Номер соответствует месяцу ${month_6}, относится к сезону ${season3}`);
                break;
            case 7:
                alert(`Номер соответствует месяцу ${month_7}, относится к сезону ${season3}`);
                break;
            case 8:
                alert(`Номер соответствует месяцу ${month_8}, относится к сезону ${season3}`);
                break;
        }
        break;
    case 9:
    case 10:
    case 11:
        switch (monthNumber) {
            case 9:
                alert(`Номер соответствует месяцу ${month_9}, относится к сезону ${season4}`);
                break;
            case 10:
                alert(`Номер соответствует месяцу ${month_10}, относится к сезону ${season4}`);
                break;
            case 11:
                alert(`Номер соответствует месяцу ${month_11}, относится к сезону ${season4}`);
                break;
        }
        break;
    default:
        alert('Такого месяца не существует');
        break;
}


// *** 1 доп. задание ***

const userNumber = +prompt('Пожалуйста, введите любое число');

if ( userNumber !== NaN ) {
    if ( (userNumber % 2) === 0) {
        alert('Ваше число четное');
    } else {
        alert('Ваше число нечетное');
    }
} else {
    alert('Вы ввели не число');
}


// *** 2 доп. задание ***

const clientOS = 0;

switch (clientOS) {
    case 0:
        alert('Установите версию приложения для Android по ссылке https://play.google.com/store/apps/details?id=org.telegram.messenger');
        break;
    case 1:
        alert('Установите версию приложения для iOS по ссылке https://apps.apple.com/ru/app/telegram-messenger/id686449807');
        break;
    default:
        alert('Ваша операционная система не поддерживается');
        break;
}


// *** 3 доп. задание ***

const clientOS3 = 0;
const clientDeviceYear = 2020;


switch (clientOS) {
    case 0:
        if (clientDeviceYear < 2015) {
            alert('Установите облегченную версию приложения для Android по ссылке https://play.google.com/store/apps/details?id=org.telegram.messenger-lite');
        } else {
            alert('Установите версию приложения для Android по ссылке https://play.google.com/store/apps/details?id=org.telegram.messenger');
        }
        break;
    case 1:
        if (clientDeviceYear < 2015) {
            alert('Установите облегченную версию приложения для iOS по ссылке https://apps.apple.com/ru/app/telegram-messenger-lite/id686449807');
        } else {
            alert('Установите версию приложения для iOS по ссылке https://apps.apple.com/ru/app/telegram-messenger/id686449807');
        }
        break;
    default:
        alert('Ваша операционная система не поддерживается');
        break;
}