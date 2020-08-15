var addForm = document.getElementById('addForm');
console.log(addForm);

addForm.addEventListener('submit', submitForm);
function submitForm(e) {
    e.preventDefault();
    var textBoxContent = document.getElementById('item').value;
    console.log(textBoxContent);

    var newButton = document.createElement('button');
    newButton.className = 'btn btn-danger btn-sm float-right delete';
    newButton.textContent = 'X';


    var newListElement = document.createElement('li');
    newListElement.className = 'list-group-item';
    var newListText = document.createTextNode(textBoxContent);
    newListElement.appendChild(newButton);
    newListElement.appendChild(newListText);
    console.log(newListElement);

    var listGroup = document.getElementById('items');
    listGroup.appendChild(newListElement);
}