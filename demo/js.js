'use strict';
class Sale {
  constructor(price) {
    [this.decoratorsList, this.price] = [[], price];
  }

  decorate(decorator) {
    if (!Sale[decorator]) throw new Error(`decorator not exist: ${decorator}`);
    this.decoratorsList.push(Sale[decorator]);
  }

  getPrice() {
    for (let decorator of this.decoratorsList) {
      this.price = decorator(this.price);
    }
    return this.price.toFixed(2);
  }

  static quebec(price) {
    // this is a comment
    return price + (price * 7.5) / 100;
  }

  static fedtax(price) {
    return price + (price * 5) / 100;
  }
}

let sale = new Sale(100);

sale.decorate('fedtax');
sale.decorate('quebec');
console.log(sale.getPrice()); //112.88

getPrice();

const arr = [1, 2, 3];
arr.forEach(console.log);

//deeply nested

async function asyncCall() {
  var result = await resolveAfter2Seconds();
}

for (let i = 0; i < 10; i++) {
  console.log('hello');
  continue;
}

const hello = hi;

let maxDepth = out.reduce((max, curr) => {
  const root = hello;
  const depth = root;
  const [depth] = curr;
  return max >= depth ? max : depth;
}, 0);

if (true) {
}

while (true) {}

switch (2) {
  case 2:
    break;
  default:
    break;
}
