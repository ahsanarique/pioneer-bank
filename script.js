// Login Elements:
const loginButton = document.getElementById("login");
const loginArea = document.getElementById("login-area");
const transactionArea = document.getElementById("transaction-area");

// deposit Elements:
const depositButton = document.getElementById("deposit");
const depositAmount = document.getElementById("deposit-amount");
const currentDeposit = document.getElementById("current-deposit");

// Withdraw Elements:
const withdrawButton = document.getElementById("withdraw");
const withdrawAmount = document.getElementById("withdraw-amount");
const currentWithdraw = document.getElementById("current-withdraw");

// Balance Elements:
const currentBalance = document.getElementById("current-balance");

function updateDeposit() {
  // Deposit Amount:
  const depositNumber = parseFloat(depositAmount.value);
  const currentDepositNumber = parseFloat(currentDeposit.innerText);
  const totalDeposit = depositNumber + currentDepositNumber;

  // Current Balance:
  const currentBalanceNumber = parseFloat(currentBalance.innerText);

  //Update Balance:
  currentDeposit.innerText = totalDeposit;
  depositAmount.value = "";

  currentBalance.innerText = currentBalanceNumber + totalDeposit;
}

function updateWithdraw() {
  // Withdrawal Amount:
  const withdrawNumber = parseFloat(withdrawAmount.value);
  const currentWithdrawNumber = parseFloat(currentWithdraw.innerText);
  const totalWithdraw = withdrawNumber + currentWithdrawNumber;

  // Current Balance:
  const currentBalanceNumber = parseFloat(currentBalance.innerText);

  // Update Balance
  currentWithdraw.innerText = totalWithdraw;
  withdrawAmount.value = "";

  currentBalance.innerText = currentBalanceNumber - totalWithdraw;
}

// Login button event handler:
loginButton.addEventListener("click", () => {
  loginArea.style.display = "none";
  transactionArea.style.display = "block";
});

// deposit button event handler:
depositButton.addEventListener("click", () => {
  updateDeposit();
});

// Withdraw button event handler:
withdrawButton.addEventListener("click", () => {
  updateWithdraw();
});
