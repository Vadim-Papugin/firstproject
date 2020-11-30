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

//'use strict';
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?',''),
          b = prompt('На сколько оцените его?','');
        if (a != null &&  a.length < 50 && a != ''&& b != null && b.length < 50 && b != '') {
            personalMovieDB.movies[a] = b; 
        } else {
            i--;
        }
      
}
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
    

    console.log(personalMovieDB);


