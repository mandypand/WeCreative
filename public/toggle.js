const edit = document.querySelector(".Toggle__Edit");

edit.addEventListener('click', () => {
    console.log("hej")
    if (edit.classList.contains('editChoice')) {
        edit.classList.remove('editChoice');
        } else {
        edit.classList.add('editChoice');
        }
    });