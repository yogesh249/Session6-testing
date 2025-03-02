const petArray = []
let nextId = 1;

function resetState(){
    nextID = 1;
    petArray.length = 0;
}

function addOne(name, species, age, color, weight){
    if(typeof name !== 'string' || typeof species !== 'string' || typeof age !== 'number' || typeof color !== 'string' || typeof weight !== 'number'){
        return false;
    }
    const newPet = {
        id: nextId,
        name: name,
        species: species,
        age: age,
        color: color,
        weight: weight
    };

    petArray.push(newPet);
    return newPet;
}

module.exports = { addOne, petArray, resetState };


