async function listUsers(){
    const request = await fetch('http://localhost:8070/users/', 
    {
        method: 'GET' 
    })
    const data = await request.json()
    return data.responsiveJSON
}

async function createUser(name, surname, username, email, password){
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

function initForm(){
    const form = document.querySelector('#create-user-form')
    form.addEventListener('submit', (event) => {
            event.preventDefault()

            const name = form.querySelector('.name').value
            const surname = form.querySelector('.surname').value
            const username = form.querySelector('.username').value
            const email = form.querySelector('.email').value
            const password = form.querySelector('.password').value
            const passwordAgain = form.querySelector('.passwordAgain').value

            if(name.length < 2){
                alert('At least two characters')
            } else if(surname.length <2){
                alert('At least two characters')
            } else if(username.length <2){
                alert("At least two characters")
            }else if(email.length <2){
                alert("At least two characters")
            }else if(password.length <2){
                alert("At least two characters")
            }else if(passwordAgain != password){
                alert("Your passwords doesnt't match")
            } else {
            createUser(name, surname, username, email, password)
        }

    })
}

async function run(){
    initForm()
    const users = await listUsers()
    
}

run()
console.log("hej")
