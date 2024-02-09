let A = document.getElementById('stop');
let B = document.getElementById('start');
let C = document.getElementById('inbox');



A.addEventListener('click',(e)=>{
  C.style.animationPlayState = 'paused';
})

B.addEventListener('click',(e)=>{
  C.style.animationPlayState = 'running';
})