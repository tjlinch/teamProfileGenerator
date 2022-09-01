const generateCards = (team) => {

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
        </div> `
    }



}