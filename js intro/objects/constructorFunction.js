

function Product(name,price,category) {

    this.name = name;
    this.price = price;
    this.category=category;
}

var p1 = new Product("laptop",2000,'electronic')

console.log(p1)


p1.vat = 2

console.log(p1)