/* =========== Open Tab =========  */
// creating a function to switch the view of the DOM content, according to the button clicked. 
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabContent, tabLinks;
    //selecting the element with the tabContent class and storing it in the variable of the same name.
    tabContent = document.getElementsByClassName("tabContent");
    //iterating over tabContent items
    for (i = 0; i < tabContent.length; i++) {
      //setting display "none" for the specified element to hide it.
        tabContent[i].style.display = "none";
    }
    /*selecting the element with the tabLinks class and storing it in the variable of the same name */
    tabLinks = document.getElementsByClassName("tabLinks");
    //iterating over tabLink items
    for (i = 0; i < tabLinks.length; i++) {
    //removing the "active" class from the specified element.
      tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }
    //Showing the current tab
    document.getElementById(tabName).style.display = "block";
    //adding the "active" class to the button that opened the tab
    evt.currentTarget.className += " active";
  }

/* =========== setting the current year =========  */

//creating a new instance of the Date object
const currentDate = new Date();
//using the getFullYear() method to return the year specified in the Date constructor.
const currentYear = currentDate.getFullYear();
//manipulating the DOM to show the current year
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

// controlling the default behavior of the form
form.addEventListener("submit", function(event){
    event.preventDefault();

    // creating a JavaScript object with the values captured from form fields 
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

    // 1) Access/Connect to API
    fetch('http://localhost:3000/userData', {
        
        // Set the data transmission method
        method: "POST", 
        
        // Convert JS object to JSON object
        body: JSON.stringify(userData),

        // Indicate the data format in the message header
        headers: { "Content-type" : "application/json" }
    })
    
    // 2) API response turned into JSON
    .then(response => response.json())
    
    // 3) Displaying process end message
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

    // setting the first option to empty
    selectCourses.innerHTML = "<option></option>";
    //iterating over courses items
    for( let course of courses ){
        //creating an HTML element
        let option = document.createElement("option");
        option.value = course.id;
        //using the textContent property to create a text node between the "courses" and "options" items generated from the creatElement.
        option.textContent = course.title;
        //using the appendChild method to insert the elements generated with createElement (children) to the parent element (option).
        selectCourses.appendChild(option);
    }
});

/* =========== Show / Hide Period =========  */

//creating a function to hide the radio buttons with the options for choosing the course period
function hidePeriod (element) {
    document.getElementById(element).style.display = 'none';
    //removing "required" attribute when distanceLearning option is selected
    const noRequired = document.getElementsByName("period");
    for(let i = 0; i < noRequired.length; i++) {
        noRequired[i].removeAttribute("required") 
    } 
}
//creating a function to show the radio buttons with the options for choosing the course period
function showPeriod (element) {
    document.getElementById(element).style.display = 'block';
}







