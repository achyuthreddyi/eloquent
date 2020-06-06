let form = document.getElementById('addForm')
let itemList = document.getElementById('items')
let filter = document.getElementById('filter')


//  form submit event

form.addEventListener('submit',addItem)

// delete event 
itemList.addEventListener('click',removeItem)
filter.addEventListener('keyup',filerItems)


// function for add item 
function addItem(e){
    e.preventDefault();
    // get input values
    let new_item = document.getElementById('item').value  
    
    // CREATE NEW LI ELEMENT
    let li = document.createElement('li')
    // adding class
    li.className = 'list-group-item'
    // add text node with input value
    li.appendChild(document.createTextNode(new_item))
    // create delete button element button
    let deleteBtn = document.createElement('button')
    //  add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'))

    // append button to li
    li.appendChild(deleteBtn)
    // append li to list
    itemList.appendChild(li)   
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure')){
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }        
    }
}

function filerItems(e){
    // convert evertinh to lower case
    let text = e.target.value.toLowerCase()
    // console.log(text);
    let items = itemList.getElementsByTagName('li')
   // convert to array
   Array.from(items).forEach(function(item){
       let itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display ='block'
    }
    else{
        item.style.display ='none'
    }
   })
    

}