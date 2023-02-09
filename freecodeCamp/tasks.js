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

// Напишіть функцію, яка приймає два або більше масивів та повертає новий масив
//  унікальних значень у порядку наданих початкових масивів.
// Іншими словами, усі значення, що є в масиві, повинні бути в початковому порядку,
//  але в кінцевому масиві не повинно бути повторень.
// Унікальні числа повинні бути відсортовані за початковим порядком, але кінцевий
//  масив не повинен бути відсортованим за числовим порядком.
// Ознайомтеся з тестами тверджень для прикладу.

// function uniteUnique(arr) {
//   const arg = [...arguments]
//   console.log(arg);
//   const result = arg.reduce((acc, currentvalue) => {
//     console.log('acc: ', acc);
//     console.log("currentvalue: ", currentvalue);
//     let toInsert = currentvalue.filter(elem =>
//       !acc.includes(elem)
//     )
//     console.log("insert: ", toInsert);
//     acc = [...acc, ...toInsert];
//     return acc
//   }, [...arg[0]].filter((a, b) => a != b))
//   console.log('result: ', result);

//   return result;
// }

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
// має повертати [1, 3, 2, 5, 4].
// uniteUnique([1, 2, 3], [5, 2, 1])
// має повертати [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
// має повертати [1, 2, 3, 5, 4, 6, 7, 8].
// uniteUnique([1, 3, 2], [5, 4], [5, 6])
// має повертати [1, 3, 2, 5, 4, 6].
// uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])
// має повертати [1, 3, 2, 5, 4]

// Task 5
// Перетворіть символи &, <, >, " (подвійні лапки) та ' (апостроф)
// у відповідне позначення символів для HTML.

// Solution 1
// function convertHTML(str) {
//   let result = [];
//   // str.includes("&")
//   //   ? (result = str.replaceAll("&", "&amp;"))
//   //   : str.includes("<")
//   //   ? (result = str.replaceAll("<", "&lt;"))
//   //   : str.includes(">")
//   //   ? (result = str.replaceAll(">", "&lt;"))

//   result = str
//     .replaceAll("&", "&amp;")
//     .replaceAll("<", "&lt;")
//     .replaceAll(">", "&lt;")
//     .replaceAll("'", "&apos;")
//     .replaceAll('"', "&quot;");
//   console.log("result: ", result);
//   return str;
// }
// Solution 2
// function convertHTML(str) {
//   const entries = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&lt;",
//     "'": "&apos;",
//     '"': "&quot;",
//   };
//   const result = str.split('')
//   .map((elem ) => {
//     // console.log("element: ", entries[elem] || elem);
//     return entries[elem] || elem
//   })
//   .join('')
//   console.log('result: ', result);
//   return str;
// }

// convertHTML("Dolce & Gabbana");
// має повертати рядок Dolce &amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos");
// має повертати рядок Hamburgers &lt; Pizza &lt; Tacos.
// convertHTML("Sixty > twelve");
// має повертати рядок Sixty &gt; twelve.
// convertHTML('Stuff in "quotation marks"');
// має повертати рядок Stuff in &quot;quotation marks&quot;.
// convertHTML("Schindler's List");
// має повертати рядок Schindler&apos;s List.
// convertHTML("<>");
// має повертати рядок &lt;&gt;.
// convertHTML("abc");
// має повертати рядок abc

// Task 6
// Сума всіх непарних чисел Фібоначчі

// Маючи додатнє ціле число num, поверніть суму всіх непарних
// чисел Фібоначчі, які менші чи дорівнюють num.
// Першими двома числами в послідовності Фібоначчі є 1 та 1.
// Кожне додаткове число у послідовності є сумою двох попередніх чисел.
//  Першими шістьма числами в послідовності Фібоначчі є 1, 1, 2, 3, 5 і 8.
// Наприклад, sumFibs(10) має повертати 10, оскільки всі непарні
// числа Фібоначчі, які менші або дорівнюють 10 – це 1, 1, 3 і 5.
//
let sum = 0;
let fibArr = [0,1];
function fibNumbersToArr(num) {
  if (num > 2) {
    fibNumbersToArr(num - 1);
  }
  // if ((num = 2)) {
  //   fibArr[1] = 1;
  // }
  fibArr[num] = fibArr[num - 1] + fibArr[num - 2] || 0;
}
function sumFibs(num) {
  fibNumbersToArr(7);
  
  return sum;
}
sumFibs(100);
console.log("Fib nums arr: ", fibArr);
// sumFibs(1)
// має повертати число.
// sumFibs(1000)
// має повертати 1785.
// sumFibs(4000000)
// має повертати 4613732.
// sumFibs(4)
//  має повертати 5.
// sumFibs(75024)
//  має повертати 60696.
// sumFibs(75025)
// має повертати 135721.
