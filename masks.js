/* =========== Field Name =========  */

fieldName.addEventListener('input', modifyName);

function modifyName(e) {
    e.target.value = e.target.value
    .replace(/[^a-zA-Záéíóúàèìòùãõâêîôûäëïöüçñ' ]/, '')
}

/* =========== Field BirthDate && rgDateOfIssue =========  */

fieldBirthDate.addEventListener('input', modifyDate);
fieldRgDateOfIssue.addEventListener('input', modifyDate);

function modifyDate(e) {
  e.target.value = e.target.value
  .replace(/\D/g, '')
  .replace(/(\d{2})(\d)/, '$1/$2')
  .replace(/(\d{2})(\d)/, '$1/$2')
}

/* =========== Field CPF =========  */

fieldCPF.addEventListener('input', modifyCPF);

function modifyCPF(e) {
    e.target.value = e.target.value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
}

/* =========== Field RG, RgDateOfIssue, IssuingAgency  =========  */

fieldRG.addEventListener('input', modifyRG);
fieldIssuingAgency.addEventListener('input', modifyDateOfIssue);

function modifyRG(e) {
  e.target.value = e.target.value
  .replace(/[^0-9x]/ig, '')
  .replace(/(\d{2})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1-$2')
}

function modifyDateOfIssue(e) {
  e.target.value = e.target.value
  .replace(/[^a-zA-Z]/, '')
}

/* =========== Field Email  =========  */

fieldEmail.addEventListener('input', validateEmail);

let re = /\S+@\S+\.\S+/;
function validateEmail(email) {
  return re.test(fieldEmail)
}

/* =========== Field phoneNumber  =========  */

fieldPhone.addEventListener('input', modifyPhone);

function modifyPhone(e) {
    e.target.value = e.target.value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d)(\d{4})$/,'$1-$2')
}


/* =========== Field Adress  =========  */

fieldZipCode.addEventListener('input', modifyZipCode);

function modifyZipCode(e) {
    e.target.value = e.target.value
    .replace(/\D/g, '')
}

function eraseZipCode() {
  //Clear values from address form
  document.getElementById('street').value=("");
  document.getElementById('district').value=("");
  document.getElementById('city').value=("");
  document.getElementById('state').value=("");
}

function myCallBack(content) {
  if (!("erro" in content)) {
    //Updates fields with values.
    document.getElementById('street').value=(content.logradouro);
    document.getElementById('district').value=(content.bairro);
    document.getElementById('city').value=(content.localidade);
    document.getElementById('state').value=(content.uf);
  } //end if.
  else {
    //Zip code not found.
    eraseZipCode();
    alert("CEP não encontrado.");
  }
}

function searchZipCode(value) {

var zipCode = value;

//Checks if the field has an informed value.
if (zipCode != "") {

      //Creates a javascript element.
      var script = document.createElement('script');

      //Synchronizes with the callback.
      script.src = 'https://viacep.com.br/ws/'+ zipCode + '/json/?callback=myCallBack';

      //Inserts script into the document and loads the content.
      document.body.appendChild(script);

} //end if.
else {
  //worthless zip code, clean form.
  eraseZipCode();
}
};

  /* =========== Field Street  =========  */
  fieldStreet.addEventListener('input', modifyStreet);

  function modifyStreet(e) {
    e.target.value = e.target.value
      .replace(/[^1-9a-zA-Záéíóúàèìòùãõâêîôûäëïöüçñ' ]/, '');
  }
  /* =========== Field NumbersHouse  =========  */
  fieldNumbersHouse.addEventListener('input', modifyNumbersHouse);

  function modifyNumbersHouse(e) {
    e.target.value = e.target.value
      .replace(/[^0-9]/ig, '');
  }






