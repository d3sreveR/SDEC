// getting all html elements

let robot = document.getElementById("robot");
let ship = document.getElementById("rocket");
let buttonPrevRobot = document.getElementById("prevRobot");
let buttonNextRobot = document.getElementById("nextRobot");
let buttonPrevShip = document.getElementById("prevShip");
let buttonNextShip = document.getElementById("nextShip");
let table = document.getElementById("table");

// url's
let peopleUrl = "https://swapi.co/api/people/?page=";
let shipsUrl = "https://swapi.co/api/starships/?page=";

// hiding elements that we dont need at the begining

buttonPrevRobot.style.display = "none";
buttonNextRobot.style.display = "none";
buttonPrevShip.style.display = "none";
buttonNextShip.style.display = "none";
table.style.display = "none";

//======================

let data = [];

// ============== PEOPLE ==============
//
// Getting data for people

function peopleData() {

// data = [];

    fetch(`${peopleUrl}1`)
        .then((response) => {
            return response.json();
        })
        .then(myJson => {
            for (const user of myJson.results) {
                data.push(user)
                
            }
        })
}

// Event listener for robot

robot.addEventListener("click", () => {
    
    

    peopleData();
    // console.log(data);

    table.innerHTML = "";
    table.style.display = "block";
    table.innerHTML += `
    <tr>
        <th> Name </th>
        <th> Height  </th>
        <th> Mass  </th>
        <th> Gender </th>
        <th> Birth Year </th>
        <th> Appearances  </th>
    </tr>`
    
    for (const object of data) {
        
        table.innerHTML +=`
    <tr>
        <td> ${object.name} </td>
        <td> ${object.height} </td>
        <td> ${object.mass} </td>
        <td> ${object.gender} </td>
        <td> ${object.birth_year} </td>
        <td> ${object.films.length} </td>
    </tr>`
    }
    data = [];
    buttonNextRobot.style.display = "block";
    buttonPrevRobot.style.display = "none";
    buttonPrevShip.style.display = "none";
    buttonNextShip.style.display = "none";
})


// =========== SHIP =============
//
// Getting data for ships

function shipData() {

    // data = [];

    fetch(`${shipsUrl}1`)
        .then((response) => {
            return response.json();
        })
        .then(myJson => {
            for (const user of myJson.results) {
                data.push(user)
                
            }
        })
}


// Event listener for ship

ship.addEventListener("click", () => {
    
    shipData();
    // console.log(data);

    table.innerHTML = "";
    table.style.display = "block";
    table.innerHTML += `
    <tr>
        <th> Name </th>
        <th> Model  </th>
        <th> Manufacturer  </th>
        <th> Cost  </th>
        <th> People Capacity </th>
        <th> Class  </th>
    </tr>`
    
    for (const object of data) {
        
        table.innerHTML +=`
    <tr>
        <td> ${object.name} </td>
        <td> ${object.model} </td>
        <td> ${object.manufacturer} </td>
        <td> ${object.cost_in_credits} </td>
        <td> ${object.passengers} </td>
        <td> ${object.starship_class} </td>
    </tr>`
    }
    
    data = [];
    buttonNextShip.style.display = "block";
    buttonPrevShip.style.display = "none";
    buttonPrevRobot.style.display = "none";
    buttonNextRobot.style.display = "none";
})

buttonNextRobot.addEventListener("click", () => {



    buttonPrevRobot.style.display = "block";
})