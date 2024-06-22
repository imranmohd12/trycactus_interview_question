import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/body/dashboard/Dashboard.tsx'
import Portfolio from './components/body/portfolio/Portfolio.tsx'
import Debt from './components/body/debt/Debt.tsx'
import Underwriting from './components/body/underwriting/Underwriting.tsx'
import Contacts from './components/body/contacts/Contacts.tsx'
import Reports from './components/body/reports/Reports.tsx'
import AddProperty from './components/body/portfolio/AddProperty.tsx'
import { Provider } from 'react-redux'
import store from './components/store/store.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/debt',
        element: <Debt />
      },
      {
        path: '/underwriting',
        element: <Underwriting />
      },
      {
        path: '/contacts',
        element: <Contacts />
      },
      {
        path: '/reports',
        element: <Reports />
      },
      {
        path: '/addproperty',
        element: <AddProperty />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
