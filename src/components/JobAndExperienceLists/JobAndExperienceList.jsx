
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
                    <ul className='descriptionlist-ul' data-key={job.id}>
                        {/*this jobs component should see if there is a job.descriptions property.
                        If there is one, then map through it.
                         Add the below "Add Description" component to it
                        If there is none, then simply only render the "Add" component to it.
                        */}

                        {
                        job.descriptions === undefined?
                            []
                        : 
                        job.descriptions.map((description) => (
                            <li key={description.id} data-key={description.id}>
                                <p>{description.id}</p>
                            </li>))
                        }
                        <li className='descriptionlist' data-key={"description-entry"}>
                            <input type={"text"} name="short" placeholder='short-description' onChange={onChange}></input>
                            <button onClick={onAddClick}>Add</button>
                        </li>
                        {/*<DescriptionLists
                            parentId= {job.id}
                            onChange={onChange}
                            onAddClick={onAddClick}
                            onDeleteClick={onDeleteClick}
                            descriptions={job.descriptions}
                            
                            />
            */}
                            </ul>

                    <button onClick={ onDeleteClick }>Delete</button>
                </li>

            )) }

            <li className='job' key={ 456 } data-key={ "jobs-entry" } >
                <input type={ "text" } onChange={ onChange } placeholder={ "Job title" } name={ "name" }></input>
                <input type={ "text" } onChange={ onChange } placeholder={ "Employer" } name={ "employer" }></input>
                <input type={ "text" } onChange={ onChange } placeholder={ "Start" } name={ "start" }></input>
                <input type={ "text" } onChange={ onChange } placeholder={ "End" } name={ "end" }></input>
                {/*
                For now, let's remove this until I have a found a solution to make it work
                
                <ul className='DL-ul'>
                    <DescriptionLists
                        liftDescriptionUp={}
                        />
            </ul>*/}
                <button onClick={ onAddClick }>Add</button>
            </li>
        </>
    );
};
export default JobAndExperienceLists;