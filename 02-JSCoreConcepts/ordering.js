const reverse = function (array) {
  arrReversed = [];
  array.forEach(item => arrReversed.push(item));
  arrReversed.reverse();
  return arrReversed;
}

const sort = function (array) {
  return array.sort((a, b) => { return a - b });
}

const even = function (array) {
  return array.filter((element, index) =>
    element % 2 == 0
  )
}



numbers = [8, 3, 2, 1, 5, 4, 6, 10];
console.log(numbers);
console.log(reverse(numbers));
console.log(even(numbers));
console.log(reverse(even(numbers)));
console.log(even(sort(numbers)));