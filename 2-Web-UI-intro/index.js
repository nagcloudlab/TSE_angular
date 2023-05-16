

//-------------------------------
// using DOM Ap
//-------------------------------

const alertBox = document.querySelector('.alert');
const greetBtn = document.querySelector('.btn-primary');
const showBtn = document.querySelector('.btn-success');
const hideBtn = document.querySelector('.btn-danger');


greetBtn.addEventListener('click', function () {
    alertBox.innerHTML = 'Hello World!';
});

showBtn.addEventListener('click', function () {
    alertBox.style.display = 'block';
});

hideBtn.addEventListener('click', function () {
    alertBox.style.display = 'none';
});


//-------------------------------
// using DOM Api + Timer Api
//-------------------------------



setInterval(() => {
    const timeNow = document.querySelector('#time-now');
    timeNow.innerHTML = new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata" });
}, 1000);




//-------------------------------
// using DOM Api + XHR/Fetch Api
//-------------------------------

const top5TodosBtn = document.querySelector('#top-5-todos');
const todosList = document.querySelector('#todos');
top5TodosBtn.addEventListener('click', function () {

    const promise = fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    promise
        .then(response => response.json())
        .then(todos => {

            const todoElements = todos.map(todo => {
                return `
                    <li class="list-group-item">
                        <span>${todo.id}</span>
                        <span>${todo.title}</span>
                        <span>${todo.completed}</span>  
                    </li>
                `
            })
            todosList.innerHTML = todoElements.join('');
        });

});


