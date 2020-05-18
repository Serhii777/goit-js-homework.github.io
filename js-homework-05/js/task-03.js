class Storage {
   constructor(items) {
      this.items = items;
   }
}

Storage.prototype.getItems = function () {
   console.log(this.items);
   return this.items;
};

Storage.prototype.addItem = function (newItem) {
   this.newItem = newItem;
   this.items.push(newItem);
};

Storage.prototype.removeItem = function (itemName) {
   this.itemName = itemName;
   this.items = this.items.filter(item => item !== itemName);
   return this.items;
};

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
