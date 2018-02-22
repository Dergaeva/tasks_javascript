// Объяснить, сколько элементов будет выбрано и почему
let rootEl = document.getElementById('nav');

// Native
let qSA_count = rootEl.querySelectorAll("div a").length;
console.log(qSA_count); // 5 т.к показывает все которые есть

// jQuery
let jq_count = $(rootEl).find('div a').length;
console.log(jq_count); // 3, т.к. показывает все, кроме 1 и последнего - находит только вложенные
