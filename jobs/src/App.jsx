import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Maincards from './components/Maincards'
import Jobcards from './components/Jobcards'
import Card from './components/Card'
import Viewalljobs from './components/Viewalljobs'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero
    title = 'Employ and Get Employed'/>
    
    <Maincards/>

    <Jobcards/>
    
    <Viewalljobs/>





    </>
  )
}

export default App