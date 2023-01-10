// Global Variables
const countriesList = document.getElementById("countries");
let countries; // will contain "fetched" data

// Event Listeners
// countriesList.addEventListener("change", event => displayCountryInfo(event.target.value));

countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
  displayCountryInfo(event.target.value);
}

// fetch("https://restcountries.eu/rest/v3.1/all")
// .then(function(res){
//   // console.log(res);
//   return res.json();
// })
// .then(function(data){
//   // console.log(data);
//   initialize(data);
// })
// .catch(function(err){
//   console.log("Error:", err);
// });

fetch("https://restcountries.eu/rest/v2/name/china")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriesData) {
  countries = countriesData;
  let options = "";
  // for(let i=0; i<countries.length; i++) {
  //   options += `<option value="${countries[i].alpha3Code}">${countries[i].name}</option>`;
  //   // options += `<option value="${countries[i].alpha3Code}">${countries[i].name} (+${countries[i].callingCodes[0]})</option>`;
  // }
  countries.forEach(country => options+=`<option value="${country.alpha3Code}">${country.name}</option>`);
  // document.getElementById("countries").innerHTML = options;
  // document.querySelector("#countries").innerHTML = options;
  countriesList.innerHTML = options;
  // console.log(countriesList);
  // console.log(countriesList.value);
  // console.log(countriesList.length);
  // console.log(countriesList.selectedIndex);
  // console.log(countriesList[10]);
  // console.log(countriesList[10].value);
  // console.log(countriesList[10].text);
  countriesList.selectedIndex = Math.floor(Math.random()*countriesList.length);
  displayCountryInfo(countriesList[countriesList.selectedIndex].value);
}