const list = document.querySelector("#subscriberTable");

// 1) Access/Connect to API 
fetch("http://localhost:3000/userData")

// 2) capturing the API response in json format 
.then( response => response.json() )

// 3) capturing the response data
.then( userData => {

  userData.map((user) => {
    
    subscriberTable.innerHTML += 
    `<tr><td>${user.id}</td>  
          <td>${user.name}</td>
          <td>${user.birthDate}</td>
          <td>${user.cpf}</td>
          <td>${user.email}</td>
          <td>${user.phoneNumber}</td>
          <td>${user.modality}</td>
          <td>${user.period}</td>
          <td>${user.course}</td>
    </tr>`
  })
});

