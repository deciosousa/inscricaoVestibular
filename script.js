// setting the current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById('year').innerText = currentYear;
 

/* Selecting form fields */
const form = document.querySelector("form");
const fieldName = document.querySelector("#name");
const fieldBirthDate = document.querySelector("#birthDate");
const fieldRG = document.querySelector("#rg");
const fieldRgDateOfIssue = document.querySelector("#rgDateOfIssue");
const fieldIssuingAgency = document.querySelector("#issuingAgency");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phoneNumber");
const fieldStreet = document.querySelector("#street");
const fieldNumbersHouse = document.querySelector("#numbersHouse");
const fieldCity = document.querySelector("#city");
const fieldState = document.querySelector("#state");
const fieldCountry = document.querySelector("#country");
const fieldZipCode = document.querySelector("#zipCode");

/* Form event scheduling */
form.addEventListener("submit", function(event){
    event.preventDefault();

    /* creating a JavaScript object with the values captured from form fields */
    let userData = {
        name : fieldName.value,
        birthDate : fieldBirthDate.value,
        rg : fieldRG.value,
        rgDateOfIssue : fieldRgDateOfIssue.value,
        issuingAgency : fieldIssuingAgency.value,
        email : email.value,
        phoneNumber : phoneNumber.value,
        street : fieldStreet.value,
        numbersHouse : fieldNumbersHouse.value,
        city : fieldCity.value,
        state : fieldState.value,
        country : fieldCountry.value,
        zipCode : fieldZipCode.value
    };
    

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