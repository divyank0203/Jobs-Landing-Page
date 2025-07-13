import React from 'react'
import Hero from '../components/Hero.jsx'
import Maincards from '../components/Maincards.jsx'
import Jobscards from '../components/Jobcards.jsx'
import Viewalljobs from '../components/Viewalljobs.jsx'

function Homepage() {
  return (
    <>
    <Hero/>
    <Maincards/>
    <Jobscards/>
    <Viewalljobs/>
    </>
  )
}

export default Homepage