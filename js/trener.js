//'use strict';
/*let i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);

const str = "test";
const arr = [1, 2, 4];
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase())

const fruit = "Some fruit"; 
console.log(fruit.indexOf("ome"));
  'use strict';
const logg = "Hello world";
console.log(logg.slice(-7, -5));

const logg = "Hello world";
console.log(logg.substring(5, 10));
const logg = "Hello world";
console.log(logg.substr(4, 6));

const num = 12.3;
console.log(Math.round(num));

/* let str = 'abcde';
 console.log(str[0]);//выводим букву 'a'
 console.log(str[1]); //выводими букву 'b'
 console.log(str[4]); // выводим пятую букву 'e'

 let nim = 1;
 nim += 12;
 nim -= 14;
 nim *= 5;
 nim /= 7;
 nim++;
 nim--;
 console.log(nim);
let a = 10,
    b = 2;
console.log((a+b),(a-b),(a*b),(a/b));
let c = 15,
    d = 2;
let result = c + d;
console.log(result);
let a = 10,
    b = 2,
    c = 5;
    console.log(a + b + c);
let a = 17,
    b = 10;
let c = (a - b);
let d = 7;
let result = (c + d);
console.log(result);
let str = 'Привет Мир!';
console.log(str);
let str1 = 'Привет,',
    str2 = 'Мир!';
console.log(str1 + str2);
let nam = 'Вадим';
console.log(`Привет, ${nam}!`);
let are = 51;
console.log(`Мне ${are} год!`);
const a = prompt('Ваше имя' , '');
alert(a);
'use strict';
let nam = 'Вадим';
alert(`Привет, ${nam}!`);
let a = prompt('Ваше имя', '');
alert(a);
console.log(a);
let b = prompt('Задайте число, мы вернём его "квадрат"');
let c = alert(b*b);
console.log(c);
//let str = 'abcde';
//alert(str[0]);
//alert(str[2]);
//alert(str[4]);

//const num = '12345';
//let a = console.log(num.length);
//console.log(num[0]*num[1]*num[2]*num[3]*num[4]);
//console.log(60*60*24*30);
let a = 1,
    b = a * 60,
    c = b * 60;
    console.log(a ,b ,c);
let f = 10;
console.log(f*f);
let arr = ['a','b','c'];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
let arr = ['a','b','c','d','+',','];
let str = arr[0] + arr[4] + arr[1];
let str1 = arr[2] + arr[4] + arr[3];
console.log(str + arr[5] + str1);

const arr1 = ['2','5','3','9'];
let result = (arr1[0]*arr1[1]+arr1[2]*arr1[3]);
console.log(result);

let obj = {a: 1, b: 2, c: 3};
console.log(obj ['c']);
let obj1 = {a: 1, b: 2, c: 3};
console.log(obj1.b);

let obj2 = {Коля:'1000',Вася: '500', Петя: '200'};
console.log(obj2.Коля,obj2.Петя);

 let obj3 = {
    1: 'понедельник',
    2: 'вторник',
    3: 'среда',
    4: 'четверг',
    5: 'пятница',
    6: 'суббота',
    7: 'воскресение'
};
console.log(obj3[4]);

let day = obj3[3];
console.log(day);
let arr2 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr2[1][0]);

let arr3 = {js:['jQuery','Angular'], php:'hello', css:'world'};
console.log(arr3.js[0]);*/

