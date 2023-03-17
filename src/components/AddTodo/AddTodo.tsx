import {
  useState,
  useEffect,
  useRef,
  useContext,
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEvent,
} from 'react'
import { Button } from 'components/UI'
import { Input, Space, InputRef } from 'antd'
import { TodosContext, ITodosContext } from 'provider/TodosProvider'
import './AddTodo.scss'

function AddTodo() {
  const { saveTodo } = useContext(TodosContext) as ITodosContext
  const [value, setValue] = useState('')

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const handleAddTodo = () => { 
    if (!value.length) {
      return console.log('enter your task')
    }
    saveTodo(value)
    setValue('')
  }

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      if (!value.length) {
        return console.log('enter your task')
      }
      saveTodo(value)
      setValue('')
    }
  }

  const inputRef = useRef<InputRef>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className='add-todo-wrapper'>
      <Space.Compact block size='large'>
        <Input
          placeholder='Add a task'
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <Button text='Add Task' onClickAction={handleAddTodo} />
      </Space.Compact>
    </div>
  )
}

export default AddTodo
