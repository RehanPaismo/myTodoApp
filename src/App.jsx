import AddToDo from './Components/AddToDo'
import {toDoClass} from './Components/TodoClass'
function App() {
  

  return (
    <>
      <AddToDo myProp={toDoClass}/>
    </>
  )
}

export default App
