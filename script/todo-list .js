const todoList=[
    {name:'Make Dinner',
    dueDate:'2022-12-32'
    },
    {
    name:'Wash Dishes',
    dueDate:'2022-12-22'
    }
];


    renderTodoList();

function renderTodoList(){
let todoListTHML='';
 
todoList.forEach(function(todoObect,index){

    const {name,dueDate}=todoObect;
    const html=`
    <div>${name}</div>
    <div> ${dueDate}</div>
    <button onclick="
    todoList.splice(${index },1);
    renderTodoList();
    " class="delete-todo-button"> 
    Delete
    </button>
  
    `;
    todoListTHML+=html;
});


    document.querySelector('.js-todo-list').innerHTML=todoListTHML;
}
function addTodo(){
    const inputElement =document.querySelector('.js-name-input');
    const name=inputElement.value;//value property=Text in the textbox
    const dateinputElement=document.querySelector('.js-due-date-input');
    const dueDate=dateinputElement.value;
    todoList.push({
       // name:name,
       // dueDate:dueDate,
        name,
        dueDate
    });
    inputElement.value='';//to reset the text in textbox
    renderTodoList();
}