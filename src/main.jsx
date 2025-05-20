import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import { RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Projects from './components/projects/Projects.jsx'
import SkillsPage from './components/skills/SkillPage.jsx'
import ContactPage from './components/contact/ContactPage.jsx'

const router = createBrowserRouter([{
  path : '/',
  element :<Layout/>,
  children :[
    {
      path : '',
      element: <Home/>
    },
    {
      path : '/projects',
      element : <Projects/>
    },
    {
      path : '/skills',
      element : <SkillsPage/>
    },
    {
      path : '/contact',
      element : <ContactPage/>
    }
  ],
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
