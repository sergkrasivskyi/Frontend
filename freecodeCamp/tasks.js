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
//  або сполучення приголосних переміщуються в кінець слова і додається 'ay'.
// - Якщо слово починається з голосного звуку, то вкінці просто додається
//  'way'.
//  Перекладіть поданий рядок на поросячу латину. Відомо, що при вводі всі
//  рядки будуть складатись з англійських слів у нижньому регістрі

// function translatePigLatin(str) {
//   // Голосні
//   const vowelsLetters = "aeiou";
//   // перетворюємо строку у масив
//   const chekingLetters = str.split("");
//   console.log("chekingLetters", chekingLetters);
//   // визначаємо стартову літеру
//   let isVowelStart, isConsonantStart;
//   vowelsLetters.includes(chekingLetters[0])
//     ? (isVowelStart = true)
//     : (isVowelStart = false);
//   isConsonantStart = !isVowelStart;
//   // console.log(isVowelStart);
//   // console.log(isConsonantStart);
//   // якщо голосна, то відразу видаємо результат
//   if (isVowelStart) {
//     let result = chekingLetters.join("") + "way";
//     console.log("vowel start, result: ", result);
//     return result;
//   }
//   // якщо приголосна, то фільтруємо результат
//   let cutPosition = str.search(/[aeiou]/g);
//   console.log("position: ", cutPosition);
//   if (cutPosition == -1) {
//     let result = chekingLetters.join("") + "ay";
//     console.log("vowel full, result: ", result);
//     return result;
//   }
//   let result =
//     chekingLetters.slice(cutPosition).join("") +
//     chekingLetters.slice(0, cutPosition).join("") +
//     "ay";
//   console.log("ConsonantStart, result: ", result);
//   return result;
// }

// translatePigLatin("rhythm");
// translatePigLatin("consonant");
// translatePigLatin("california");
// translatePigLatin("paragraphs");
// translatePigLatin("glove");
// translatePigLatin("algorithm");
// translatePigLatin("eight");

// Another solve
// function translatePigLatin1(str) {
//   return console.log(
//     str.replace(/^[aeiou]\w*/, "$&way").replace(/(^[^aeiou]+)(\w*)/, "$2$1ay")
//   );
// }
// translatePigLatin1("rhythm");
// translatePigLatin1("consonant");
// translatePigLatin1("california");
// translatePigLatin1("paragraphs");
// translatePigLatin1("glove");
// translatePigLatin1("algorithm");
// translatePigLatin1("eight");

// task 4
//
// Знайдіть пропущену літеру в переданому діапазоні літер та поверніть її.
// Якщо у діапазоні наявні всі літери, поверніть undefined.

// function fearNotLetter(str) {
//   return str;
// }

// fearNotLetter("abce");
// fearNotLetter("abce") має повертати рядок d.
// fearNotLetter("abcdefghjklmno")
// має повертати рядок i.
// fearNotLetter("stvwx") 
// має повертати рядок u.
// fearNotLetter("bcdf")
// має повертати рядок e.
// fearNotLetter("abcdefghijklmnopqrstuvwxyz")
//  має повертати undefined.
// Solution
// function fearNotLetter(str) {
//   const fullRange = "abcdefghijklmnopqrstuvwxyz";
//   const strToArr = str.split("");
//   let newRes = strToArr
//     .reduce((includeStr, currentValue) => {
//       includeStr = includeStr + currentValue;
//       let isInclude = fullRange.includes(includeStr);
//       isInclude ? includeStr : (includeStr = includeStr.slice(0, -1) + " ");
//       return includeStr;
//     }, "")
//     .split(" ")
//     .join("");
//   let readySymbolIndex = fullRange.indexOf(newRes) + newRes.length;
//   console.log("fullRange[readySymbolIndex]: ", fullRange[readySymbolIndex]);
//   return fullRange[readySymbolIndex];
// }

// task 4
