// getting all html elements

let robot = document.getElementById("robot");
let ship = document.getElementById("rocket");
let buttonPrevRobot = document.getElementById("prevRobot");
let buttonNextRobot = document.getElementById("nextRobot");
let buttonPrevShip = document.getElementById("prevShip");
let buttonNextShip = document.getElementById("nextShip");
let tableRobot = document.getElementById("tableRobot");
let tableRocket = document.getElementById("tableRocket");
let loader = document.getElementById("loader");


//
let num = 1;
let num2 = 1;

// url's
let peopleUrl = "https://swapi.co/api/people/?page=";
let shipsUrl = "https://swapi.co/api/starships/?page=";

// hiding elements that we dont need at the begining

buttonPrevRobot.style.display = "none";
buttonNextRobot.style.display = "none";
buttonPrevShip.style.display = "none";
buttonNextShip.style.display = "none";
tableRobot.style.display = "none";
tableRocket.style.display = "none";
loader.style.display = "none";

let data = [];

// Robot event listener

robot.addEventListener("click", function display() {
    
    tableRobot.innerHTML = ""
    tableRobot.style.display = "block";
    async function getPeopleData() {
        loader.style.display = "block";
        let response = await fetch(`${peopleUrl}1`);
        let pData = await response.json();
        data = pData.results;
        data.forEach(item => {
            tableRobot.innerHTML += `
                <tr>
                    <td> ${item.name} </td>
                    <td> ${item.height} </td>
                    <td> ${item.mass} </td>
                    <td> ${item.birth_year} </td>
                    <td> ${item.gender} </td>
                    <td> ${item.films.length} </td>
                </tr>
            `
        });
        loader.style.display = "none";
    }
    getPeopleData();
    buttonPrevRobot.style.display = "none";
    buttonNextRobot.style.display = "block";
    buttonPrevShip.style.display = "none";
    buttonNextShip.style.display = "none";
})

// Ship event listener

ship.addEventListener("click", function display() {
    buttonPrevRobot.style.display = "none";
    buttonNextRobot.style.display = "none";
    buttonNextShip.style.display = "block";
    tableRocket.innerHTML = ""
    tableRocket.style.display = "block";
    tableRobot.style.display = "none";
    async function getPeopleData() {
        loader.style.display = "block";
        let response = await fetch(`${shipsUrl}1`);
        let pData = await response.json();
        data = pData.results;
        data.forEach(item => {
            tableRocket.innerHTML += `
                <tr>
                    <td> ${item.name} </td>
                    <td> ${item.model} </td>
                    <td> ${item.manufacturer} </td>
                    <td> ${item.cost_in_credits} </td>
                    <td> ${item.passengers} </td>
                    <td> ${item.starship_class} </td>
                </tr>
            `
        });
        loader.style.display = "none";
    }
    getPeopleData();

})

// Next button Robot


buttonNextRobot.addEventListener("click", function() {
    
    num++

    // if(num=9) {buttonNextRobot.style.display = "none";}

    tableRobot.innerHTML = ""
    tableRobot.style.display = "block";
    tableRocket.style.display = "none";
    async function getPeopleData() {
        loader.style.display = "block";
        let response = await fetch(`${peopleUrl}${num}`);
        let pData = await response.json();
        data = pData.results;
        data.forEach(item => {
            tableRobot.innerHTML += `
                <tr>
                    <td> ${item.name} </td>
                    <td> ${item.height} </td>
                    <td> ${item.mass} </td>
                    <td> ${item.birth_year} </td>
                    <td> ${item.gender} </td>
                    <td> ${item.films.length} </td>
                </tr>
            `
        });
        loader.style.display = "none";
    }
    getPeopleData();
    buttonPrevRobot.style.display = "block";
    buttonPrevShip.style.display = "none";
    buttonNextShip.style.display = "none"
})


// Previous button Robot

buttonPrevRobot.addEventListener("click", function() {
    num--;

    // if(num=1) {buttonPrevRobot.style.display = "none";}

    tableRobot.innerHTML = ""
    tableRobot.style.display = "block";
    tableRocket.style.display = "none";
    async function getPeopleData() {
        loader.style.display = "block";
        let response = await fetch(`${peopleUrl}${num}`);
        let pData = await response.json();
        data = pData.results;
        data.forEach(item => {
            tableRobot.innerHTML += `
                <tr>
                    <td> ${item.name} </td>
                    <td> ${item.height} </td>
                    <td> ${item.mass} </td>
                    <td> ${item.birth_year} </td>
                    <td> ${item.gender} </td>
                    <td> ${item.films.length} </td>
                </tr>
            `
        });
        loader.style.display = "none";
    }
    getPeopleData();
    buttonNextRobot.style.display = "block";
    buttonPrevShip.style.display = "none";
    buttonNextShip.style.display = "none"
})


// Next button Ships



buttonNextShip.addEventListener("click", function() {

    num2++;

    buttonPrevRobot.style.display = "none";
    buttonNextRobot.style.display = "none";
    buttonNextShip.style.display = "block";
    buttonPrevShip.style.display = "block";
    tableRocket.innerHTML = ""
    tableRocket.style.display = "block";
    tableRobot.style.display = "none";
    async function getPeopleData() {
        loader.style.display = "block";
        let response = await fetch(`${shipsUrl}${num2}`);
        let pData = await response.json();
        data = pData.results;
        data.forEach(item => {
            tableRocket.innerHTML += `
                <tr>
                    <td> ${item.name} </td>
                    <td> ${item.model} </td>
                    <td> ${item.manufacturer} </td>
                    <td> ${item.cost_in_credits} </td>
                    <td> ${item.passengers} </td>
                    <td> ${item.starship_class} </td>
                </tr>
            `
        });
        loader.style.display = "none";
    }
    getPeopleData();

})

// Button Previous Ship

buttonPrevShip.addEventListener("click", function() {

    num2--;

    buttonPrevRobot.style.display = "none";
    buttonNextRobot.style.display = "none";
    buttonNextShip.style.display = "block";
    tableRocket.innerHTML = ""
    tableRocket.style.display = "block";
    tableRobot.style.display = "none";
    async function getPeopleData() {
        loader.style.display = "block";
        let response = await fetch(`${shipsUrl}${num2}`);
        let pData = await response.json();
        data = pData.results;
        data.forEach(item => {
            tableRocket.innerHTML += `
                <tr>
                    <td> ${item.name} </td>
                    <td> ${item.model} </td>
                    <td> ${item.manufacturer} </td>
                    <td> ${item.cost_in_credits} </td>
                    <td> ${item.passengers} </td>
                    <td> ${item.starship_class} </td>
                </tr>
            `
        });
        loader.style.display = "none";
    }
    getPeopleData();

})

//===============================================\\
//==================PAGINATION===================\\
