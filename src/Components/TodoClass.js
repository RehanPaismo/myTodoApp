import {action, makeObservable, observable} from 'mobx'
class ToDoClass {
   
    todoArray = [];
    constructor(){
        makeObservable(this, {
            todoArray:observable,
            addToDo:action
        })
    }
    addToDo = (todoInput) => {
        const todoObj ={
            id: Math.random(),
            item: todoInput
        }
        this.todoArray.push(todoObj);
    }
    clear = () =>{
        this.todoArray = [];
    }
}
export const toDoClass = new ToDoClass();