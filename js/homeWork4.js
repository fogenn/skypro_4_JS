// 1-ое задание

for (let i = 0; i < 2; i++) {
    console.log(`Привет`);
}

// 2-ое задание

for (let i = 0; i < 5; i++) {
    console.log(i+1);
}

// 3-ие задание

for (let i = 0; i < 16; i++) {
    console.log(i+7);
}

// 4-ое задание

const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
};

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// 5-ое задание

let num = 0;
let n = 1000;

while ( n >= 50 ) {
    n /=  2;
    num++;
}

console.log(`Количетсво итераций: ${num}
Значение n: ${n}`);

// 6-ое задание
// Случайно наткнулся на объект Date, поэтому неудержался им не воспользоваться х) он очень удобно самостоятельно непозволяет перевалить на пределы месяца и удобно может определить день недели

const friday = new Date(2022, 0, 1);

const month = friday.getMonth();

for (let day = new Date(friday); day.getMonth() === month; day.setDate(day.getDate() + 1)) {

    if (day.getDay() === 5) {
        console.log(`Сегодня пятница, ${day.getDate()}-е число. Необходимо подготовить отчет.`);
    }
}


// *** 1-ое доп. задание ***

let iterations = 0;
let k = 100;

while ( k >= 0 ) {
    k -=  7;
    iterations++;
    
    console.log(`${iterations} = ${k}`);
}

console.log(`Количетсво итераций: ${iterations}
    Значение k: ${k}`);

// *** 2-ое доп. задание ***

const months = [
    'Январь', 
    'Февраль', 
    'Март', 
    'Апрель', 
    'Май', 
    'Июнь', 
    'Июль', 
    'Август', 
    'Сентябрь', 
    'Октябрь', 
    'Ноябрь', 
    'Декабрь'
];

for (const key in months) {
    console.log(`${+key + 1} - ${months[key]}`);
}

// *** 3-ие доп. задание ***

const book = {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    genre: "Антиутопия",
  };
  
console.log(book); 
console.table(book);
JSON.stringify(book); 
//По заданию вроде бы этого достаточно. Не смог определиться какой вариант будет приемлемие, по этому указал все три

// *** 4-ое доп. задание ***

const arr = [42, 17, 88, 3, 71, 29, 55, 93, 12, 64];
let min = arr[0];


for (const key in arr) {
    arr[key] < min ? min = arr[key] : min = min;
}