let studentFormDOM = document.getElementById("studentForm");

studentFormDOM.addEventListener('submit',formHandler);

const ALERT = (message, className='warning') => {
    document.getElementById('alert').innerHTML =`
    <div class="alert alert-${className}" role="alert">
         ${message}
    </div>
    `
}
function formHandler(event)
{
    event.preventDefault();
    let USER_NAME= document.getElementById('studentName');
    let SCORE = document.getElementById('studentNote');

    if ( USER_NAME.value && SCORE.value)
        addItem(USER_NAME.value, SCORE.value);
    else
        ALERT('Boş giriş');
}



let userListDOM = document.getElementById('userList');

const addItem = (username, score) => {
    let liDOM = document.createElement('li');
    
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-start'
    );

    liDOM.innerHTML = `
    <div class="ms-2 me-auto">
                    <div class="fw-bold">${username}</div>
    </div>
    <span class="badge bg-primary rounded-pill">${score}</span>
    `;
    userListDOM.append(liDOM);
}