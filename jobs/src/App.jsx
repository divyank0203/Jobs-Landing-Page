import React from 'react'
import { Route,
   createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    } from 'react-router-dom';
import Navbar from './components/navbar'
import Notfoundpage from './pages/notfoundpage';
import Mainlayout from './layouts/Mainlayout';
import Homepage from './pages/Homepage'
import Jobspage from './pages/Jobspage';
import Jobpage, { jobLoader } from './pages/jobpage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Mainlayout/>}>
  <Route index element = { <Homepage/> } />
  <Route path='/jobs' element = { <Jobspage/> } />
  <Route path='/jobs/:id' element = { <Jobpage/> } loader={jobLoader} />
  <Route path='*' element = { <Notfoundpage/> } />
  
  </Route>
  )
)

const App = () => {
  return (
    <>
  <RouterProvider router={router}/>
   
    </>
  )
}

export default App