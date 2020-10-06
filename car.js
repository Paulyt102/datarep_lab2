class Vehicle {

    constructor(make, model, year) { //This is a constructor
        this.make = make;
        this.model = model;
        this.year = year;

    }
    Information() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);

    }
}
/*
let myVehicle = new Vehicle('VW', 'Golf', '2010');
let info = myVehicle.Information();*/
class Cars extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;

    }

    Information() { //Here is a method
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}
let myCar = new Cars('VW', 'Golf', '2011', 5);
myCar.Information();