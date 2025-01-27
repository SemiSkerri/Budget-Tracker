//Initialize budget values
let totalBudget = 2500;
let remainingBudget = totalBudget;

// Select elements
const totalBudgetElement = document.getElementById('total-budget');
const remainingBudgetElement = document.getElementById('remaining-budget');
const progressBar = document.getElementById('progress-bar');
const expenseInput = document.getElementById('expense-input');
const addExpenseButton = document.getElementById('add-expense-btn');

//Update the visual representation of the remaining budget
function updateBudgetDisplay() {
  console.log('Remaining Budget: ', remainingBudget);
  remainingBudgetElement.textContent = remainingBudget.toFixed(2);
  progressBar.value = remainingBudget;
}

//Handle expense submission
addExpenseButton.addEventListener('click', () => {
  console.log('Button clicked');
  
  const expenseValue = expenseInput.value;
  const expense = parseFloat(expenseValue);
  console.log('Entered Expense: ', expense);

  if(!isNAN(expense) && expense > 0 && expense <= remainingBudget) {
    remainingBudget - expense;
    console.log('New Remaining Budget: ', remainingBudget);
    updateBudgetDisplay();
    expenseInput.value = ''; //reset input field
  }
   else {
     console.log('Invalid expense');
     alert('Please enter a valid expense amount or ensure it doesn\'t exceed remaining budget.');
   }
});

// Initial display setup
updateBudgetDisplay();

                                                   