//let arr4 = {
//    'ru' :['понедельник','вт.','срд.','четверг.','пятница.','суббота','воскресение.'],
//    'engl':['mon','tud','wek','thrid','p','subb','voskres'],
//};
//console.log(arr4.ru[0], arr4.engl[2]);
//console.log(arr4['ru'][0], arr4['engl'][2]);
//let lang = arr4.engl && arr.ru;
//let dayy = arr4[7];
//console.log(arr4.lang[1]);//Строчки 140 - 143 (нерешённая задача)
/*'use strict';
let num = 10;
if (num == 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
let min = +prompt('Введите число от 0 до 60', '');
if (min >=0 && min <=15) {
    alert('Первая четверть');
}
if (min >= 16 && min <= 30) {
    alert('Вторая четверть');
}
if (min > 30 && min <= 45) {
    alert('Третья четверть');
}
if (min >= 46 && min <= 60) {
    alert('Четвёртая четверть');
}

let lang = prompt('Введите символ "ру",если выбираете русский язык,если английский, то наберите "en"','');
let i = prompt('Введите число от 1 до7, чтобы выбрать соответствующий день недели','');
if (lang == 'ру') {
alert(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
}
if (lang == 'en') {
alert(['mh','ts', 'wd','th', 'fr', 'st', 'sn']);
}
 alert(lang);//задача не доделана
 'use strict';

 let lang = prompt('Введите символ "ru",если выбираете русский язык,если английский, то наберите "en"','');
switch (lang) {
    case 'ru':
        let arr = ['пн','вт','ср','чт','пт','сб','вс'];
    break;
    case 'en':
         arr = ['mn','ts','wd','th','fr','st','sn'];
         break;    
}
alert(lang.arr);//списал из решебника - не работает, надо переделовать
let lang = prompt('Введите символ "ru",если выбираете русский язык,если английский, то наберите "en"','');
const arr = {
    'ru':['пн','вт','ср','чт','пт','сб','вс'],
    'en':['mn','ts','wd','th','fr','st','sn'];
};
console.log(arr.lang);//тоже не работает
//возможно решение задачи не в том , чтобы работало.ХАХААХА

let a = prompt('Задайте число от-5 до 5','');
if (a == 0) {
    alert('Верно');
} else {
    alert('Не верно, попробуй ещё!');
}
'use strict';
let a1 = prompt('Задайте число от-5 до 5','');
if (a1 > 0) {
    alert('Верно');
}else {
    alert('Не верно');
}
let a = prompt('Угадай числа от-5 до 5','');
if (a < 0) {
    alert('Верно');
}else {
    alert('Не верно');
}
let a = prompt('Угадай числа от-5 до 5','');
if (a >= 0) {
    alert('Верно');
}else {
    alert('Не верно');
}
let a = prompt('Угадай числа от -5 до 5','');
if (a != 0) {
    alert('Верно');
}else {
    alert('Не верно');
}
let a = prompt('Введите тест или test, чтобы узнать верный ответ','');
if (a == 'test') {
    alert('Верно');
}else {
    alert('Не верно');
}
'use strict';
let a = prompt('Напишите цифру,как строку 1 до 5,узнайте какое число загадано!','');
if (a === '1') {
    alert('Верно');
}else {
    alert('Не верно');
}  //Меняю строгое равенство на простое - результата один(верно только при 1,без ковычек). Странно?!
'use strict';
let test = true;
if (test != true) {
    console.log('Верно');
}else  {
    console.log('Не верно');
}
'use strict';
let a = -3;
if (a > 0 && a < 5) {
    console.log('Верно');
}else {
    console.log('Не верно');
}
'use strict';
let a = 2;
if (a == 0 || a == 2) {
    console.log(a + 7);
}else {
    console.log(a / 10);
}
'use strict';
let a,
    b;
    if (a == b) {
        return true;     
    }// else  {
      //  return false;
   // }//
    if (a != b) {
        return false;
    }
    'use strict';
    let a,
        b;
    if ((a + b) > 10) {
        return true;
    }else {
        return false;
    }    
'use strict';
let a;
    if (a < 0) {
        return true;
    }else {
        return false;
    }
    'use strict';
    for (let i = 1; i <= 9; i++) {
         for (let j = 1; j <= 3; j++) {
            document.write(i);
        }
    }
    let str = '';
    for (let i = 0; i < 10; i ++) {
        str = str + 'x';
        document.write(str + '<br>');
    
    }
    let str = '';
    for (let i = 1; i <= 9; i++) {
        str = str + i;
    }
    alert(str);
    
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 3; j++) {
            document.write(i);
        }
        document.write('<br>');
    }*//*
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(i);
        }
        document.write('<br>');
    }*/
    /*for (let i = 1; i <= 9; i++) {
        let str = ''; //каждый раз зачищаем строку

    for (let j = 1; j <= i; j++) {
        str = str + i;
    }
    document.write(str + '<br>');
    }
    
    for (let i = 1; i <= 9; i++) {
        document.write(i);
    }
    let str = '';
    for (let i = 9; i >= 1; i--) {
        str = str + i;
    }
    document.write(str);

    let str = '';
    for (let i = -1; i >= -9; i--) {
        str = str + i;
    }
    document.write(str);
    let str = '';
    for (let i = 1; i <= 20; i ++) {
         str = str + 'x';
         document.write(str + '<br>');
    }
    
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(i);
        }
    document.write('<br>');
    }
    let str = '';
    for (let i = 1; i <= 5; i++ ) {
        
            str = str + 'xx';
            document.write(str + '<br>');
        }//выведутся строчки x :5строк , в столбец , прибавляя в каждой по хх;
        
                 // Массивы.
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push('x');
    }
    console.log(arr);
    
   let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(i);
    }
    console.log(arr);
    let arr = [];
    for (let i = 0; i< 10; i++) {
        arr[i] = 'x';
    }
    console.log(arr);
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = i+ 1;
    }
    console.log(arr);
    let arr = ['a','b','c','d','e'];
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    console.log(result);
    //способ переборки объекта ключ - значение с помощью цикла for in//
    for (let key in options) {
        console.log(`Свойство ${key} имеет значение ${optionsx[key]}`);
    }
    // того, чтобы перебрать объект color , в нутри объекта ,надо дописать код.
    for (let key in options) {
        if (typeof(options[key]) === 'object') {
            for (let i in options[key]) {
                console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            }
        }else {
            console.log(`Свойство ${key} имеет значение ${options[key]}`);
        }
    }
    //чтобы упростить перебор массива на предмет ключей и колличества ключей "key" , смотри код ниже
    console.log(Object.keys('название объекта').length);//эта конструкция выведет число ключей,  пар значение ключ
    console.log(Object.keys('название объекта'));//эта кончтрукцпия выведет массив с названиями ключей
    let arr1 = [];
    for (let i = 0; i <= 7; i++) {
        arr1.push('x');
    }
    console.log(arr1);//выведет['x',7раз]
    let arr2 = [];
    for (let i = 1; i <= 12; i++) {
        arr2.push(i);
    }
    console.log(arr2);
    let arr3 = [];
    for (let i = 0; i <= 8; i++) {
        arr3[i] = 'x';
    }
    console.log(arr3);
    let arr4 = [];
    for (let i = 0; i < 10; i++) {
        arr4[i] = i + 1 ;  
    }
    console.log(arr4);
    let arr = ['a','b','c','d','e','f'];
    let result = [];

    for (let i = arr.length - 1 ; i >= 0; i--) {
        result.push(arr[i]);
    }
    console.log(result);
    let obj = {a:1,b:2,c:3,d:4,e:5};
    let result = {};
    for (let key in obj) {
        result[obj[key]]= key;
    }
    console.log(result);
    let arr = ['a','b','c','d','a','a','b'];
    let count = {a : 0, b : 0, c: 0, d: 0};
    for (let i = 0; i < arr.length; i++ ) {
        count[arr[i]]++;
    }
    console.log(count);
    let arr1 = ['a','b','c','a','b'];
    let count1 = {};
    for (let i = 0; i < arr1.length; i++) {
        if (count1[arr1[i]] === undefined ) {
            count1[arr1[i]] = 1;
        }
        else {
            count1[arr1[i]]++;
        }
    }
    console.log(count1);
    let arr = [[1,2,3,4,5],[6,7,8],[9,10]];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
    let arr = [];
    let str = '';
    for (let i = 0; i < 5; i++ ) {
           str = str + 'x';
           arr.push(str);
    }
    console.log(arr);
    let arr = [];
    let str = '';
    for (let i = 1; i < 5; i++ ) {
        for (let j = 1; j <= i; j++) {
            str = i ;
            arr.push(str);
        }
 
        }            
    console.log(arr);
    'use strict';
    const num = 'ioioiuoiu';
    if (num == 35) {
        console.log('Верно');
    } else if (num > 35) {
        console.log('Не верно');
    } else if (num < 35) {
        console.log('Не верно');
    } else  {
        console.log('Похоже это не число, попробуйте ещё раз');
    }*
//Тернарный оператор это ('условие'?'если верно ,то выполнить что то':'если не верно, то выполнить , что то другое')
//Тернарный оператор один в JavaScript
//(num === 55) ? console.log('Ok!') : console.log('Error!');
//switch - это конструкция ,кот. заменяет if else, но только на строгое сравнение!
const num = 3;

switch (num) {
    case 33:
        console.log('Не верно');
        break; 
        case 37:
            console.log('Мимо');
            break;
            case 'Юлия.':
                console.log('Не то');
                break;
                case 'Нат.':
                    console.log('То ,что надо!');
                    break;
                    default:
                        console.log('Что-то не так)');
                        break;

}
    //ЦИКЛЫ
    
    let nums = 20;
    while (nums >= 15) {
        console.log(nums);
        nums--;
    }

    let nums = 20;
    do {
        console.log(nums);
        nums++;
    }
    while (nums < 26);

// немного исправил
for (let i = 1; i < 8; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
- 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
let numberOfFilms;

function start1 () {                                                            
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');                                                  
    while  (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
   
}
start1 ();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {                                                             
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?',''),
              b = prompt('На сколько оцените его?','');
            if (a != null &&  a.length < 50 && a != ''&& b != null && b.length < 50 && b != '') {
                personalMovieDB.movies[a] = b; 
            } else {
                i--;
            }
          
    }
}
rememberMyFilms ();
function detectpersonalMovieDB () {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
    
        //personalMovieDB.movies[a] = b;
       
}

detectpersonalMovieDB ();
function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
    

}
showMyDB (personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

function learnJS(lang, callback) {
    console.log(`Я учу : ${lang}`);
    callback();
}

function done() {
    console.log('Я прошёл этот урок!');
}
learnJS('JS', done);// Или вариант ниже , тот же функционал.
learnJS('JS', function() {
    console.log('Я урок этот прошёл!');

});

//const obj = new Object();//устаревший вариант.
/*const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'

    }
};

//console.log(options.name);

//delete options.name;//это для удаления свойства name из объекта options.
//console.log(options);

for (let key in options) {
    if (typeof(options[key])==='object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
         
        } else {
            console.log(`Свойство ${key} имеет значение ${options[key]}`);
        
    }
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}
    

const newObject = {
    cth: 123,
    sll: 654,
    oook: 999,
    vskl: 666, 
    makeTest: function() {
        console.log(Object.keys(newObject).length);
    }
};
newObject.makeTest();

console.log(Object.keys(newObject));//этот вариант возвращат названия ключей.(key)
//console.log(Object.keys(newObject).length); этот вариант возвращает колличество ключей(key) в объекте.


let obj4 = {1:'пн',2:'вт',day:'ср',4:'чт',5:'пт',6:'сб',7:'вс'};
console.log(obj4.day);

let arr5 = ['a','b','c','d','+',','];
console.log(arr5[0]+ arr5[4] + arr5[1] + arr5[5]+ arr5[2] + arr5[4] + arr5[3]);
console.log('a + b, c + d');//результат тот же ,как правильно не знаю

let arr6 = [2, 5, 3, 9];
let result = arr6[0] * arr6[1] + arr6[2] * arr6[3];
console.log(result);

let obj5 = {a: 1, b: 2, c: 3};
console.log(obj5.c);//выводит 3.
//console.log(obj5['c']);//выводит 3.

let obj= {Коля :'1500', Валя: '1000', Сергей: 2500};
console.log( obj['Сергей'],obj['Валя'], obj.Коля);

let arr7 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr7[1][0]);

let obj7 = {js:['jQuery','Angular'], php: 'hello', css: 'world'};
console.log(obj7.js[0]);

let arr8 = {
    ru: ['пн','вт','ср','чт','пт','сб','вс'],
    en: ['mn','td','wd','th','ph','sb','sa']
};
console.log(arr8.ru[0], arr8.en[2]);

let lang = ['ru' ],
    day = ['1','2','3','4','5','6','7'];
    
    if (lang[0] && day[3]) {
        console.log('Среда');
    }



let num = 10;
if (num == 10) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

const min = 13;
if (min >= 0 && min <= 15) {
    console.log('В первую четверть');
} 
if (min > 15 && min <= 30) {
    console.log('Вторая четверть');
}
if (min > 30 && min <=45) {
    console.log('Третья четверть');
}
if (min > 45 && min <= 59) {
    console.log('Четвёртая четверть');
}

let i = 0;
let n = 0;
while (i < 5) {
    i++;
    if (i == 3) {
        continue;
    }
    n += i;
    console.log(n);
}*/

