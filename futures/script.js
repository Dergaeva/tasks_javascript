// Реализовать класса Futures
function Futures(executor) {

  this.state = "pending";

  this.callResolve = [];
  this.callReject = [];

  this.resolve = {};
  this.reject = {};

  this.onFulfilled = {};
  this.onReject  = {};

  executor.apply(this, [this.resolve.bind(this), this.reject.bind(this)]);

}

Futures.prototype.resolve = function (onFulfilled, value) {
  this.state = "fulfilled";
  this.onFulfilled = function () {
    this.value = value;
  };
  this.callResolve.push(onFulfilled);
  /*onFulfilled: onFulfilled;*/
  /*console.log(this.callResolve);*/

};

Futures.prototype.reject = function (onReject, value) {
  this.state = "rejected";
  this.onReject = function() {
    this.value = value;
  };
  this.callReject.push(onReject);
  // onReject: onReject;

};

Futures.prototype.then = function (resolve, reject) {

  if (this.state === "pending") {
    return;
  }

  else if (this.state === "fulfilled") {
    this.callResolve.forEach(function(item) {
      return console.log(item);
    });
  }

  if (this.state === "rejected") {
    this.callReject.forEach(function(item) {
      return item ;
    });
  }

};


// Тест #1
var foo = new Futures(function (resolve, reject) {
  resolve(1);
});

foo.then(function (val) {
  console.info("foo.resolved:", val === 1);
}, function () {
  console.assert(false, "foo.resolved");
});

// Тест #2
var bar = new Futures(function (resolve, reject) {
  setTimeout(resolve.bind(null, 2), 300);
  setTimeout(reject.bind(null, 3), 200);
});

bar.then(function (val) {
  console.assert(false, "bar.rejected");
}, function (val) {
  console.info("bar.rejected:", val === 3);
});
