const {addCar, carArray, resetState}    = require('./carManager');

beforeEach(() => {
    resetState();
}); 

test('addCar should add a car to the carArray', () => {
    const car = addCar("Toyota", "Corolla", 2020, "Red");
    
    expect(car).toEqual({
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
        color: 'Blue'
    });

    expect(carArray).toHaveLength(1);
});

test('addCar should return false if any parameter is missing', () => {
    expect(addCar("Toyota", "Corolla", 2020)).toBe(false);
    expect(addCar()).toBe(false);
});

test('addCar should return false for any false data types', () => {
    expect(addCar(123, "Corolla", 2020, "Blue")).toBe(false);
    expect(addCar("Toyota", "Corolla", "2020", "Blue")).toBe(false);            
    // expect(addCar("Toyota", "Corolla", 2020, "Blue")).toBe(false);
});
