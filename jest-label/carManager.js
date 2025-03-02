let carArray = [];

function resetState(){
    carArray.length = 0;
}

function addCar(make,model,year,color){
    if (typeof make !== 'string' || typeof model !== 'string' || typeof year !== 'number' || typeof color !== 'string'){
        return false;
    }
    const car = {
        make,
        model,
        year,
        color
    };
    carArray.push(car);
    return car;
}

module.exports = { addCar, carArray, resetState };