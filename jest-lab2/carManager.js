let carArray = [];

function addCar(make, model, year, color) {
  if (!make || !model || !year || !color) {
    return false;
  }

  const newCar = { make, model, year, color };
  carArray.push(newCar);
  return newCar;
}

function readCars() {
  return carArray;
}

module.exports = { addCar, readCars, carArray };