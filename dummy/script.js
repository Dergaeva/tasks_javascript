// Заставьте это работать
let Dummy = new function Dummy() {
  let instance;
  this.value = 'dummy';

  function Dummy() {
    if (!instance) instance = this;
    else return instance;

    Dummy.prototype.setValue = function (value) {
      this.value = value;
    };

    Dummy.prototype.getValue = function () {
      return this.value;
    };
  }

  return Dummy;
};


// Используем
let foo = new Dummy();
let bar = new Dummy();

bar.setValue(123);


// Тесты
console.log('-------------------');
console.info('foo === bar ->', foo === bar); // true
console.log('values:', [foo.getValue(), bar.getValue()]); // [123, 123]

// Bonus level
//baz = Dummy();
//console.info('baz === bar ->', baz === bar, baz.getValue()); // true, 123
