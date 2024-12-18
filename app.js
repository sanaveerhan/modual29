const inputbox = document.getElementById('inputbox');
const addbtn = document.getElementById('addbtn');
const todoList = document.getElementById('todoList');




const addTodo = ()=>{
    const inputText = inputbox.value.trim();
    
    if(inputText.lenght <= 0){
        alert("You must write something in your to do");
        return false;
    }
    
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    


    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);



    todoList.appendChild(li);
    inputbox.value =""
}
const updateTodo = (e)=>{
if(e.target.innerHTML  === "Delete"){
    
todoList.removeChild(e.target.parentElement);

}
}

addbtn.addEventListener('click',addTodo);
todoList.addEventListener('click', updateTodo);


