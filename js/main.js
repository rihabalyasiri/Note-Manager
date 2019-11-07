let btn = document.getElementById('btn');
let container = document.getElementById('container');


// evenet to create note
btn.addEventListener('click', function (e) {
    e.preventDefault();
    let inputText = document.getElementById('inputText');
    let error = document.getElementById('error');


    let newNoteContainer = document.createElement('div');
    let newNoteText = document.createElement('p');
    let newIconContainer = document.createElement('div');
    let newDelete = document.createElement('i');
    let newEdit = document.createElement('i');


    if (inputText.value.length <= 800 && inputText.value.length > 1) {
        error.style.opacity = "0";
        newNoteContainer.appendChild(newNoteText);
        newNoteContainer.appendChild(newIconContainer);
        newIconContainer.appendChild(newEdit);
        newIconContainer.appendChild(newDelete);

        newNoteContainer.setAttribute('class', 'note-container')
        newNoteContainer.setAttribute('id', 'note-container')
        newNoteText.setAttribute('class', 'note-text')
        newNoteText.setAttribute('id', 'note-text')
        newIconContainer.setAttribute('class', 'icon-container')
        newEdit.setAttribute('class', 'far fa-edit edit')
        newDelete.setAttribute('class', 'far fa-trash-alt trash')

        container.insertBefore(newNoteContainer, container.children[0]);

        // container.appendChild(newNoteContainer);
        let noteText = document.getElementById('note-text');
        noteText.innerHTML = inputText.value;

        inputText.value = '';


    } else {
        error.style.opacity = "1";
        inputText.value = '';
    }
   
});


// event for editing and deleting a note
container.addEventListener('click', function (e) {
    console.log(this)
    if (e.target.classList[1] === "fa-trash-alt") {
        let delNoteContainer = e.target.parentNode.parentNode;
        delNoteContainer.remove();

    } else if (e.target.classList[1] === "fa-edit") {
        let editNoteContainer = e.target.parentNode.previousElementSibling;
        editNoteContainer.setAttribute('contenteditable', 'true');
        editNoteContainer.focus();

    }
});






