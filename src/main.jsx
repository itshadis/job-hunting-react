import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ConfigProvider } from 'antd'
import themeCustom from './utils/themeCustom/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={themeCustom}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ConfigProvider>
  </React.StrictMode>,
)
