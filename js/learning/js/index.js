let buttonDOM = document.querySelector("#userForm");

buttonDOM.addEventListener('submit',btnDisable);

function btnDisable(event)
{
    event.preventDefault();
    let scoreDOM = document.querySelector("#score");
    window.localStorage.setItem("formScore",scoreDOM.value);

}