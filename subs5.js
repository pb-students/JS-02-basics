let goodsString = "kluski,pizza,ziemniaki,papryka,oleju"
let goodsTabString = []; goodsTabString = goodsString.split(",")
let goods = []

console.log(goodsTabString)
for (let good of goodsTabString) {
  let commodity = {
    name: good,
    price: ((Math.random() * 100) + 1).toFixed(2)
  }
  goods.push(commodity)
}

for (let i = 0; i < goods.length; i++) {
  console.log(goods[i])
}

let transactionsArray = []

for (let i = 0; i < goods.length / 2; i++) {
  let random = parseInt(Math.random() * goods.length);
  let transaction =  {
    name: goods[random].name,
    price: goods[random].price,
    amount: parseInt((Math.random() * 100) + 1)
  }
  goods.splice(random, 1);
  transactionsArray.push(transaction)
}

console.log(transactionsArray);



