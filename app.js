

class Vehicle {
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return 'Beep'
    }
    toString(){
        return `This is a ${this.year} ${this.make} ${this.model}`;
    }
}


class Car extends Vehicle{
    constructor(ma,mo,y){
        super(ma,mo,y);
        this.numWheels = 4;
    }


}

class Motorcycle extends Vehicle{
    constructor(ma,mo,y){
        super(ma,mo,y);
        this.numWheels = 2
        
    }

    revEngine(){
        return 'VROOM!!!';
    }
}

class Garage {
    constructor(cap){
        if(!Number.isFinite(cap) || cap < 1){
            throw new Error('capacity must be a positive number')
        }
        this.capacity = cap;
        this.vehicles = [];
    }

    add(obj){
        if(this.vehicles.length >= this.capacity){
            return 'Sorry, We are full.';
        }
            if(obj.model && obj.make){
                this.vehicles.push(obj);
                return 'Vehicle Added!'
            }
            else {
                return 'Only vehicles are allowed.'
            }
    }


}