var addForm = document.getElementById('addForm');
console.log(addForm);

var elements = document.getElementById('items');

addForm.addEventListener('submit', submitForm);
elements.addEventListener('click', removeItem);

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

function removeItem(e) {
    if(e.target.classList.contains('delete')){
        console.log('Delete button clicked');
        var itemToBeRemoved = e.target.parentElement;
        elements.removeChild(itemToBeRemoved);
    }
}