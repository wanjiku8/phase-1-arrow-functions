const foo = function() {
    return 'bar';
  }
  foo();
  
  const add = (parameter1, parameter2) => parameter1 + parameter2;
  console.log(add(2, 3));
  
  const twoAdder = x => x + 2;
  console.log(twoAdder(3));
  
  const sum = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
  }
  console.log(sum(1, 2));
  
  const nums = [1, 2, 3];
  const squares = nums.map(x => x ** 2);
  console.log(squares);
  
  const finishedItems = overdueTodoItems.map(item => item.className = "complete");
  header.innerText = `You finished ${finishedItems.length} items!`;
  
  lapsedUserAccounts.map(u => sendBillTo(u.address));
  