let i = 0,
    j = 0;
    while (i < 4) {
        console.log(i);
        i += 1;
        checkj:
            while (j > 4) {
                console.log(j);
                j -= 1;
                if ((j % 2) != 0) {
                    continue checkj;
                }
                console.log(j + "чёрное.");
            }
            console.log("i = " + i);
            console.log("j = " + j);
    }

   function dumpprops(obj, objname) {
       let result = "";
       for (let i in obj) {
           result += objname + "." + i + " = " + obj[i] + "<br>";
   } 
   result += "<br>";
   return result;
}
//Для объекта car со свойствами make and model, результатом будет:
//car.make = Ford
//car.model = Mustang
//Также по ключу можно выводить значение: смотри пример ниже.

let obj0 = {model: 'AUDI A8', year: '2019', color: 'brown'};

for (let key in obj0) {
    console.log(`${key} = ${obj0[key]}`);
}
//model = AUDI A8
//year = 2019
//color = brown

let arr10 = ['AUDI A7', '2018', 'black'];
arr10.cost = '$200.000';

for (let key in arr10) {
    console.log(`${key} = ${arr10[key]}`);
}//этот цикл выводит:
// 0 = AUDI A7
// 1 = 2019
// 2 = black
// cost = $200.000//резюме: лучше использовать цикл for
//иначе for in захватит не только массив , но и другие св-ва и методы.

