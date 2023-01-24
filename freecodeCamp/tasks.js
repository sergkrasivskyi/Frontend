function whatIsInAName(collection, source) {
  // знайти ключі у collection та source
  // порівняти значення ключ-пара з source у елементів collection
  const result = collection.reduce((acc, elem) => {
    elem === source ? acc.push(elem) : console.log(`${elem}`, "empty");

    console.log("acc", acc);
    return acc;
  }, []);
  console.log("result", result);
  return result;
}

whatIsInAName([1, "some", "some", "any", 3], 'any');
whatIsInAName([1, 2, 3], 1);
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
