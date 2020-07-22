/*log in area*/

const loginBtn = document.getElementById("loginClick");
loginBtn.addEventListener("click", function(){
    const logInArea = document.getElementById("allLogInArea");
    logInArea.style.display ="none";
    const secondPart=document.getElementById("transitionArea");
    secondPart.style.display="block";
})


/*deposite button*/

const depositeBtn = document.getElementById("depositeEnter");
depositeBtn.addEventListener("click",function(){
 const depositeMoney = document.getElementById("depositeMoneyString").value;
 const depositeMoneyNumber=parseFloat(depositeMoney);
 const depositeAmount = document.getElementById("totaldepositeInString").innerText;
 const beforDeposite = parseFloat(depositeAmount);
 const totalDeposite = depositeMoneyNumber + beforDeposite ;
 document.getElementById("totaldepositeInString").innerText = totalDeposite;
 document.getElementById("depositeMoneyString").value="";
 const balanceInString=document.getElementById("totalBalance").innerText;
 const balanceInNumber=parseFloat(balanceInString);
 const total= balanceInNumber+depositeMoneyNumber;
 document.getElementById("totalBalance").innerText= total;
})

// /*withdraw button*/


const withBtn = document.getElementById("withdrawEnter");
withBtn.addEventListener("click",function(){
const withMoney = document.getElementById("witheMoneyString").value;
const withMoneyNumber=parseFloat(withMoney);
const withAmount = document.getElementById("totalwithInString").innerText;
const beforWith = parseFloat(withAmount);
const totalWith = withMoneyNumber + beforWith ;
document.getElementById("totalwithInString").innerText = totalWith;
document.getElementById("witheMoneyString").value="";
 const balanceInString=document.getElementById("totalBalance").innerText;
 const balanceInNumber=parseFloat(balanceInString);
 const total= balanceInNumber-withMoneyNumber;
 document.getElementById("totalBalance").innerText= total;
})
document.ge