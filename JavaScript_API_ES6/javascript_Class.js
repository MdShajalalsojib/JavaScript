class product {
    constructor(name,price,brand,malik){
        this.name = name;
        this.Price = price;
        this.BrandName = brand;
        this.Malik = malik;
    }
    details(){
        console.log(`ami ${this.name} product er details`);

    }
} 
const iphon = new product("iphon","23400","apple","jobs");
iphon.details()

const xiaomi = new product("redmi", 14300, "xiaomi", "jani na");
console.log(xiaomi);

xiaomi.details();