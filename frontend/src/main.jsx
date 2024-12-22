import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header  from './components/header/header'
import Home from './components/home/home'
import Layout from './components/layout'
import News from './components/news/NewsFetcher'
import Contact from './components/contact/contact'
import Login from './components/Login/Login'

import CourseRecommendation from './components/courcerecommend/CourseRecommend';
import Collab from './components/collab/DashBoard'

import './index.css'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import App from './App'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element = {<Layout /> }>
      <Route path='' element={<Home />}  />  
      
      <Route path='contact' element={<Contact />}  />  
       
      <Route path='todo' element={<App />}  />  
      <Route path='courcerecommend' element={<CourseRecommendation />}  />  
      <Route path='login' element={<Login/>}/>
      <Route path='collab' element={<Collab/>}/>
      <Route path='news' element={<News/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>

  </StrictMode>,
)

