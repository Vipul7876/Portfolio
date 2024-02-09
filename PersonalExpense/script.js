const btn = document.getElementById('btn');
let count = 0;
const inp = document.getElementById('inp');
let totalexpense = 0;

function addexpense(){
  const input = document.querySelector('#inp');
  var amount = input.value;
  const expense = parseInt(amount,10);
  totalexpense = totalexpense+expense;
  console.log(`${totalexpense}`);
}
btn.addEventListener('click',addexpense,()=>{
  count+=1;
  // console.log("hello"+count+inp.value);
  console.log(`Hello ${count}`);
  
})


