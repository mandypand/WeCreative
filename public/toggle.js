const newNote = document.querySelector("Profile__Right-Form-button");
const pages = document.querySelectorAll(".page")


newNote.addEventListener('publish', (event) => {
    event.preventDefault();
    console.log("Profile form has been submitted")

});
