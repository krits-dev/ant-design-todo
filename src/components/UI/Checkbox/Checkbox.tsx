import { memo } from 'react'
import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import './Checkbox.scss'

interface IProps {
  complete: boolean
  onChangeAction?: (e: CheckboxChangeEvent) => void
}

function CheckboxComponent({ complete, onChangeAction }: IProps) {
  return (
    <div className='checkbox-wrapper'>
      <Checkbox checked={complete} onChange={onChangeAction} />
    </div>
  )
}

export default memo(CheckboxComponent)
