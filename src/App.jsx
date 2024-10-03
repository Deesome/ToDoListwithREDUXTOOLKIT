
import './App.css'
import TodoForm from './components/todoForm'
import TodoItem from './components/todoItem'

function App() {
  

  return (
    <>
      <h1 className='text-3xl'>Todo with redux toolkit</h1>
      <TodoForm/>
      <TodoItem/>
    </>
  )
}

export default App
