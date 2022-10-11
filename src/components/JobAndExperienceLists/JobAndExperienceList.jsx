import DescriptionLists from '../DescriptionLists/DescriptionLists';

function JobAndExperienceLists({ jobs, onChange, onAddClick, onDeleteClick }) {
    console.log(jobs)
    return (
        <>
            { jobs.map((job) => (

                <li className='job' key={ job.id } data-key={ job.id }>
                    <input type="text" onChange={ onChange } placeholder={ "Job title" } name={ "name" } defaultValue={ job.name }></input>
                    <input type="text" onChange={ onChange } placeholder={ "Employer" } name={ "employer" } defaultValue={ job.employer }></input>
                    <input type="text" onChange={ onChange } placeholder={ "Start" } name={ "start" } defaultValue={ job.start }></input>
                    <input type="text" onChange={ onChange } placeholder={ "End" } name={ "end" } defaultValue={ job.end }></input>
                    <ul className='DL-ul'>
                        {/*<DescriptionLists
                            liftDescriptionUp={ } /> */}
                    </ul>
                    <button onClick={ onDeleteClick }>Delete</button>
                </li>

            )) }

            <li className='job' key={ 456 } data-key={ "jobs-entry" } >
                <input type={ "text" } onChange={ onChange } placeholder={ "Job title" } name={ "name" } required={ true }></input>
                <input type={ "text" } onChange={ onChange } placeholder={ "Employer" } name={ "employer" } required={ true }></input>
                <input type={ "text" } onChange={ onChange } placeholder={ "Start" } name={ "start" }></input>
                <input type={ "text" } onChange={ onChange } placeholder={ "End" } name={ "end" }></input>
                <ul className='DL-ul'>
                    {/*<DescriptionLists
                        liftDescriptionUp={ handleAddDescriptions }
                        />*/}
                </ul>
                <button onClick={ onAddClick }>Add</button>
            </li>
        </>
    );
};
export default JobAndExperienceLists;