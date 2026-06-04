import * as fs from 'fs';


interface Applicant {
  id: number;
  name: string;
  age: number;
  income: number;
  status: string;
  region: string;
}

class BenefitSystem {
  applicant: Applicant[];

  constructor() {
    this.applicant = [];
  }

  loadData(): void {
    this.applicant = JSON.parse(fs.readFileSync('applications.json', 'utf-8'));
  }

  // getPendingApplications(): Applicant[] {
  //   return this.applicant.filter((applicant) => applicant.status === 'pending');
  // }

  getPendingApplications(): Applicant[] {
    let pending: Applicant[] = [];
    for (let i = 0; i < this.applicant.length; i++) {
      if (this.applicant[i].status === 'pending') {
        pending.push(this.applicant[i]);
      }
    }
    return pending;
  }

  getLowIncomeApplicants(threshold: number): Applicant[] {
    return this.applicant.filter((applicant) => applicant.status === 'pending' && applicant.income < threshold);
  }

  getAverageIncome(): number {
    const initialValue = 0;
    const sumIncome = this.applicant.reduce((accumulator, currentValue) => accumulator + currentValue.income, initialValue);
    const averageIncome = sumIncome / this.applicant.length;
    return averageIncome;
  }

  approveAll(): void {
 this.applicant.forEach((applicant) => {
  if (applicant.status === 'pending')
    applicant.status = 'approved';
})
  }

  exportApproved(): void {
  const allApprovedApplicants = this.applicant.filter((applicant) => applicant.status === 'approved');
  fs.writeFileSync('approved.json', JSON.stringify(allApprovedApplicants, null, 2));
  }

}

const benefitSystem = new BenefitSystem();
benefitSystem.loadData();
benefitSystem.approveAll();
benefitSystem.exportApproved();

console.log(benefitSystem.getPendingApplications());
console.log(benefitSystem.getLowIncomeApplicants(30000));
console.log(benefitSystem.getAverageIncome());
console.log(benefitSystem.applicant);


