const reverse = function(arr) {
    arrReversed = [];
    arr.forEach(item => arrReversed.push(item));
    arrReversed.reverse();
    return arrReversed;
}



const even = function(arr) {
    let arrEven = arr;
    // ...
     return arrEven.filter((el, index) => 
       index%2 == 0
     )
}


const sort = function(arr) {
   
   return arr.sort(function(a, b){return b - a});
  
}

numbers = [8,3,2,1,5,4,6,10];
console.log(numbers);
console.log(reverse(numbers));
console.log(even(numbers));
console.log(reverse(even(numbers)));
console.log(even(sort(numbers)));