class StringBuilder {
   constructor(value) {
      this._value = value;
      console.log(typeof value);
   }

   get value() {
      return this._value;
   }
}

StringBuilder.prototype.append = function (str) {
   this.str = str;
   this._value = this._value + `${str}`;

   console.log(this._value);
};

StringBuilder.prototype.prepend = function (str) {
   this.str = str;
   this._value = `${str}` + this._value;
   console.log(this._value);
};

StringBuilder.prototype.pad = function (str) {
   this.str = str;
   this._value = `${str}` + this._value + `${str}`;
   console.log(this._value);
};

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
