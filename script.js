// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
  
//           form.classList.add('was-validated')
//         }, false)
//       })
//   })()
let globlesubmit = false
function NoOfForms(isSubmit) {
  if(isSubmit){
    globlesubmit=true
  }  
    let firstName = document.getElementById('First-name').value
    let lastName = document.getElementById('Last-name').value
    let email = document.getElementById('Email').value
    let city = document.getElementById('City').value
    let state = document.getElementById('State').value
    let zipcode = document.getElementById('ZipCode').value
    let TandC = document.getElementById('invalidCheck').checked
    console.log(firstName, lastName, email, city, state, zipcode, TandC)
    if(globlesubmit){

    if(firstName.length >=2){
        document.getElementById('First-name-valid').style.display ='block'
        document.getElementById('First-name-invalid').style.display = 'none'
    }else{
        document.getElementById('First-name-invalid').style.display = 'block'
        document.getElementById('First-name-valid').style.display = 'none'
    }
    if(lastName.length >=2 ){
      document.getElementById('Last-name-valid').style.display ='block'
      document.getElementById('Last-name-invalid').style.display = 'none'
  }else{
      document.getElementById('Last-name-invalid').style.display = 'block'
      document.getElementById('Last-name-valid').style.display = 'none'
  }
    if(
      email.includes("@") &&
      email.includes(".") &&
      email.indexOf("@") > 0 &&
      email.substr(email.lastIndexOf('.') +1) .length>=2){ 
      document.getElementById('Email-valid').style.display = 'block'
      document.getElementById('Email-invalid').style.display = 'none'
    }else{
      document.getElementById('Email-invalid').style.display = 'block'
       document.getElementById('Email-valid').style.display = 'none'
    }
    if(city.length >=2){
      document.getElementById('City-valid').style.display ='block'
      document.getElementById('City-invalid').style.display = 'none'
    }else{
      document.getElementById('City-invalid').style.display = 'block'
      document.getElementById('City-valid').style.display = 'none'
    }


  if(state!='None'){
    document.getElementById('state-valid').style.display = 'block'
      document.getElementById('state-invalid').style.display = 'none'
  }else{
    document.getElementById('state-invalid').style.display = 'block'
      document.getElementById('state-valid').style.display = 'none'
  }

  let numberzip = parseInt(zipcode)
  if(!isNaN(numberzip) &&
      numberzip > 100000 &&
      numberzip <= 999999 
  ){
    document.getElementById('Zipcode-valid').style.display ='block'
    document.getElementById('Zipcode-invalid').style.display = 'none'
}else{
    document.getElementById('Zipcode-invalid').style.display = 'block'
    document.getElementById('Zipcode-valid').style.display = 'none'
}
if(TandC){
  document.getElementById('tandc-valid').style.display = 'block'
    document.getElementById('tandc-invalid').style.display = 'none'
}else{
  document.getElementById('tandc-invalid').style.display = 'block'
    document.getElementById('tandc-valid').style.display = 'none'
}
}
    
}