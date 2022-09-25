import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DescriptionLists from '../DescriptionLists/DescriptionLists';

function JobAndExperienceLists({liftJobsUp}) {
    const [jobs, setJobs] = useState([]);
    let hand = {};

    const handleEntryChange = (e) => {
        hand[e.target.name] = e.target.value;
    };


    const handleUpdateChange = (e) => {
        let id = e.target.parentElement.dataset.key;
        let objects = jobs.map((job) => {
            if (job.id === id) {
                job[e.target.name] = e.target.value;
                return job;
            } else {
                return job;
            }
        });
        setJobs(objects);
    };


    const handleAddClick = (e) => {
        hand["id"] = uuidv4();
        setJobs([...jobs, hand]);
        let m = e.target.parentElement.getElementsByTagName("input");
        for (let i = 0; i < m.length; i++) {
            m[i].target.value = "";
        }
    };

    const handleDelete = (e) => {
        let id = e.target.dataset.key;
        setJobs(jobs.filter((job) => job.id !== id));
    };



    return (
        <>
            { jobs.map((job) => (

                <li key={ job.id } data-key={ job.id }>
                    <input type="text" onChange={ handleUpdateChange } placeholder={ "Job title" } name={ "name" } defaultValue={ job.name }></input>
                    <input type="text" onChange={ handleUpdateChange } placeholder={ "Employer" } name={ "employer" } defaultValue={ job.employer }></input>
                    <input type="text" onChange={ handleUpdateChange } placeholder={ "Start" } name={ "start" } defaultValue={ job.start }></input>
                    <input type="text" onChange={ handleUpdateChange } placeholder={ "End" } name={ "end" } defaultValue={ job.end }></input>

                    <button onClick={ handleDelete }>Delete</button>
                </li>

            )) }

            <li key={ 456 } data-key={ "jobs-entry" } >
                <input type={ "text" } onChange={ handleEntryChange } placeholder={ "Job title" } name={ "name" } required={ true }></input>
                <input type={ "text" } onChange={ handleEntryChange } placeholder={ "Employer" } name={ "employer" } required={ true }></input>
                <input type={ "text" } onChange={ handleEntryChange } placeholder={ "Start" } name={ "start" }></input>
                <input type={ "text" } onChange={ handleEntryChange } placeholder={ "End" } name={ "end" }></input>
                <ul>

                </ul>
                <button onClick={ handleAddClick }>Add</button>
            </li>
        </>
    );
}
export default JobAndExperienceLists;