//следующий пример показывает разницу между циклами 
//for of и for in/ for in идёт по именам св-в, а for of по значениям.
let arr11 = [2,4,7];
arr11.foo = "world";

for (let i in arr11) {
    console.log(i);//выводит "0","1","2","foo"
}

for (let i of arr11) {
    console.log(i);//выводит "2","4", "7"
}

let x = 0;
function loop(x) {
    if (x >= 10){
        return;
        
    }
    loop(x + 1);
}
loop(0);
console.log(x);

//Динамическая типизация :
//1)способ
console.log(typeof(String(null)));//превращение в строковый тип данных булинового значения.
console.log((String(null)));//получим null, строковым типом данных.
console.log(typeof(String(5)));//получим строку, цифра будет в ковычках.
//2)способ - это конкотенация, т.е. если к строке прибавить что угодно , это будет строка.
console.log(typeof(7 + ''));//выведет string,строковый тип данных.

const num0 = 4;
console.log("https://vk.com/catalog/" + num0);
//https://vk.com/catalog/4 - такой будет выведенная запись, можно уже идти по ссылке.))
//можно изпользовать бэктики.
const fontSize = 26 + 'px';//это применение динамической типизации.

// To Number

// 1)
console.log(typeof(Number('7')));//выведено будет number.
//2) это унарный +
console.log(typeof(+'9'));//выведет number.
//ещё один вариант применения унарного плюса:
let answ = +prompt("привет", "");
//всё, что приходит от пользователя имеет тип данных "строка".
//3) метод
console.log(typeof(parseInt("35px", 10)));//вывеодит - number.

