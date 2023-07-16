'use strict';

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItem);

// Add item
function addItem(event) {
    event.preventDefault();
    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li ele
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete btn ele
    let deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn bnt-danger btn-sm float-right delete';
    
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append btn to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}

// Remove item

function removeItem(e) {
    e.preventDefault();
    if(e.target.classList.contains('delete')) {
        if(confirm('Are You Sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Item

function filterItem (e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();

    // Get lis
    let items = itemList.getElementsByTagName('li');

    // Convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}