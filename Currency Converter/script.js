const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const dropdown = document.querySelectorAll("#showdowns select");
const btn = document.querySelector("#bttn button");
const fromCurr = document.querySelector("#showdown1 select");
const toCurr = document.querySelector("#showdown2 select");
const msg = document.querySelector("#msg");

for (let select of dropdown) { 
  for (Currcode in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = Currcode;
    newoption.value = Currcode;
    if (select.name === "from" && Currcode === "USD") {
      newoption.selected = "selected";
    }
    else if (select.name === "to" && Currcode === "INR") {
      newoption.selected = "selected";
    }
      
    select.append(newoption);
  }
  select.addEventListener("change", (evt) => {
    updateflag(evt.target);
  })
}

const updateflag = (element) => {
  let Currcode = element.value;
  let countrycode = countryList[Currcode];
  let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`
  let img = element.parentElement.parentElement.querySelector("img");
  img.src = newsrc;
}

btn.addEventListener("click",async (evt) => {
  evt.preventDefault();
  updateexchange();
});


const updateexchange = async() => {
  let amount = document.querySelector("input");
  let amtvalue = amount.value;
  if (amtvalue === "" || amtvalue < 1) {
    amtvalue = "1";
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];
  let finalamt = amount.value * rate;
  msg.innerText = `${amtvalue} ${fromCurr.value} = ${finalamt} ${toCurr.value}`
}


window.onload = () => { 
  updateexchange();
}