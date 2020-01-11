// Register form start

let account = [];

let regButton = document.getElementById("buttonReg");
let regUsername = document.getElementById("regUser");
let regPassword = document.getElementById("regPass");

function User(username, password, isAdmin) {
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;

}

let admin = new User("admin", "admin", true);
account.push(admin);

regButton.addEventListener("click", () => {
    let newUser = new User(regUsername.value, regPassword.value, false)
    account.push(newUser);
    console.log(account)
})

// Register form end

// login start

let loginuser = document.getElementById("loginUser");
let loginpassword = document.getElementById("passwordUser");
let LoginButton = document.getElementById("login");
let logged = document.getElementById("loggedAcc");
let accounts = document.getElementById("accounts");

let allAcc = Object.values(account);

LoginButton.addEventListener("click", () => {
    for (let i = 0; i < account.length; i++) {
        if (loginuser.value === account[i].username)
            if (loginpassword.value === account[i].password) {
                logged.style.color = "green";
                logged.innerHTML = `Hello ${loginuser.value}! `

            } else {
                document.getElementsByClassName("block")
                logged.style.color = "red";
                logged.innerHTML = `You entered wrong username or password!`
            }
    }
    if (isAdmin=true) {
        accounts.innerHTML = `here are all the accounts ${allAcc} `;
    }
}
)