//To boolean
//всегда не правда или false это:
// ноль  0, пустая строка, без пробела "", null, undefined, NaN;

let switcher = null;

if (switcher) {
    console.log("Working...");
}
switcher = 1;

if (switcher) {
    console.log("Working...");
}
//2) способ преобразования
console.log(typeof(Boolean('20')));//выведет boolean.
//3) способ преобразования в логический тип данных: boolean.
console.log(typeof(!!"55555"));//два знака !! сделают преобразование в логический тип данных.

//ЗАЧИ С СОБЕСЕДОВАНИЙ
//1. Какое будет выведено значение: let x = 5; alert(x++);?
//2. Чему равно такое выражение: [] + false - null + true?
//3. Что выведет код: let y = 1; let x = y = 2; alert(x);?
//4. Чему равна сумма [] + 1 + 2 ?
//5. Что выведет этот код: alert("1"[0]);?
//6. Чему равно 2 && 1 && null && 0 && udefined?
//7. Есть ли разница между выражениями? 
//   !!(a && b) и (a && b)?
//8. Что выведет этот код: alert(null || 2 && 3 || 4);?
//9. a = [1, 2, 3]; b = [1, 2, 3]; Правда ли , что a == b ?
//10. Что выведет этот код: alert(+"Infinity"); ?
//11. Верно ли сравнение: "Ёжик" > "яблоко"?
//12. Чему равно 0 || "" || 2 || undefined || true || false?

