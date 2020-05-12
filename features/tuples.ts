// indicate these different thinngs are not just array but with types
// BUT tuples are not frequently used, but use object with key=value instead

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// This is bad with tuple
const carSpecs: [number, number] = [400, 3354];

// But this is good with object
const carStats = {
  horsepower: 400,
  weight: 3354
};
