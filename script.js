//Initialize budget values
let totalBudget = 2500;
let remainingBudget = totalBudget - expense;

// Select elements
const totalBudgetElement = document.getElementById('total-budget');
const remainingBudgetElement = document.getElementById('remaining-budget');
const progressBar = document.getElementById('progress-bar');
const expenseInput = document.getElementById('expense-input');
const addExpenseButton = document.getElementById('add-expense-btn');

//Update the visual representation of the remaining budget
function updateBudgetDisplay() {
  remainingBudgetElement.textContent = remainingBudget;
  progressBar.value = remainingBudget;
}

//Handle expense submission
addExpenseButton.addEventListener('click', () => {
  const expense = parseFloat(expenseInput.value);

  if(!isNAN(expense) && expense > 0 && expense <= remainingBudget) {
    remainingBudget -= expense;
    updateBudgetDisplay();
    expenseInput.value = ''; //reset input field
  }
   else {
     alert('Please enter a valid expense amount or ensure it doesn\'t exceed remaining budget.');
   }
});

// Initial display setup
updateBudgetDisplay();

                                                   
