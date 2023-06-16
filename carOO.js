// part one - create a class for vehicle that accepts make model and year, 
//and returns the string 'beeeep' when the function honk is called, and return
//the data when toString is called


class Vehicle {

    constructor(make, model, year) {
    this['make'] = make;
    this['model'] = model;
    this['year'] = year;

    }

honk() {
    return ("BEEEEEP");
}

toString() {
    return ('This vehicle is a `${make}` `${model}` made in `${year}`')
}

}





// part two - create a class that inherits vehicle called car, with key val pair
//called numWheels, set to 4;

class Car extends Vehicle {

    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
   
}

// part three - create a class called motorcycle thats the same but with 
//two wheels and a rev function that returns 'vroom'

class Motorcycle extends Vehicle {

    constructor(make, model, year){
        this.numWheels = 2;
                super(make, model, year);

    }
   rev() {
    return ('VROOM!');
   }
}

// part four - create a class for garage, it will take a number of 
//vehicles, in a specified value called capacity. if you try to add something
//that is not a vehicle, it should warn you, and when full it should let you know

class garage {
    constructor(num){
        this.capacity = num;
        this.vehicles = [];
    }
    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
        return ("Only vehicles allowed");
    }

    if(this.vehicles.length >= this.capacity) {
        return "Sorry, full up";
    }
    this.vehicles.push(newVehicle);
    return "Parked the whip";
}