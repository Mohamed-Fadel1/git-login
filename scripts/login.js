
let logInEmail = document.getElementById("logInEmail") ;
let logInPassword = document.getElementById("logInPassword");
let logInbtn = document.getElementById("logInbtn");
let allertMessage = document.getElementById("allertMessage")



let dataList = []

if (localStorage.getItem("users") != null)
{
    dataList = JSON.parse(localStorage.getItem("users"))
}

function logIn ()
{
if (chickEmailPassword ()== true)
{
window.location.href = "home.html"
} else {
    allertChick ()
}
}




function chickEmailPassword ()
{
    for ( let i =0; i<dataList.length ; i++)
    {
        if (dataList[i].userEmail ==logInEmail.value && dataList[i].userPassword==logInPassword.value)
        {
            localStorage.setItem("userName" , dataList[i].userName)
            return true
        }
    }
}



function allertChick ()
{
    allertMessage.classList.replace("d-none" , "d-block")
}
logInbtn.addEventListener("click" ,logIn )