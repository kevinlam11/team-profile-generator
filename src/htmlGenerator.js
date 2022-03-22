module.exports = (teamArray) => {
  return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>My Team</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <link rel="stylesheet" href="style.css">
          <script src="https://kit.fontawesome.com/c502137733.js"></script>
      </head>
      <body>
          <div class="container-fluid">
              <div class="row">
                  <div class="col-12 jumbotron mb-3 team-heading">
                      <h1 class="text-center">My Team</h1>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="row">
                  <div class="team-area col-12 d-flex justify-content-center">
                   ${generateBlocks(teamArray)}
                  </div>
              </div>
          </div>
      </body>
      </html>`;
};

function generateBlocks(teamArray) {
  let cards = ``;
  teamArray.forEach((member) => {
    cards += `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${member.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${member.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${member.getId()}</li>
            
            <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
            ${generateUniqueProperty(member)}
            
        </ul>
    </div>
</div>`;
  });
  return cards;
}

function generateUniqueProperty(member) {
  switch (member.getRole()) {
    case "Intern":
      return `<li class="list-group-item">School: ${member.getSchool()}</li>`;
    case "Manager":
      return `<li class="list-group-item">Office Number: ${member.getOfficeNumber()}</li>`;
    case "Engineer":
      return `<li class="list-group-item">Github: ${member.getGithub()}</li>`;

    default:
      return "";
  }
}
