// //console.log(1);
 "use strict";

// let number = 4.6;
// console.log(4/0);
// console.log('string' * 9);

// const persone = `5`;

// const bool = false;

// console.log(somehting);

// let und;
// console.log(und);
// console.log(4/0);
// console.log(-4/0);
// const obj = {
//     name: 'John',
//     age: 25,
//     isMarried: false,
// };

// console.log(obj.name);
// console.log(obj[name]);//это неверная запись
// console.log(obj["name"]);//вот так - правильно
// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const ansver = prompt('Вам есть 18','');
// console.log(answer);
// console.log(typeof(ansver));
// alert('Hello');
//если мы хотим узнать ответ пользователя да или нет.
// то нам нужна команда сонфирм
// const result = confirm('Are you here');
// console.log(result);
// const answer = prompt('Вам есть 18 лет?', '');

//const category = 'toys';
//console.log('https://someurl.com/'+ category/+/+4');
//console.log(`https://someurl.com/${category}/5`);
//const user = 'Ivan';
//alert(`Привет, ${user}`);
//конкотенация - это склеивание значений в строке(43стр) ,
//итерполяция-название метода , кот. позволяет прямо
//в нутри строки вставлять переменные и использовать 
// код динамически, но только при наличии бэктиков , а не 
//ковычек одинарных или двойных.(44стр.)
//ещё раз конкотенация 
//console.log('arr' +  " - object"); - это строка
//console.log(4 + " - object"); - это тоже строка
//если console.log(4 + +" - object"); то получим NaN. Второй
//плюс даёт нам преобразование object в число , а это абсурд , 
//поэтому ответ в консоли  NaN., но если пставить 5 вместо object
//console.log(4 + +"5"); то получим результат 9.
//+ который ставится перед определённым аргументом , называется
//унарным, потому что он использует только один аргумент для 
//своей работы тот перед которым стоит.
//инкримент и дикримент, префиксная форма и постфиксная форма.
//let incr = 10, содание переменных через let даёт возможность их
//    decr = 10; изменять, а записть через запятую норма, нет 
// нужды писать много раз let.
// incr++; это записть инкримента ,т.е. увеличение переменной на 1.
// decr--; это записть декримента, т.е. уменьшение переменной на 1.
//console.log(incr); здесь получаем 11.
//console.log(decr); здесь получаем в консоль 9.
//если переставить ++ и -- вперёд аргумета т.е 
//++incr; 
//--decr;
//console.log(incr); результат  тот же 11.
//console.log(decr); результат тот же 9.
//запись ++ или -- впереди аргумента - префиксная .
//запись ++ или -- после аргумента - постфиксная.
//разница в записи постфиксной и префиксной будет видна если мы
//будем использовать их прямо в строке
//console.log(incr++); результат будет 10
//console.log(decr--); результат будет 10
//сначала выполнена команда console.log, а потом incr++
//а если использовать префиксную запись , то будет:
//console.log(++incr); результат будет 11.
//console.log(--decr); результат 9.
//префиксная форма написания сработает прямо в строке.
//оператор в виде знака процента используется для вывода остатка
//от деления. Запишем выражение и выведем в консоль.
//console.log(5%2); результат 1. Это остаток от возможного 
//колличества делений 5 на 2 .
//ещё один оператор , кот. ты знаем это равенство = ,если он один
//то это оператор прсваивания , мы переменной присваиваем значение.
//если == это оператор сравнения , не строгого сравнения, запишем:
//console.log(2*4 == '8'); рузультат в консоли true, правда 
//несмотря на то,что мы сравнивали число и строку. В одинарных
//ковычках у нас всегда строка.== Не строгое равенство сранивает
//только по значению, а не по тиру данных.
//оператор строгого сравнения это === три равно , если написать
//console.log(4*2==='8'); результат будет false , ложь т.к. число
//не может равняться строке.Это сравнение не только по значению , но
// и по типу данных.
//логические операторы "и" и "или", пишутся они && || соответственно
//ещё один оператор , это оператор отрицания ! пишется как восклицательный
//знак , он меняе значение переменной на обратное. Пример:
//const isChecked = false,
//      isClose = false;

//console.log(isChecked || isClose); результат false , a если записать:
//console.log(isChecked || !isClose); рузультат будет  true.
//Теперь приоритеты операторов. Для этого существует таблица операторов.
//есть ещё один оператор это отрицание != не равно, если !== то это
//будет сторогое сравнение и по значению и по типу сторого не равно.
//Сегодня 31
//Сегодня 04.09.2020 суть коментария -посмотреть как работает гит.))
//Сегодня 06.09.2020 23.23. пришли от Андрея . 20 лет Дане.
// для того , чтобы инициировать проэкт , надо набрать команду git init
//далее указать имя и имейл. git config --global user.name "Vadim"
//git config --global user.email vetra783@mail.ru
//можно вместо глобал , написать local, local работает вместо глобал и распостро
//роняется на один указанный проэкт.
//git status ,команда которая покажет состояние файлов в проэкте
//git add -A это команда добавления всех файлов в проэкт, причём всех файлов , за
//это отвечает большая -А .Значит все файлы в проэкте добавлены в git. 
//маленькая -а это тоже, что и add / -m" "это меседж ,пояснение об изменениях в файле
//git log выведет все " логи "коммиты , которые были сделаны , контрольные точки
//для того ,чтобы соединить новый рипозиторий на гитхабе с файлами в проэкте есть
// команда git remote add origin далее путь к репозиторию из github . Теперь репози-
//торий связан с проэктом. Чтобы залить проэкт в репозиторий команда git push -u origin master
//-u это по умолчанию теперь все файлы будут пушиться в этот репозиторий в ветку мастер.
// для того , чтобы создать слияние или branch , пишу эту строчку
