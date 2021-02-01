const Employee = require("../lib/Employee");

function PageTemplate(employees) {
  console.log("page created!");
  return `
      <!DOCTYPE html>
      <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>My Team</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>

        <body>
            <header>
              <h1 class="bg-primary">My Team</h1>
            </header>

            <main>
              ${employeeRole(employees)}
            </main>
            <footer >

            </footer>
        </body>
      </html>
    `;
}

function employeeRole(employees) {
  console.log("employee roles (triggered)");
  return employees
    .map((e) => {
      console.log(e.getRole());
      if (e.getRole() === "Manager") {
        return generateManager(e);
      }
      if (e.getRole() === "Engineer") {
        return generateEngineer(e);
      }
      if (e.getRole() === "Intern") {
        return generateIntern(e);
      }
    })
    .join("\n");
}

function generateManager(manager) {
  console.log("generating manager");

  return `<div class= "card mb-3" style="width: 18rem" >
    <div class="card-body">
      <h5 class="card-title bg-dark text-white">${manager.name}</h5>
      <p class="card-text">${manager.getRole()}</p>
      <p class="card-text">${manager.id}</p>
      <p class="card-text">${manager.email}</p>
      <p class="card-text">${manager.officeNumber}</p>
    </div>
  </div>`;
}

function generateEngineer(engineer) {
  console.log("generating engineer");

  return `<div class= "card mb-3" style="width: 18rem" >
    <div class="card-body">
      <h5 class="card-title bg-dark text-white">${engineer.name}</h5>
      <p class="card-text">${engineer.getRole()}</p>
      <p class="card-text">${engineer.id}</p>
      <p class="card-text">${engineer.email}</p>
      <p class="card-text">${engineer.github}</p>
    </div>
  </div>`;
}

function generateIntern(intern) {
  console.log("generating intern");

  return `<div class= "card mb-3" style="width: 18rem" >
    <div class="card-body">
      <h5 class="card-title bg-dark text-white">${intern.name}</h5>
      <p class="card-text">${intern.getRole()}</p>
      <p class="card-text">${intern.id}</p>
      <p class="card-text">${intern.email}</p>
      <p class="card-text">${intern.school}</p>
    </div>
  </div>`;
}
module.exports = PageTemplate;
