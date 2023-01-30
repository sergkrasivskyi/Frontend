// Task 1
// Напишіть функцію, яка проглядає масив об'єктів (перший аргумент)
//  і повертає масив усіх об'єктів, які мають однакові пари імен та
// значень (другий аргумент). Кожна пара імен та значень вихідного
// об'єкта повинна бути в об'єкті з колекції, якщо він необхідний у
// повернутому масиві.

// Наприклад, якщо першим аргументом є [{ first: "Romeo", last: "Montague" },
//  { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]
//  та другим аргументом є { last: "Capulet" },
// тоді потрібно повернути третій об'єкт з масиву (перший аргумент), оскільки
//  він містить ім'я та його значення, яке було передане до другого аргументу.

// function whatIsInAName(collection, source) {
//   // знайти ключі у collection та source
//   // порівняти значення ключ-пара з source у елементів collection
//   const keysToSearch = Object.keys(source);
//   function isInclude(obj, keysArr) {
//     let res = keysArr.filter((key) => source[key] === obj[key]);
//     return res.length === keysArr.length ? true : false;
//   }
//   const res = collection.filter((elem) => {
//     return isInclude(elem, keysToSearch);
//   });
//   return res;
// }

// whatIsInAName(
//   [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
//   { apple: 1, cookie: 2 }
// );
// whatIsInAName(
//   [
//     { first: "Romeo", last: "Montague" },
//     { first: "Mercutio", last: null },
//     { first: "Tybalt", last: "Capulet" },
//   ],
//   { last: "Capulet" }
// );
// whatIsInAName(
//   [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
//   { apple: 1, bat: 2 }
// );
// Task 2
// Шашличний регістр
// Перетворіть рядок в шашличний регістр.
// У шашличному регістрі всі-слова-в-нижньому-регістрі-та-розділені-рискою.
// function spinalCase(str) {
//   let result = str.toLowerCase().split(' ').join('-')
//   console.log(result);
//   console.log(str);
//   return str;
// }

// spinalCase("This Is Spinal Tap");

// Task 3 Поросяча латина
// Поросяча латина – це спосіб шифрування англійських слів. Правила такі:
// - Якщо слово починається з приголосного звуку, то перший приголосний
//  або сполучення приголосних переміщуються в кінець слова і додається ay.
// - Якщо слово починається з голосного звуку, то вкінці просто додається
//  way.
//  Перекладіть поданий рядок на поросячу латину. Відомо, що при вводі всі
//  рядки будуть складатись з англійських слів у нижньому регістрі

function translatePigLatin(str) {
  vowelsLetters = "AEIOU".toLowerCase();
  const chekingLetters = str.split("");
  for (let i = 0; i < chekingLetters.length; i++) {
    if (!vowelsLetters.includes(chekingLetters[i])) {
      console.log(chekingLetters[i]);
    }
  }
  // console.log(chekingLetters);
  return str;
}

translatePigLatin("consonant");
// translatePigLatin("california");
// translatePigLatin("paragraphs");
// translatePigLatin("paragraphs");
// translatePigLatin("glove");
// translatePigLatin("algorithm");
// translatePigLatin("eight");
