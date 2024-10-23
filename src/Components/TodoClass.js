class ToDoClass {
   
    todoArray = [];
    addToDo = (todoInput) => {
        const todoObj ={
            id: Math.random(),
            item: todoInput
        }
        this.todoArray.push(todoObj);
    }
}
export const toDoClass = new ToDoClass();