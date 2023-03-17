import { AddTodo, TodoList } from 'components'
import { Title } from 'components/UI'
import './App.scss'

function App() {
  return (
    <div className='bg-container'>
      <div className='app-wrapper'>
        <Title page text='Ant Design ToDo' />
        <AddTodo />
        <TodoList />
      </div>
    </div>
  )
}

export default App
