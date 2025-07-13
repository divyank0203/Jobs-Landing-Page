import React from 'react'
import { useState, useEffect } from 'react';
import jobs from '../jobs.json'
import Joblisting from '../components/Joblisting';

function Jobspage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
      const res = await fetch('http://localhost:8000/jobs');
      const data = await res.json();
      setJobs(data);
    } catch(error){
      console.log('Error fetching data', error);
    } finally {
      setloading(false);
    }
  }
    fetchJobs();
   }, [])

  return (

    <div>
            <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) =>(
                <Joblisting key={job.id} job={job} />
          ))}


        </div>
      </div>
    </section>

    </div>
  )
}

export default Jobspage