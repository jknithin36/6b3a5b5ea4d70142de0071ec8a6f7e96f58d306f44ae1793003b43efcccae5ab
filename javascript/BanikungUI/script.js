'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Nobi Notitha',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Naruto Uzumaki',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Nithin Kumar',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Shiva Prasad',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
/////////////////////////////////////////////////////////////////
const displayMovements = function (mov, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? mov.slice().sort((a, b) => a - b) : mov;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1}
          ${type}</div>
          <div class="movements__value">${mov}₹</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
////////////////////////////////////////////////////////////////////
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);

  labelBalance.textContent = `${acc.balance} ₹`;
};
////////////////////////////////////////////////////////////////////
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);
  labelSumIn.textContent = `${incomes} ₹`;

  const outcomes = acc.movements
    .filter(function (mov) {
      return mov < 0;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)} ₹`;

  const intrest = acc.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .map(function (mov) {
      return (mov * acc.interestRate) / 100;
    })
    .filter(function (int, i, arr) {
      console.log(arr);
      return int >= 1;
    })
    .reduce(function (acc, int) {
      return acc + int;
    }, 0);
  labelSumInterest.textContent = `${intrest} ₹`;
};

////////////////////////////////////////////////////////////////////////
const createUsernames = function (acc) {
  acc.forEach(function (acc) {
    acc.userName = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(function (word) {
        return word[0];
      })
      .join('');
  });
};
createUsernames(accounts);
console.log(createUsernames);
//////////////////////////////////////////////////////////////////////
const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};
/////////////////////////////////////////////////////////////////////////
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(function (acc) {
    return acc.userName === inputLoginUsername.value;
  });

  console.log(currentAccount);
  //optional chaining

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.visibility = 'visible';
    containerApp.style.opacity = 100;

    // DIAPLAY USER LOGS
    updateUI(currentAccount);

    // empty userLOGS FEILDS
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});

//////////////////////////////////////////////////////////////////////

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(function (acc) {
    return acc.userName === inputTransferTo.value;
  });

  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAccount?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    //updateUI
    updateUI(currentAccount);
  }
});
////////////////////////////////////////////////////////////////////

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loan = Number(inputLoanAmount.value);

  if (
    loan > 0 &&
    currentAccount.movements.some(function (mov) {
      return mov >= loan * 0.1;
    })
  ) {
    // add movement
    currentAccount.movements.push(loan);

    //update UI
    updateUI(currentAccount);
    // clear feilds
    inputLoanAmount.value = '';
  }
});

////////////////////////////////////////////////////////////////////
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.visibility = 'hidden';
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

////////////////////////////////////////////////////////////////////////
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

///////////////////////////////////////////////////////////////////////////////
// MAP METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
//NORMAL FUNCTION
// const movementsUSDO = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// ARROW FUNCTION
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);
// const forUSD = [];
// for (const mov of movements) {
//   forUSD.push(mov * eurToUsd);
// }
// console.log(forUSD);
// MAP PARAMETERS
const movementsDescription = movements.map(
  // Using Ternary Operator
  (mov, i) =>
    `Movement ${i + 1} : You ${mov > 0 ? 'deposited' : ' withdraw'}${Math.abs(
      mov
    )} `
  // if (mov > 0) {
  //   return `movement ${i + 1} : You deposited ${mov}`;
  // } else {
  //   return `movement ${i + 1} : you withdrew ${Math.abs(mov)}`;
  // }
);
console.log(movementsDescription);

// FILTER METHOD

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];

for (const mov of movements) {
  mov > 0 ? depositsFor.push(mov) : null;
}
console.log(depositsFor);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);

// REDUCE METHOD
// accumulator currentValue index array
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration Number ${i} : ${acc}`);
  return acc + cur;
}, 0);
// 0 is accumulator value
console.log(balance);

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);
// MAXIMUM VALUE
const maxValue = movements.reduce(function (acc, mov) {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
  mov[0];
});

console.log(maxValue);

//
const totalDeosits = movements
  .filter(mov => mov < 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalDeosits);

// FIND METHOD
// returns the frist element of array which satisfies the condition
const fristWithdrawal = movements.find(function (mov) {
  return mov < 0;
});
console.log(movements);
console.log(fristWithdrawal);
console.log(accounts);
const account = accounts.find(function (acc) {
  return acc.owner === 'Nobitha';
});

console.log(account);

// Some Method
console.log(movements);
// we use includes for quality
console.log(movements.includes(-130));
//some for condition
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(function (mov) {
  return mov > 0;
});
console.log(anyDeposits);
// EVERY Method
// if every element passes the test then it gives true
console.log(
  movements.every(function (mov) {
    return mov > 0;
  })
);
console.log(
  account4.movements.every(function (mov) {
    return mov > 0;
  })
);
// seperate call back
const deposit = mov => mov > 0;
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// flat Method
// removes the nested and flattend the array
//flat level goes only one level deep
//but if we give value then it will do
const arr = [[1, 2, 3], 4, 5, [7, 8, 9]];
console.log(arr.flat());
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));
// WITHOUT CHAINING
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce(function (acc, mov) {
  return acc + mov;
}, 0);
console.log(overallBalance);
//WITH CHAINING
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
console.log(overalBalance);
// flatMap method
// flat map only goes one level deeper
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
console.log(overalBalance2);

// sort Method
//it mutate the orginal array
// Strings
const owners = ['e', 'c', 'b', 'a', 'd'];
console.log(owners.sort());
//Numbers
console.log(movements);
//return <0, a,b
//return >0,b,a
console.log(
  movements.sort(function (a, b) {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    }
  })
);
// improving code
//ascending
movements.sort((a, b) => a - b);
console.log(movements);
//desending
movements.sort((a, b) => b - a);
console.log(movements);

//Creating and Filling Arrays
const arrO = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));
const x = new Array(7);
console.log(x);
x.fill(1, 3, 5);
x.fill(1);
console.log(x);
console.log(arrO);
arrO.fill(23, 4, 6);
console.log(arrO);

// Array.from
const c = Array.from({ length: 7 }, () => 1);
console.log(c);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('₹', ''))
  );
  console.log(movementsUI);
});
