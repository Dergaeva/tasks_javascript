// Объяснить, сколько элементов будет выбрано и почему
// let rootEl = document.getElementById('div');
// let arr = document.querySelectorAll("div a");
//
// for (var i = 1; i < arr.length-1; i++) {
//   console.log( arr[i] );
// }

//
// let rootEl = document.getElementById('nav');


let result = document.querySelector('#nav').querySelectorAll("div:scope a");
console.log(result);


//
// // Native
// let result = rootEl.querySelector(':scope a');
// console.log(result); // 5 т.к показывает все которые есть

// function firstAndLast(array) {
//
//   var firstItem = myArray[0];
//   var lastItem = myArray[myArray.length-1];
//
//
//   // var objOutput = {
//   //   first : firstItem,
//   //   last : lastItem
//   // };
//   //
//   // return objOutput;
//
//   myArray.splice();
// }
//
// var display = firstAndLast(myArray);

// console.log(myArray);

// jQuery
//let jq_count = $(rootEl).find('div a').length;
//console.log(jq_count); // 3, т.к. показывает все, кроме 1 и последнего - находит только вложенные

// let rootEl = document.querySelectorAll('nav');
//
// // Native
// let qSA_count = rootEl.querySelectorAll(":scope a").length;
// console.log(qSA_count);
