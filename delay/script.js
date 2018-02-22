// Реализовать метод `.delay`
Function.prototype.delay = function (time) {
  setTimeout(this, time);
};


var foo = function () {
  alert("bingo!");
};


foo.delay(300); // после 0.3s: "bingo!"
bar.delay(600); // после 0.6s: "Wow!"


function bar() {
  alert("Wow!");
}
