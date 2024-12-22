import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header  from './components/header/header'
import Home from './components/home/home'
import Layout from './components/layout'

import Contact from './components/contact/contact'
import Login from './components/Login/Login'

import CourseRecommendation from './components/courcerecommend/Course'
import Collab from './components/collab/DashBoard'

import './index.css'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import App from './App'
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children: [
//       {
//         path:"",
//         element:<Home/>,
//       },
      
//       {
//         path:"about",
//         element:<About/>,
//       },
      
//       {
//         path:"contact",
//         element:<Contact/>,
//       },
      
//     ]

//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element = {<Layout /> }>
      <Route path='' element={<Home />}  />  
      
      <Route path='contact' element={<Contact />}  />  
       
      <Route path='todo' element={<App />}  />  
      <Route path='courcerecommend' element={<CourseRecommendation />}  />  
      <Route path='login' element={<Login/>}/>
      <Route path='collab' element={<Collab/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>

  </StrictMode>,
)

