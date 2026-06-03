function getUnemployedAdults (citizens){
  return citizens.filter((citizen) => citizen.age >= 18 && citizen.hasJob === false);
}

console.log(getUnemployedAdults([
  {id: 1, name: "Sara", age: 18, hasJob: false},
  {id: 2, name: "Ben", age: 19, hasJob: false},
  {id: 3, name: "Tom", age: 19, hasJob: true},
  {id: 4, name: "Jane", age: 17, hasJob: false}
]));

function getAverageAge(citizens){
  const initialValue = 0;
  const sumAges = citizens.reduce((sum, currentValue) => sum + currentValue.age, initialValue);
  const averageAge = sumAges / citizens.length;
  return averageAge;
}

console.log(getAverageAge([
  {id: 1, name: "Sara", age: 18, hasJob: false},
  {id: 2, name: "Ben", age: 19, hasJob: false},
  {id: 3, name: "Tom", age: 19, hasJob: true},
  {id: 4, name: "Jane", age: 17, hasJob: false}
]));

function sortByAge (citizens){
  return citizens.toSorted((a, b) => a.age - b.age);
}

console.log(sortByAge([
  {id: 1, name: "Sara", age: 18, hasJob: false},
  {id: 2, name: "Ben", age: 19, hasJob: false},
  {id: 3, name: "Tom", age: 19, hasJob: true},
  {id: 4, name: "Jane", age: 17, hasJob: false}
]));


const jsonData = `[
  {"id": 1, "name": "Sara", "age": 18, "hasJob": false},
  {"id": 2, "name": "Ben", "age": 19, "hasJob": false},
  {"id": 3, "name": "Tom", "age": 25, "hasJob": true},
  {"id": 4, "name": "Jane", "age": 17, "hasJob": false}
]`;

const employeesArray= JSON.parse(jsonData);

console.log(employeesArray);

const onlyUnemployed = employeesArray.filter((employee) => employee.age >= 18 && employee.hasJob === false);

console.log(onlyUnemployed);

const convertedData = JSON.stringify(onlyUnemployed);

console.log(convertedData);


const apiResponse = `[
  {"id": 1, "name": "Sara", "income": 35000, "region": "Oslo"},
  {"id": 2, "name": "Ben", "income": 28000, "region": "Bergen"},
  {"id": 3, "name": "Tom", "income": 52000, "region": "Oslo"},
  {"id": 4, "name": "Jane", "income": 19000, "region": "Oslo"},
  {"id": 5, "name": "Erik", "income": 41000, "region": "Bergen"}
]`;


class NAVSystem {

  constructor(){
    this.applicants = [];
  }

  loadData(json){
    this.applicants = JSON.parse(json);
  }

  getOsloApplicants(){
    return this.applicants.filter((applicant) => applicant.region === "Oslo");
  }

  getAverageIncome(){
    const initialValue = 0;
    const sumIncome = this.applicants.reduce((sum, currentValue) => sum + currentValue.income, initialValue);
    const averageIncome = sumIncome / this.applicants.length;
    return averageIncome;
  }

  getLowIncomeApplicants(threshold){
    return this.applicants.filter((applicant) => applicant.income < threshold);
  }
}

const system = new NAVSystem();
system.loadData(apiResponse);

const getOsloApplicants = system.getOsloApplicants();

const getAverageIncome = system.getAverageIncome();

const getLowIncomeApplicants = system.getLowIncomeApplicants(30000);

console.log(system);
console.log(getOsloApplicants);
console.log(getAverageIncome);
console.log(getLowIncomeApplicants);



function regionExists (regions, region){
  return regions.includes(region);
}

const regions = ["Oslo", "Bergen", "Oslo", "Tromsø", "Bergen"];

console.log(regionExists(regions, "Tromsø"));
console.log(regionExists(regions, "Stavanger"));