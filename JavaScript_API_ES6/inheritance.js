class Vehica {
    constructor(name, price){
        this.Name = name;
        this.Price = price;
    }
    move(){
        console.log("ami cholachol korte pari");
    }
}
class Bus extends Vehica {
    constructor(name, price, seat){
        super(name, price);
        this.seat = seat;
    }
    route(){
        console.log("dhaka to cox")
    }
}

class Tak extends Vehica {
    constructor(name, price,what){
        super(name,price);
        this.whate = what;
    }
    teiw(){
        console.log("This the take w");
    }
}
const greenLine = new Bus("greenLine", "12",66);
 console.log(greenLine);
// greenLine.move()