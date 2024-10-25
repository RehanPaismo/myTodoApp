import AddToDo from './Components/AddToDo'
import {toDo} from './Components/TodoClass'
function App() {
  

  return (
    <>
      <AddToDo props={toDo}/>
    </>
  )
}

export default App
