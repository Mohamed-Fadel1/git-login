
let inputName = document.getElementById("inputName");
let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
let signUpBtn = document.getElementById("signUpBtn")
let alertMessage = document.getElementById("alertMessage")
let alertRequired = document.getElementById("alertRequired")
let exist = document.getElementById("exist")



let dataList = []

if (localStorage.getItem("users") !=null)
{
    dataList = JSON.parse(localStorage.getItem("users"))
}

function signUp ()
{
    let data = {
        userName : inputName.value ,
        userEmail :inputEmail.value ,
        userPassword :inputPassword.value
    }

    if (chickInput () ==true)
    {
        alertt ()
    } else {
        if ( emailExist () ==true)
        {
            alertExist ()
            alertMessage.classList.replace("d-block" , "d-none")
        } 
        else{
            dataList.push(data)
            localStorage.setItem("users" , JSON.stringify(dataList))
            clearForm ()
            alert ()
        
        }

    }


    
}



function alert ()
{
    alertMessage.classList.replace("d-none" , "d-block")
}




function alertt ()
{
    alertRequired.classList.replace("d-none" , "d-block")
}




function alertExist ()
{
    exist.classList.replace("d-none" , "d-block")
}





function clearForm ()
{
    inputName.value = "" ;
    inputEmail.value = ""
    inputPassword.value = ""
}





function chickInput ()
{
    if (inputName.value == "" || inputEmail.value == "" || inputPassword.value =="")
    {
        return true
    } else {
        return false
    }
}




function emailExist ()
{
    for (let i = 0; i<dataList.length; i++)
    {
        if (dataList[i].userEmail == inputEmail.value)
        return true
    }
}


signUpBtn.addEventListener("click" ,signUp  )

