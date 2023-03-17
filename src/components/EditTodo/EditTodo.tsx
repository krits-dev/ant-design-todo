import {
  useState,
  useEffect,
  useRef,
  useContext,
  ChangeEventHandler,
  KeyboardEventHandler,
} from 'react'
import { Button } from 'components/UI'
import { Input, Space, InputRef } from 'antd'
import { TodosContext, ITodosContext } from 'provider/TodosProvider'
import './EditTodo.scss'

interface IProps {
  id: number
  description: string
  setID: (id: number | null) => void
}

function EditTodo({ id, description, setID }: IProps) {
  const { editTodo } = useContext(TodosContext) as ITodosContext
  const [value, setValue] = useState(description)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      if (!value.length) {
        console.log('Type something')
      }
      editTodo(id, value)
      setID(null)
    }
  }

  const handleEditTodo = (id: number, value: string) => {
    if (!value.length) {
      console.log('Type something')
    }
    editTodo(id, value)
    setID(null)
  }

  const inputRef = useRef<InputRef>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className='edit-todo-wrapper'>
      <Space.Compact block size='large'>
        <Input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          maxLength={28}
          ref={inputRef}
        />
        <Button text='Edit' onClickAction={() => handleEditTodo(id, value)} />
      </Space.Compact>
    </div>
  )
}

EditTodo.defaultProps = {
  id: null,
  description: '',
  setID: () => null,
}

export default EditTodo
