async function listUsers() {
    const request = await fetch('http://localhost:8070/users/', {
        method: 'GET'
    })
    const data = await request.json()
    return data.responsiveJSON
}

async function createUser(name, surname, username, email, password) {
    const request = await fetch('http://localhost:8070/users/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            surname: surname,
            username: username,
            email: email,
            password: password
        })
    })
    const data = await request.json()
    return data
}

function initForm() {
    const form = document.querySelector('#Form__Signup')
    const pages = document.querySelectorAll('.page')
    for (let i = 0; i < pages.length; i++) {
        pages[1].style.display = 'block'
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const name = form.querySelector('.name').value
        const surname = form.querySelector('.surname').value
        const username = form.querySelector('.username').value
        const email = form.querySelector('.email').value
        const password = form.querySelector('.password').value
        const passwordAgain = form.querySelector('.passwordAgain').value
        const errorName = document.querySelector(".Error__Name")
        const errorSurname = document.querySelector(".Error__Surname")
        const errorUsername = document.querySelector(".Error__Username")
        const errorEmail = document.querySelector(".Error__Email")
        const errorPassword = document.querySelector(".Error__Password")
        const errorPasswordRepeat = document.querySelector(".Error__Password__Repeat")

        if (name.length < 2) {
            errorName.classList.toggle("hide")
            errorName.innerHTML = "At least two characters"

        }
        if (surname.length < 2) {
            errorSurname.classList.toggle("hide")
            errorSurname.innerHTML = "At least two characters"

        }
        if (username.length < 2) {
            errorUsername.classList.toggle("hide")
            errorUsername.innerHTML = "At least two characters"

        }
        if (email.length < 2) {
            errorEmail.classList.toggle("hide")
            errorEmail.innerHTML = "Email alreaty exist"

        }
        if (password.length < 2) {
            errorPassword.classList.toggle("hide")
            errorPassword.innerHTML = "At least two characters"

        }
        if (passwordAgain != password) {
            errorPasswordRepeat.classList.toggle("hide")
            errorPasswordRepeat.innerHTML = "Password does not match!"
        } else {
            createUser(name, surname, username, email, password)
            pages[1].style.display = 'none'
            pages[2].style.display = 'block'
        }
    })
}

async function run() {
    initForm()
    const users = await listUsers()
}
run()

//----page function----//

const newPost = document.querySelector('Profile__Container-right');
const pages = document.querySelectorAll('.page')


newPost.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Profile form has been submitted")
});


/*
async function createPost(post) {
    const request = await fetch('http://localhost:8070/post/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            content: content
        })
    })
    const data = await request.json()
    return data
}

function initNewPost() {
    const form = document.querySelectorAll('.Profile__Right-Form-button');
    const pages = document.querySelectorAll('.page')
    if (document.initNewPost == "") {
        alert("please enter some text first");
    } else {
        doncument.initNewPost.click();
    }
}


async function init() {
    initNewPost()
    const posts = await newPost()
}
*/