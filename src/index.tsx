import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'components'
import TodosProvider from 'provider/TodosProvider'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>
)
