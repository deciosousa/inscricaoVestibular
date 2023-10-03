/* =========== Open Tab =========  */
function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

/* =========== setting the current year =========  */

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById('year').innerText = currentYear;
 
/* ============= REGISTER ===========  */

/* Selecting form fields */
const form = document.querySelector("form");
const fieldName = document.querySelector("#name");
const fieldBirthDate = document.querySelector("#birthDate");
const fieldCPF = document.querySelector("#cpf");
const fieldRG = document.querySelector("#rg");
const fieldRgDateOfIssue = document.querySelector("#rgDateOfIssue");
const fieldIssuingAgency = document.querySelector("#issuingAgency");
const fieldEmail = document.querySelector("#email");
const fieldPhone = document.querySelector("#phoneNumber");
const fieldStreet = document.querySelector("#street");
const fieldDistrict = document.querySelector("#district");
const fieldNumbersHouse = document.querySelector("#numbersHouse");
const fieldAdressSupplement = document.querySelector("#adressSupplement");
const fieldCity = document.querySelector("#city");
const fieldState = document.querySelector("#state");
const fieldZipCode = document.querySelector("#zipCode");
const modality = document.querySelector('#modality');
const period = document.querySelector("#period");
const course = document.querySelector("#course");

/* Form event scheduling */
form.addEventListener("submit", function(event){
    event.preventDefault();

    /* creating a JavaScript object with the values captured from form fields */
    let userData = {
        name : fieldName.value,
        birthDate : fieldBirthDate.value,
        cpf : fieldCPF.value,
        rg : fieldRG.value,
        rgDateOfIssue : fieldRgDateOfIssue.value,
        issuingAgency : fieldIssuingAgency.value,
        email : fieldEmail.value,
        phoneNumber : fieldPhone.value,
        street : fieldStreet.value,
        district : fieldDistrict.value,
        numbersHouse : fieldNumbersHouse.value,
        adressSupplement : fieldAdressSupplement.value,
        city : fieldCity.value,
        state : fieldState.value,
        zipCode : fieldZipCode.value,
        modality: this.querySelector('input[name="modality"]:checked').value,
        period: this.querySelector('input[name="period"]:checked')?.value || '', // using optional chaining operator to allow empty period property

        /* The instruction below allows
         get the title(textContent) only
         of the option that was selected (selectOptions[0])
         within the course list (course)*/
        course: course.selectedOptions[0].textContent
    };

    /* =========== JSON COMUNICATION =========  */

    
    /* Ajax (communication technique)
    endpoint of userData */

    /* 1) Access/Connect to API */
    fetch('http://localhost:3000/userData', {
        
        // Set the data transmission method
        method: "POST", 
        
        // Convert JS object to JSON object
        body: JSON.stringify(userData),

        // Indicate the data format in the message header
        headers: { "Content-type" : "application/json" }
    })
    
    /* 2) API response turned into JSON */
    .then(response => response.json())
    
    /* 3) Displaying process end message */
    .then( () => alert("Dados cadastrados com sucesso!") );
});

/* =========== COURSE SELECTION =========  */

const selectCourses = document.querySelector("#course");

// 1) Access/Connect to API 
fetch("http://localhost:3000/courses")

// 2) capturing the API response in json format 
.then( response => response.json() )

// 3) capturing the response data
.then( courses => {

    // Defining an empty option
    selectCourses.innerHTML = "<option></option>";

    for( let course of courses ){
        let option = document.createElement("option");
        option.value = course.id;
        option.textContent = course.title;
        selectCourses.appendChild(option);
    }
});

/* =========== Show / Hide Period =========  */

function hidePeriod (element) {
    document.getElementById(element).style.display = 'none';
    const noRequired = document.getElementsByName("period");
    for(let i = 0; i < noRequired.length; i++) {
        noRequired[i].removeAttribute("required") 
    } 
}

function showPeriod (element) {
    document.getElementById(element).style.display = 'block';
}

/* =========== Show / Hide Period =========  */
function confirmation(){    
    return confirm('Confirme os dados e clique em "ok" para enviar.');
 }





