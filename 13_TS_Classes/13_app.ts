interface Vehicle {
    description():void;
}

class Car implements Vehicle{

    private carName:string;
    private year:number;
    private mileage:string;
    private rpm : string;

    constructor(carName , year , mileage , rpm){
        this.carName = carName;
        this.year = year;
        this.mileage = mileage;
        this.rpm = rpm;
    }

    public getCarName():string{
        return this.carName;
    }
    public getYear():number{
        return this.year;
    }
    public getMileage():string{
        return this.mileage;
    }
    public getRPM():string{
        return this.rpm;
    }
    public description():void{
        let desc = `carName : ${this.getCarName()} 
                    Year of Mfg : ${this.getYear()}
                    Mileage : ${this.getMileage()}
                    RPM : ${this.getRPM()}`;
        console.log(desc);
        document.getElementById('display').innerHTML = desc;
    }
}

let car = new Car('Benz',2018,'10kmpl','8000rpm');
car.description();



