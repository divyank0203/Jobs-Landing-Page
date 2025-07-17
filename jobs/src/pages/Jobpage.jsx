import React from 'react'

import { useParams, useLoaderData } from 'react-router-dom';
import Spinner from '../components/Spinner';

function Jobpage() {
    const job = useLoaderData();

    const {id} = useParams();

    // const [job, setJobs] = useState(null);

    // const [loading, setloading] = useState(true);

    // useEffect(() => {
    //     const fetchjob = async () => {
    // try {
    //   const res = await fetch(`/api/jobs/${id}`);
    //   const data = await res.json();
    //   setJobs(data);
    // } catch(error){
    //   console.log('Error fetching data', error);
    // } finally {
    //   setloading(false);
    // } 
    //     }
    //     fetchjob()
    // }, [])

  return (
    
    (
        <h1>{job.description}</h1>
    )
    
  )
}

const jobLoader = async ({params}) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export {Jobpage as default, jobLoader};