
class Todo{
    constructor(name,content){
        this.name=name;
        this.content=content;
    }

CreateToDoElement(){
    const li=document.createElement("li");
    li.innerText=`${this.name}: ${this.content}`;
    return (li);
}
}

class ToDoList {
    toDoList=[];
    ol=document.getElementById("todolist");
    constructor(){}

    addTodo=(name,content)=>{
        const todo= new Todo(name,content);
        this.toDoList.push(todo);
        this.afficheToDoList();
       };

     removeTodo=(todo)=>{
        this.toDoList = this.toDoList.filter((currentToDo) => currentToDo !== todo);
        this.afficheToDoList();
       };
   
    
    afficheToDoList(){
        this.ol.innerText="";
        this.toDoList.forEach((todo)=>{
         const newTodo=todo.CreateToDoElement();
         const i=document.createElement("i");
         i.classList.add("fa");
         i.classList.add("fa-trash");
         i.addEventListener("click",()=>{
             this.removeTodo(todo);
         });
         newTodo.appendChild(i);
         this.ol.appendChild(newTodo);
     })
    }
}
 
    
 
    

const toDoList=new ToDoList();

const taskName = document.getElementById("name");
const taskContent = document.getElementById("content");
const addButton = document.getElementById("addButton");
addButton.disabled = true;

const disableButton = (button, ...name__content) => {
 button.disabled = false;
 name__content.forEach((name_content) => {
     if (name_content.value.trim().length==0) {
         button.disabled = true;
     }
 });
};

taskName.addEventListener("keyup", () => {
 disableButton(addButton, taskName, taskContent);
});

taskContent.addEventListener("keyup", () => {
 disableButton(addButton, taskName, taskContent);
});

addButton.addEventListener("click", () => {
 toDoList.addTodo(taskName.value, taskContent.value);
 taskName.value = "";
 taskContent.value = "";
 addButton.disabled=true;
});







