const total = 100;
console.log(`Количество товаров на складе - ${total} единиц`);
const ordered = 50;
// const ordered = 20;
// const ordered = 80;
// const ordered = 130;
console.log(`Количество единиц товара в заказе - ${ordered} единиц`);
if (ordered <= total) {
    console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
    console.log('На складе недостаточно товаров!');
}