// Решение:
//1. let x = 5; alert(x++); выведет 5. Здесь сначала выводится х, а потом прибавляется 1.
//называется постфиксная запись инкримента.
//2.сначала напишем: console.log(typeof([] + false)); запустим и получаем тип данных строка: string.
//пустой массив приводится к типу данных строка и мы складываем строку и false, а при сложении со строкой
//ЛЮБЫХ типов данных, мы ПОЛУЧАЕМ СТРОКУ! "false"
//далее если напишем: 
//console.log([] + false - null); //получаем "NaN", не число
//console.log([] + false - null + true);//тоже "NaN".
//3. let y = 1;
//   let x = y = 2;//так как 2 это примитивный тип данных код идёт с права на лево.
//  2 присваивается 'y',затем y присваивается 'x'.
//  alert(x); //выведет 2.
//4. console.log([] + 1 + 2);//выведет "12"!!!Потаму ,что пустой массив строчный тип данных и
// строка с числом даст строку со значением "1", далее к строке"1" "приклеется" 2 и результат "12".
//5. alert("1"[0]); //выведет 1 .
//6. && оператор или проверяет верно ли и то выражение и это и другое , у него есть особенность - 
//  он спотыкается на лжи. Сравнения идут слева на право.
// console.log(2 && 1 && null && 0 && undefined);
//код доходит до null, в логическом контексте это ложь и станавливается.
//дальше код не пойдёт , выведено будет null.
//7. console.log(!!(1 && 2) === (1 && 2)); //мы получим false, так как
// два !! превращают последующее выражение в булиновое, а булиновое не равно числовому, в логичеком контексте.
//8. alert( null || 2 && 3 || 4);смотрим таблицу операторов и видим , что логичское и будет выполняться раньше,
// его приоритет выше. Пойдём шаг за шагом:
//  2 && 3 // и то и другое правда ,и вернёмся последнее значение слева на право, и это 3.
//  null || 3 , или запинается на правде, null это ложь, а 3 это правда в лог-м кон-те. Здесь вернёмся 3.
//  3 || 4, или запинается на правде ,вернётся нам 3.
//9. a не равно b , это разные хранилища, хоть и хронят одинаковое. Мы сравниеваем хранилища.
//10. выведет "Infinity",+ унарный плюс даёт числовой тип данных, но команда alert выведет в модальное окно Infinity.
//11. console.log("Ёжик" > "яблоко"); нам понадобится таблица "юникод" , там есть значения букв, регистров,проще 
//запустить код и узнать, что будет. В нашем случае false.
//12. "или" запинается на правде, сравнение дойдёт до 2 и код дальше не пойдёт.
// выведено будет 2.

