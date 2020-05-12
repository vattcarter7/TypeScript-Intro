const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const carMakers2 = ['ford', 'toyota', 'chevy'];

const date = [new Date(), new Date()];

const carsByMake: string[][] = [];
const carsByMake2 = [['f150'], ['corolla'], ['camaro']];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// help with 'map' 'reduce' 'foreach'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
const importantDates2: (Date | string)[] = [new Date()];
const importantDates3: (Date | string)[] = [];
importantDates2.push('2040-09-09');
