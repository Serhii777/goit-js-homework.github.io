class Storage {
   constructor(items) {
      this.items = items;
   }

   getItems() {
      return this.items;
   }

   addItem(newItem) {
      this.newItem = newItem;
      this.items.push(newItem);
   }

   removeItem(itemName) {
      this.itemName = itemName;
      this.items = this.items.filter(item => item !== itemName);
      return this.items;
   }
}

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
