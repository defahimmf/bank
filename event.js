const loginBtn=document.getElementById('login');
loginBtn.addEventListener('click',function()
{ const loginarea=document.getElementById('login-area');
 loginarea.style.display="none";

 const transacAreea=document.getElementById('transaction-area');
 transacAreea.style.display="block";
}
)

const addDepo=document.getElementById('addDeposit');
addDepo.addEventListener('click',function()
{
 const depoAmount=document.getElementById("depoAmount").value;
 const depoNumber=parseFloat(depoAmount);

 const currentDepo=document.getElementById("crntDepo").innerText;
 const currentDEponumber=parseFloat(currentDepo);
 const totalDEpo=depoNumber+currentDEponumber;
 document.getElementById("crntDepo").innerText=totalDEpo;
 document.getElementById("depoAmount").value="";

 const currentBalance=document.getElementById("crntBalance").innerText;
 const currentBalancenumber=parseFloat(currentBalance);
 const totalBalance=currentBalancenumber+depoNumber;
 document.getElementById("crntBalance").innerText=totalBalance;




}

)




// const addWithdraw=document.getElementById('addWithdraw');
// addWithdraw.addEventListener('click',function()
// {

//  const withdrawAmount=document.getElementById("withdrawAmount").value;
//  const withdrawAmountNumber=parseFloat(withdrawAmount);

//  const currentwithdrawAmount=document.getElementById("crntwithdrawAmount").innerText;
//  const currentwithdrawAmountnumber=parseFloat(currentwithdrawAmount);

//  const totalWithdraw=withdrawAmountNumber+currentwithdrawAmountnumber;

//  document.getElementById("crntwithdrawAmount").innerText=totalWithdrawnumber;
//  //document.getElementById("withdrawAmount").value="";

// //  const currentBalance=document.getElementById("crntBalance").innerText;
// //  const currentBalancenumber=parseFloat(currentBalance);
// //  const totalBalance=currentBalancenumber+depoNumber;
// //  document.getElementById("crntBalance").innerText=totalBalance;

// }

// )

const btnwithdraw=document.getElementById('addWithdraw');

btnwithdraw.addEventListener("click",function()


{
  const withAmount=document.getElementById("wAmount").value;
  const withdrawAmountNumber=parseFloat(withAmount);
 
 const currentwithdrawAmount=document.getElementById("crntWamount").innerText;
 const currentwithdrawAmountnumber=parseFloat(currentwithdrawAmount);

 const totalWithdraw=withdrawAmountNumber+currentwithdrawAmountnumber;

 document.getElementById("crntWamount").innerText=totalWithdraw;
 document.getElementById("wAmount").value="";

 const currentBalance=document.getElementById("crntBalance").innerText;
 const currentBalancenumber=parseFloat(currentBalance);
 const totalBalance=currentBalancenumber-withdrawAmountNumber;
 document.getElementById("crntBalance").innerText=totalBalance;


}


)