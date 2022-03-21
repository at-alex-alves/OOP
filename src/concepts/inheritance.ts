class Car {
    public model: string;
    public manufacturer: string;
    public year: number;
    public price: number;

    /**
     * Creates a new instance of the Car class.
     * @param {string} model - The model of the car.
     * @param {string} manufacturer - The name of the manufacturer.
     * @param {number} year - The year the car was manufactured.
     * @param {number} price - The price of the car.
     */
    constructor(model: string, manufacturer: string, year: number, price: number) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.price = price;
    }

    /**
     * Raises the price of the car by the given amount.
     * @param {number} priceToAdd - The price to be added to the car.
     */
    public raisePrice(priceToAdd: number) {
        this.price += priceToAdd;
    }

    /**
     * Subtracts a value from the price of the car.
     * @param {number} priceToSubtract - The price to be subtracted from the car.
     */
    public lowerPrice(priceToSubtract: number) {
        this.price -= priceToSubtract;
    }
}

class CombustionCar extends Car {
    public co2Emissions: number;
    public fuelTankSizeLitters: number;

    /**
     * Creates a new instance of the CombustionCar class.
     * @param {string} model - The model of the car.
     * @param {string} manufacturer - The name of the car manufacturer.
     * @param {number} year - The year the car was manufactured.
     * @param {number} price - The price of the car.
     * @param {number} co2Emissions - The amount of CO2 emissions the car produces in grams per kilometer.
     * @param {number} fuelTankSizeLitters - The size of the fuel tank in litters.
     */
    constructor(model: string, manufacturer: string, year: number, price: number, co2Emissions: number, fuelTankSizeLitters: number) {
        super(model, manufacturer, year, price);

        this.co2Emissions = co2Emissions;
        this.fuelTankSizeLitters = fuelTankSizeLitters;
    }
}

class ElectricCar extends Car {
    public batterySizeKwh: number;

    /**
     * Creates a new instance of the ElectricCar class.
     * @param {string} model - The model of the car.
     * @param {string} manufacturer - The name of the car manufacturer.
     * @param {number} year - The year the car was made.
     * @param {number} price - The price of the car.
     * @param {number} batterySizeKwh - The size of the battery in kilowatt-hours.
     */
    constructor(model: string, manufacturer: string, year: number, price: number, batterySizeKwh: number) {
        super(model, manufacturer, year, price);

        this.batterySizeKwh = batterySizeKwh;
    }
}

/**
 * Creates two CombustionCar objects, raises the price of the first one in 2900 pounds and lowers the price of the second one in 1300 pounds.
 */
export function test() {
    console.log('\n\nInheritance:\n');

    var porsche = new CombustionCar('991 targa', 'Porsche', 1972, 43995, 250, 62);
    var audi = new ElectricCar('e-tron GT', 'Audi', 2022, 79900, 93.4);

    porsche.raisePrice(2900);
    console.log(porsche);

    audi.lowerPrice(1300);
    console.log(audi);
}