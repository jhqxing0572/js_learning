//question 1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
const double = obj => {
  newObj = [];
  newObj.quantity = obj.quantity * 2;
  newObj.price = obj.price * 2;
  return newObj;
};
let newObject = itemsObject.map(double);
console.log(newObject);

//question 2
function filt(obj) {
  return (obj.quantity > 2) & (obj.price > 300);
}
let newObject1 = itemsObject.filter(filt);
console.log(newObject1);

//question3
let total = itemsObject.reduce(function (prevValue, currValue) {
  return prevValue + currValue.price * currValue.quantity;
}, 0);
console.log(total);

//question4
const string = ' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ';
console.log(string.trim().split(/[ -]+/).join(' ').toLowerCase());
