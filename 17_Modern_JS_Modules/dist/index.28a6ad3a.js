"use strict";const budget=Object.freeze([{value:250,description:"Sold old TV 📺",user:"jonas"},{value:-45,description:"Groceries 🥑",user:"jonas"},{value:3500,description:"Monthly salary 👩‍💻",user:"jonas"},{value:300,description:"Freelancing 👩‍💻",user:"jonas"},{value:-1100,description:"New iPhone 📱",user:"jonas"},{value:-20,description:"Candy 🍭",user:"matilda"},{value:-125,description:"Toys 🚂",user:"matilda"},{value:-1800,description:"New Laptop 💻",user:"jonas"}]),spendingLimits=Object.freeze({jonas:1500,matilda:100}),getLimit=(e,s)=>e?.[s]??0,addExpense=function(e,s,i,n,t="jonas"){const a=t.toLowerCase();return i<=getLimit(s,a)?[...e,{value:-i,description:n,user:a}]:e},newBudget1=addExpense(budget,spendingLimits,10,"Pizza 🍕"),newBudget2=addExpense(newBudget1,spendingLimits,100,"Going to movies 🍿","Matilda"),newBudget3=addExpense(newBudget2,spendingLimits,200,"Stuff","Jay"),checkExpensesArrow=(e,s)=>e.map((e=>e.value<-getLimit(s,e.user)?{...e,flag:"limit"}:e)),finalBudget=checkExpensesArrow(newBudget3,spendingLimits);console.log(finalBudget);const getBigExpenses=function(e,s){return e.filter((e=>e.value<=-s)).map((e=>e.description.slice(-2))).join(" / ")},bigExpenses=getBigExpenses(finalBudget,500);console.log(bigExpenses);
//# sourceMappingURL=index.28a6ad3a.js.map
