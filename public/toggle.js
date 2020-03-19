function hideShow() {
    const edit = document.querySelector(".Toggle__Edit");
        if (edit.style.display === "none") {
            edit.style.display = "block";           
            edit.querySelector("editText").innerHTML = "New text!";
        } else {
            edit.style.display = "none";
        }
    }