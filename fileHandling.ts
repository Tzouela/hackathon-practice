import * as fs from 'fs';

interface Employee {
  id: number;
  name: string;
  age: number;
  hasJob: boolean;
}

const fileContent: Employee[] = JSON.parse(fs.readFileSync('citizens.json', 'utf-8'));
console.log(fileContent);

const getUnemployedAdults: Employee[] = fileContent.filter((x) => x.age >= 18 && x.hasJob === false);

console.log(getUnemployedAdults);

const writeFile = fs.writeFileSync('unemployed.json', JSON.stringify(getUnemployedAdults, null, 2));

console.log(writeFile);