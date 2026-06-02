// interface Citizen {
//   id: number;
//   name: string;
//   age: number;
//   hasJob: boolean;
// }

// function getUnemployedAdults (citizens: Citizen[]): Citizen[] {
//   return citizens.filter((citizen) => citizen.age >= 18 && citizen.hasJob === false);
// }

// console.log(getUnemployedAdults([
//   {id: 1, name: "Sara", age: 18, hasJob: false},
//   {id: 2, name: "Ben", age: 19, hasJob: false},
//   {id: 3, name: "Tom", age: 19, hasJob: true},
//   {id: 4, name: "Jane", age: 17, hasJob: false}
// ]));

// function getAverageAge(citizens: Citizen[]): number {
//   const initialValue = 0;
//   const sumAges = citizens.reduce((sum, currentValue) => sum + currentValue.age, initialValue);
//   const averageAge = sumAges / citizens.length;
//   return averageAge;
// }

// console.log(getAverageAge([
//   {id: 1, name: "Sara", age: 18, hasJob: false},
//   {id: 2, name: "Ben", age: 19, hasJob: false},
//   {id: 3, name: "Tom", age: 19, hasJob: true},
//   {id: 4, name: "Jane", age: 17, hasJob: false}
// ]));

// function sortByAge (citizens: Citizen[]): Citizen[] {
//   return citizens.toSorted((a, b) => a.age - b.age);
// }

// console.log(sortByAge([
//   {id: 1, name: "Sara", age: 18, hasJob: false},
//   {id: 2, name: "Ben", age: 19, hasJob: false},
//   {id: 3, name: "Tom", age: 19, hasJob: true},
//   {id: 4, name: "Jane", age: 17, hasJob: false}
// ]));

interface Employee {
  id: number;
  name: string;
  age: number;
  hasJob: boolean;
}

const jsonData = `[
  {"id": 1, "name": "Sara", "age": 18, "hasJob": false},
  {"id": 2, "name": "Ben", "age": 19, "hasJob": false},
  {"id": 3, "name": "Tom", "age": 25, "hasJob": true},
  {"id": 4, "name": "Jane", "age": 17, "hasJob": false}
]`;

const employeesArray: Employee[] = JSON.parse(jsonData);

console.log(employeesArray);

const onlyUnemployed = employeesArray.filter((employee) => employee.age >= 18 && employee.hasJob === false);

console.log(onlyUnemployed);

const convertedData = JSON.stringify(onlyUnemployed);

console.log(convertedData);