/*let a = -5;
if (a == 0) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

let a = 0;
if (a > 0) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

let a = 0;
if (a <= 0) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

let a = 1;
if (a === '1') {
    console.log('Верно');
}  else {
    console.log('Неверно');
}

let test = false;
if (test == true) {
    console.log('Верно');
}  if (test != true) {
    console.log('Неверно');
}

let a = 1;
if (a > 0 && a < 5) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let a = 2;
if (a == 0 || a == 2) {
   a = a + 7;
} else  {
   a = a / 10; 
}
console.log(a);

let b = 2,
    a = 3,
    c = 0; 
if (a <= 1 || b >= 3) {
    c = a + b;
} else {
    c = a - b;
}
console.log(c);

let a = 7,
    b = 5;
    if (a > 1 && a < 11 || b >= 6 && b < 14) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }*/

    const nume = 3;
    let resultat = '';
    switch (nume) {
        case 1:
          resultat = 'Зима';
            break;
        case 2:
          resultat = 'Весна';
            break;
        case 3: 
            resultat = 'Лето';
        break;
        case 4: 
        resultat = 'Осень';
        
        break; 
        default:
            console.log('Что то не так');
            break;
    } 
    console.log(resultat);

    let day1 = 11;
    if (day1 >= 1 && day1 <= 10) {
        console.log('Первая декада');
    }   if (day1 > 10 && day1 <= 20) {
        console.log('Вторая декада');
    }  if (day1 > 20 && day1 <= 31) {
        console.log('Третья декада');
    }

    let month = 12;
    if (month >= 1 && month <= 2) {
        console.log('Зима');
    } if (month > 2 && month <= 5) {
        console.log('Весна');
    } if (month > 5 && month <= 8) {
        console.log('Лето');
    } if (month > 8 && month <= 11) {
        console.log('Осень');
    } if (month == 12) {
        console.log('Зима');
    }
    
const string = 'abcdef';
if (string[0] =='a' ) {
    console.log('Да');
} else  {
    console.log('Нет');

}

   
const string1 = '1234567';
if (string1[0] === '1' ) {
    console.log('Да');
} else  {
    console.log('Нет');

}

   
const string2 = '135785';
let result1 = ((+string2[0]) + (+string2[1]) + (+string2[2]));
let result4 = ((+string2[3]) + (+string2[4]) + (+string2[5]));
if (result1 == result4) {
    console.log('Да');
}  console.log('Нет');
//console.log(result1, result4); 

const string3 = '035';
let result2 = ((string3[0]) + (string3[1]) + (string3[2]));
console.log(result2); 

const string4 = '132613';
let result3 = ((+string4[0]) + (+string4[1]) + (+string4[2]));

let result5 =  ((+string4[3]) + (+string4[4]) + (+string4[5]));


if (result3 == result5) {
    console.log('Да');
}   console.log('Нет');

let str = '354423';
let summ = ((+str[0]) + (+str[1]) + (+str[2]));
let summ1 = ((+str[3]) + (+str[4]) + (+str[5]));
if (summ == summ1) {
    console.log('Верно');
} else {
    console.log('Нет');
}
let it = 1;
while (it <= 50) {
    document.write(it + '<br>');
    i++;
}


