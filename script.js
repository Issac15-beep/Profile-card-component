var monthlyIncome = 8000;
var rentExpense = 1200;
var utilitiesExpense = 300;
var salariesExpense = 2000;
var salaryTax = monthlyIncome * 0.05;
var miscellaneousExpense = 500;
var foodStuff = 1000;
var totalExpenses =
  rentExpense +
  utilitiesExpense +
  salariesExpense +
  miscellaneousExpense +
  foodStuff +
  salaryTax;
var remainingBudget = monthlyIncome - totalExpenses;
console.log(`Monthly Income: $${monthlyIncome}`);
console.log(`Total Expenses: $${totalExpenses}`);
console.log(`Remaining Budget: $${remainingBudget}`);
console.log(typeof monthlyIncome);
console.log(typeof totalExpenses);
console.log(typeof remainingBudget);
