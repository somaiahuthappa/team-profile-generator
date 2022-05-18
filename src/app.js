

const generateManager = manager => {
  return `
            <!-- Manager card -->
        <div id="m-t" class="col-2">
          <div class="card text-center">
            <div class="card-header">
              <h4><strong>${manager.name}</strong>
                <h4>
                  <p>${manager.getRole()}</p>
                  <span class="iconify" data-icon="flat-color-icons:manager"></span>
            </div>
            <div class="card-divider">
            <ul style="list-style: none;" class="list-group list-group-flush">
              <li>Manager Id: <span>${manager.id}</span></li>
              <li>Manager email: <a href="mailto:${manager.email}">${manager.email}</a></li>
              <li>Manager Number: <span>${manager.getOfficeNumber()}</span></li>
              </ul>
            </div>
          </div>
        </div>
            `;
}

const generateEngineer = (engineers) => {
  let engineerCard = engineers.map(engineer => {
    return `
            <!-- Engineer card -->
        <div id="m-t" class="col-2">
          <div class="card text-center">
            <div class="card-header">
              <h4><strong>${engineer.name}</strong>
                <h4>
                  <p>${engineer.getRole()}</p>
                  <span class="iconify" data-icon="icon-park:laptop-computer"></span>
            </div>
            <div class="card-divider">
            <ul style="list-style: none;" class="list-group list-group-flush">
              <li>Engineer Id: <span>${engineer.id}</span></li>
              <li>Engineer email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
              <li>Engineer Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
              </ul>
            </div>
          </div>
        </div>
            `;
  })
  console.log(engineerCard);
  return engineerCard.join("");
}

const generateIntern = (interns) => {
  let internCard = interns.map(intern => {
    return `
            <!-- Intern card -->
        <div id="m-t" class="col-2">
          <div class="card text-center">
            <div class="card-header">
              <h4><strong>${intern.name}</strong>
                <h4>
                  <p>${intern.getRole()}</p>
                  <span class="iconify" data-icon="emojione:clipboard"></span>
            </div>
            <div class="card-divider">
            <ul style= "list-style: none;" class="list-group list-group-flush">
              <li>Intern Id: <span>${intern.id}</span></li>
              <li>Intern email: <a href="mailto:${intern.email}">${intern.email}</a></li>
              <li>Intern Number: <span>${intern.getSchool()}</span></li>
              </ul>
            </div>
          </div>
        </div>
            `;
  })
  console.log(internCard);
  return internCard.join("");

}


const generatePage = (manager, engineers, interns) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Compressed Foundation CSS -->
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <!-- Iconify -->
        <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>
        <!-- Personal Stylesheet -->
        <link rel="stylesheet" href="./style.css">
        <title>Team Generator</title>
    </head>
    <body class="bg-light">
        
        <!-- Generate The Page  -->
        <header class="text-center bg-danger text-white">
            <h1>My Team</h1>
        </header>
    
        <main class = "container">
        <div class = "row justify-content-around">
            ${generateManager(manager[0])}
            ${generateEngineer(engineers)}
            ${generateIntern(interns)}
            </div>
        </main>
    
    <!-- Compressed Foundation JavaScript -->
    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
}

module.exports = generatePage;
