const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

function double(itemObject) {
  const newObject = new Array();
  for (let i = 0; i < itemObject.length; i++) {
    newObject.push(itemObject[i]);
  }
  console.log(newObject);
}

double(itemsObject);

function filter(itemObject) {
  //newObject = [];
  const newObject = new Array();
  for (let i = 0; i < itemObject.length; i++) {
    if (itemObject[i].quantity > 2 && itemObject[i].price > 300) {
      newObject.push(itemObject[i]);
    }
  }
  console.log(newObject);
}
filter(itemsObject);

function calculateTotal(itemObject) {
  let totalValue = 0;
  for (let i = 0; i < itemObject.length; i++) {
    totalValue = totalValue + itemObject[i].quantity * itemObject[i].price;
  }
  console.log(totalValue);
}
calculateTotal(itemsObject);

const string = ' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ';
function clearString(oldString) {
  let arrayTmp = oldString.trim().split(/\s+/);
  for (let i = 0; i < arrayTmp.length; i++) {
    let stringTmp = '';
    for (let j = 0; j < arrayTmp[i].length; j++) {
      if (/[a-zA-Z]/.test(arrayTmp[i][j])) {
        stringTmp = stringTmp + arrayTmp[i][j].toLowerCase();
      }
    }
    arrayTmp[i] = stringTmp;
  }
  let newString = arrayTmp.join('');
  console.log(newString);
}
clearString(string);
