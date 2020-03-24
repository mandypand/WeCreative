function hideShow() {
    const edit = document.querySelector(".Toggle__Edit");
    if (edit.style.display === "none") {
        edit.style.display = "block";
    } else {
        edit.style.display = "none";
    }
}


const newNote = document.querySelector("Profile__Right-Form-button");
const pages = document.querySelectorAll(".page")


newNote.addEventListener('publish', (event) => {
    event.preventDefault();
    console.log("Profile form has been submitted")

});
