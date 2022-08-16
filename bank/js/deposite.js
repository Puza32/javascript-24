
document.getElementById('btn-deposite').addEventListener('click', function(){
   const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    //console.log(depositeAmount);

    //step3
    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    const currentDepositTotal = previousDepositeTotal + newDepositeAmount;
    depositeTotalElement.innerText = newDepositeAmount;
    depositeTotalElement.innerText = currentDepositTotal;
   
   //step-5 get balance total
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   //step-6: Calculate current total balance
   const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
   balanceTotalElement.innerText = currentBalanceTotal;
    //step - 7: Clear the deposit field

    depositeField.value = '';
})