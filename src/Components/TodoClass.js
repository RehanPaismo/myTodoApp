import {action, makeObservable, observable} from 'mobx'
class ToDo {
   
    todoItems = [];
    constructor(){
        makeObservable(this, {
            todoItems:observable,
            addToDo:action
        })
    }
    addToDo = (todoInput) => {
        const todo ={
            id: Math.random(),
            item: todoInput
        }
        this.todoItems.push(todo);
    }
    clear = () =>{
        this.todoItems = [];
    }
}
export const toDo = new ToDo();