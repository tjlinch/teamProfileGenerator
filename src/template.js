 //manager card
const generateManager = (manager) => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h4 class="cardName">${manager.getName()}</h4>
            <h5 class="cardRole">${manager.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item cardId">Id: ${manager.getId()}</li>
            <li class="list-group-item cardEmail">Email: ${manager.getEmail()}</li>
            <li class="list-group-item cardOfficeNumber">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div> `;
    };

//engineer card
const generateEngineer = (engineer) => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h4 class="cardName">${engineer.getName()}</h4>
            <h5 class="cardRole">${engineer.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item cardId">Id: ${engineer.getId()}</li>
            <li class="list-group-item cardEmail">Email: ${engineer.getEmail()}</li>
            <li class="list-group-item cardGithub">Github: ${engineer.getGithub()}</li>
        </ul>
    </div>`;
};

//intern card
const generateIntern = (intern) => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h4 class="cardName">${intern.getName()}</h4>
            <h5 class="cardRole">${intern.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item cardId">Id: ${intern.getId()}</li>
            <li class="list-group-item cardEmail">Email: ${intern.getEmail()}</li>
            <li class="list-group-item cardSchool">School: ${intern.getSchool()}</li>
        </ul>
    </div>`;
};

const generateCards = (data) => {

    const cardArray =[];

    for (i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            cardArray.push(managerCard);
        };

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            cardArray.push(engineerCard);
        };

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            cardArray.push(internCard);
        };
    };
    const employeeCards = cardArray.join('');

    const generateTeam = generateHTML(employeeCards);
    return generateTeam;

}

const generateHTML = function (employeeCards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../src/reference.css">
</head>
<body>
    <header>
        <h2>My Team</h2>
    </header>
    <div class="container">
        <!-- Employee cards here -->
        ${employeeCards}
    </div>
    
</body>
</html>`
}

module.exports = generateCards;