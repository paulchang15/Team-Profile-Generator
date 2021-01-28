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
  console.log(getRole());
  if (getRole() === "Manager") {
    return generateManager(employees);
  }
  if (employees.getRole() === "Engineer") {
    return generateEngineer(employees);
  }
  if (employees.getRole() === "Intern") {
    return generateIntern(employees);
  }
}

function generateManager(employees) {
  console.log("generating manager");
  return employees
    .map((e) => {
      return `
      <div class= "card mb-3" style="width: 18rem" >
        <div class="card-body">
          <h5 class="card-title bg-dark text-white">${e.name}</h5>
          <p class="card-text">${e.getRole()}</p>
          <p class="card-text">${e.id}</p>
          <p class="card-text">${e.email}</p>
          <p class="card-text">${e.officeNumber}</p>
        </div>
      </div>`;
    })
    .join("\n");
}

function generateEngineer(employees) {
  console.log("generating manager");
  return employees
    .map((e) => {
      return `
      <div class= "card mb-3" style="width: 18rem" >
        <div class="card-body">
          <h5 class="card-title bg-dark text-white">${e.name}</h5>
          <p class="card-text">${e.getRole()}</p>
          <p class="card-text">${e.id}</p>
          <p class="card-text">${e.email}</p>
          <p class="card-text">${e.github}</p>
        </div>
      </div>`;
    })
    .join("\n");
}

function generateIntern(employees) {
  console.log("generating manager");
  return employees
    .map((e) => {
      return `
      <div class= "card mb-3" style="width: 18rem" >
        <div class="card-body">
          <h5 class="card-title bg-dark text-white">${e.name}</h5>
          <p class="card-text">${e.getRole()}</p>
          <p class="card-text">${e.id}</p>
          <p class="card-text">${e.email}</p>
          <p class="card-text">${e.school}</p>
        </div>
      </div>`;
    })
    .join("\n");
}
module.exports = PageTemplate;
