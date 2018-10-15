const form = document.querySelector('#loan-form');
const amount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const monthlyPayment=document.querySelector('#monthly-payment');
const totalPayment=document.querySelector('#total-payment');
const totalInterest=document.querySelector('#total-interest');
const card= document.querySelector('.card');
const loader=document.querySelector('#loading');
const results= document.querySelector('#results');

form.addEventListener('submit',(e)=>{

  if(amount.value>0 && interest.value>0 && years.value>0){
    loader.style.display='block';
    setTimeout(showResults, 2000);

  }else{
    showResults();
  }
 
 
  e.preventDefault();

})

function showResults(){
  
  let p = parseFloat(amount.value);
  let r=parseFloat(interest.value)/ 100 / 12;
  let t= parseFloat(years.value)*12;

  let x=Math.pow(1+r, t);
  let emi=(p*x*r)/(x-1);
  if(isFinite(emi)){
    totalPayment.value=(emi*t).toFixed(2);
    totalInterest.value=((emi*t)-p).toFixed(2);
    monthlyPayment.value=emi.toFixed(2);
    loader.style.display='none';
    results.style.display='block';
  }else{
    showError("Please check the Input");
  }
  
  
}

function showError(error){
  results.style.display='none';
  const errorDiv= document.createElement('div');
  errorDiv.className='alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv,form);
  setTimeout(clearErrorDiv,3000);


}

function clearErrorDiv(){
  document.querySelector('.alert').remove();
}