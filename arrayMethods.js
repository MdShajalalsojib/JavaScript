const products = [
    { id : 1, name:"iphone", color:"black", price: 1200, brand: "apple"},
    { id : 2, name:"xiaomi", color:"gold", price: 100, brand: "xpple"},
    { id : 3, name:"samsung", color:"gold", price: 1500, brand: "sam"},
    { id : 4, name:"ip", color:"gold", price: 1000, brand: "apple"},
    { id : 5, name:"ipne", color:"black", price: 1200, brand: "apple"},
]

const newPro = products.filter(p => p.id ! = 3);
console.log(newPro)

const product = products.find (po => po.color==="gold");
console.log(product)

const newpro = products.filter(pro => pro.price> 1000);

products.forEach (product => {
    if (product.color==="gold"){
        console.log(product)
    }
})