const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()


const height =  parseInt(document.querySelector('#height').value)
const weight =  parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if (height === "" || height < 0 || isNaN(height)) {
  results.innerHTML = "please give valid height"
  
}
if (weight === "" || weight < 0 || isNaN(weight)) {
  results.innerHTML = "please give valid weight"
  
} else {
 const bmi =  (weight / ((height * height) / 10000)).toFixed(2)
 results.innerHTML = `<span>${bmi}</span>`


if(bmi < 18.6 || bmi < 0){
  results.innerHTML = `${bmi}, which is Under Weight`;
}
else if(bmi === 18.6 || bmi > 18.6 || bmi < 24.9 || bmi === 24.9){
  results.innerHTML = `${bmi}, which is Normal Weight`;
}
if(bmi > 24.9) {
results.innerHTML = `${bmi}, which is Over Weight`;
}}
})