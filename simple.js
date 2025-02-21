const addTodo = document.querySelector("#addTodo");

const input = document.querySelector("#inputField");

const toDoContainer =document.querySelector("#toDoContainer");

addTodo.addEventListener("click", addItem);

input.addEventListener("keypress", function(e){
    if(e.key=="Enter"){
        addItem();
    }
  
});

function addItem(){
    const item_value = input.value.trim();
   // console.log(item_value);
   if (item_value === ""){
    alert("Please Enter a value"); 
    return;
  
}

const item = document.createElement('div');//create new element
item.classList.add('item', 'd-flex', 'justify-content-between', 'align-items-center', 'p-2', 'border','mb-2');


const input_item = document.createElement('input');//create new input
input_item.classList.add('form-control', 'w-50');
input_item.type = 'text';
input_item.value = item_value;

input_item.setAttribute('readonly', 'readonly');

input_item.addEventListener('dblclick', function(){
    input_item.style.textDecoration = input_item.style.textDecoration === "line-through" ? "none" : "line-through";
});



const item_action = document.createElement('div');
item_action.classList.add('d-flex', 'gap-2');


//Edit button



const edit_item =document.createElement('button');
edit_item.classList.add('edit','btn','btn-success');
edit_item.innerHTML = '<i class="fa-solid fa-check"></i>';
edit_item.addEventListener('click', function(){
    if (input_item.hasAttribute('readonly')){
        input_item.removeAttribute('readonly');
        input_item.focus();
        edit_item.innerHTML = 'text'
        edit_item.innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
    }
    else{
        input_item.setAttribute('readonly', 'readonly');
        edit_item.innerHTML = '<i class="fa-solid fa-check"></i>'
    }
});


//check button
const check_item = document.createElement('button');
check_item.classList.add('edit', 'btn', 'btn-success');
check_item.innerHTML = '<i class="fa fa-pencil"></i>';
check_item.addEventListener('click', function() {
    if (input_item.hasAttribute('readonly')) {
        input_item.removeAttribute('readonly');
        input_item.focus();
        check_item.innerHTML = '<i class="fa-solid fa-file-lines"></i>'; // Change icon to checkmark
    } else {
        input_item.setAttribute('readonly', 'readonly');
        check_item.innerHTML = '<i class="fa fa-pencil"></i>'; // Change back to pencil
    }
});

//delete button
const delete_item = document.createElement('button');
delete_item.classList.add('delete', 'btn', 'btn-danger');
delete_item.innerHTML = '<i class="fa fa-trash"></i>';
delete_item.addEventListener('click', function(){
    item.remove();
});



 // Append elements
item_action.appendChild(edit_item);
item_action.appendChild(check_item);
item_action.appendChild(delete_item);
item.appendChild(input_item);
item.appendChild(item_action);
toDoContainer.appendChild(item);


input.value = "";

}


