import { useContext, useState } from 'react'
import { Checkbox, Button, Title } from 'components/UI'
import { EditTodo } from 'components'
import { TodosContext, ITodosContext } from 'provider/TodosProvider'
import './TodoItem.scss'

interface IProps {
  id: number
  description: string
  complete: boolean
  date: string
}

function TodoItem({ id, description, complete, date }: IProps) {
  const { removeTodo, toggleTodo } = useContext(TodosContext) as ITodosContext
  const [editID, setEditID] = useState<number | null>(null)

  const setID = (id: any) => {
    setEditID(id)
  }

  return (
    <>
      {editID !== id ? (
        <div className='todo-item-wrapper'>
          <Checkbox complete={complete} onChangeAction={() => toggleTodo(id)} />
          <Title task text={description} complete={complete} />
          <div className='button-group'>
            <div className='todo-item-date'>{date}</div>
            <Button iconIs='edit' onClickAction={() => setID(id)} />
            <Button
              iconIs='delete'
              danger
              onClickAction={() => removeTodo(id)}
            />
          </div>
        </div>
      ) : (
          <EditTodo id={id} description={description} setID={setID} />
      )}
    </>
  )
}

TodoItem.defaultProps = {
  id: null,
  description: '',
  complete: false,
  date: '',
}

export default TodoItem
