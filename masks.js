/* =========== Fields Name && City =========  */

fieldName.addEventListener('input', modifyName);
fieldCity.addEventListener('input', modifyName);

function modifyName(e) {
    e.target.value = e.target.value
    .replace(/[^a-zA-Z\u00C0-\u017F'´^ ]/, '')
    fieldName.value=fieldName.value.toUpperCase()
  }

/* =========== Field BirthDate =========  */

fieldBirthDate.addEventListener('input', modifyDate);

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

/* =========== Field RG   =========  */

fieldRG.addEventListener('input', modifyRG);

function modifyRG(e) {
  e.target.value = e.target.value
  .replace(/[^0-9x]/ig, '')
  .replace(/(\d{2})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1-$2')
}

/* =========== Field rgDateOfIssue =========  */

fieldRgDateOfIssue.addEventListener('input', modifyDate);

/* =========== Field IssuingAgency  =========  */

fieldIssuingAgency.addEventListener('input', modifyDateOfIssue);

function modifyDateOfIssue(e) {
  e.target.value = e.target.value
  .replace(/[^a-zA-Z]/, '')
  fieldIssuingAgency.value=fieldIssuingAgency.value.toUpperCase() 
}

/* =========== Field Email  =========  */

fieldEmail.addEventListener('input', validateEmail);

function validateEmail(e) {
  e.target.value = e.target.value
  .replace(/[^0-9a-zA-Z@._ -]/, '');
  fieldEmail.value=fieldEmail.value.toLowerCase()
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

  /* =========== Fields noSpecialCharacters =========  */
  fieldStreet.addEventListener('input', noSpecialCharacters);
  fieldDistrict.addEventListener('input', noSpecialCharacters);
  fieldAdressSupplement.addEventListener('input', noSpecialCharacters);
  fieldCity.addEventListener('input', noSpecialCharacters);

  function noSpecialCharacters(e) {
    e.target.value = e.target.value
      .replace(/[^0-9a-zA-Z\u00C0-\u017F'´^ ]/, '');
      fieldStreet.value=fieldStreet.value.toUpperCase()
      fieldDistrict.value=fieldDistrict.value.toUpperCase()
      fieldAdressSupplement.value=fieldAdressSupplement.value.toUpperCase()       
      fieldCity.value=fieldCity.value.toUpperCase()       
  }
  /* =========== Field NumbersHouse  =========  */
  fieldNumbersHouse.addEventListener('input', modifyNumbersHouse);

  function modifyNumbersHouse(e) {
    e.target.value = e.target.value
      .replace(/[^0-9]/ig, '');
  }

/* =========== Field State  =========  */

fieldState.addEventListener('input', modifyState)
function modifyState(e) {
    e.target.value = e.target.value
    .replace(/[^a-zA-Z]/, '')
    fieldState.value=fieldState.value.toUpperCase() 
}



