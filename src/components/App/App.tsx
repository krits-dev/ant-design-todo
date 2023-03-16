import { Checkbox, Button, Title } from 'components/UI'
import './App.scss'

function App() {
  return (
    <div className='bg-container'>
      <div className='app-wrapper'>
        <div style={{ display: 'flex' }}>
          <Checkbox />
          <Title task text='Test Task num 1' />
          <Button iconIs='edit' />
          <Button iconIs='delete' danger />
        </div>
      </div>
    </div>
  )
}

export default App
