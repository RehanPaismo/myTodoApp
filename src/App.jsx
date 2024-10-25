import AddToDo from './Components/AddToDo'
import {toDo} from './Components/TodoClass'
function App() {
  

  return (
    <>
      <AddToDo myProps={toDo}/>
    </>
  )
}

export default App
