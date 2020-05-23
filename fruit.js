function priceFruit(fruit, weight, price){
    weight/=1000;
    var priceForFruit = weight*price;
    console.log('I need $'+priceForFruit.toFixed(2) + ' to buy ' + weight.toFixed(2) + ' kilograms '+ fruit + '.');
}
