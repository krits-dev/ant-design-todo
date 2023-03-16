import { memo } from 'react'
import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import './Checkbox.scss'

interface IProps {
  onChangeAction?: (e: CheckboxChangeEvent) => void
}

function CheckboxComponent({ onChangeAction }: IProps) {
  return (
    <div className='checkbox-wrapper'>
      <Checkbox onChange={onChangeAction} />
    </div>
  )
}

export default memo(CheckboxComponent)
