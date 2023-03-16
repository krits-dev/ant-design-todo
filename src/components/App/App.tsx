import { Button } from 'components/UI'
import './App.scss'

function App() {
  return (
    <div className='bg-container'>
      <div className='app-wrapper'>
        <Button text='Add Task' />
        <Button iconIs='edit' />
        <Button iconIs='delete' danger />
      </div>
    </div>
  )
}

export default App
