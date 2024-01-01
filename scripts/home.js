let welcome = document.getElementById("welcome")
let logOutBtn = document.getElementById("logOutBtn")


if (localStorage.getItem("userName") != null)
{
    welcome.innerHTML = `welcome ${localStorage.getItem("userName")} `
}


function logOut ()
{

}


logOutBtn.addEventListener("click" , function()
{
    window.location.href = "index.html"
    localStorage.removeItem("userName")
})