import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Maincards from './components/Maincards'
import Jobcards from './components/Jobcards'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero
    title = 'Employ and Get Employed'/>
    
    <Maincards/>

    <Jobcards/>
    



    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>

    </>
  )
}

export default App