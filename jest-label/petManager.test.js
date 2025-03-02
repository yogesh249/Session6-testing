const { addOne, petArray, resetState } = require('./petmanager');

beforeEach(() => {
    resetState();
}); 

test('addOne should add a pet to the petArray', () => {
    const pet = addOne("Buddy", "Dog", 3, "Brown", 20);
    
    expect(pet).toEqual({
        id: 1,
        name: 'Buddy',
        species: 'Dog',
        age: 3,
        color: 'Brown',
        weight: 20
    });

    expect(petArray).toHaveLength(1);
});

test('addOne should return false if any of the inputs are invalid', () => {
    expect(addOne("Buddy", "Dog", 3, "Brown")).toBe(false);
    expect(addOne()).toBe(false);
});

test("addOne() should return false for invalid data tpes", () => {
    expect(addOne(123, "Dog", 3, "Brown", 20)).toBe(false);
    // expect(addOne("Buddy", "Dog", 2, "Brown", 20)).toBe(false);
    expect(addOne("Buddy", "Dog", 3, "Brown", "Heavy")).toBe(false);
});


