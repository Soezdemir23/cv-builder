
function JobAndExperienceLists({ jobs, jobHand, descriptionList, descriptionHand, onChange, onAddClick, onDeleteClick }) {

    return (
        <>

            { jobs.map((job) => (

                <li className='job' key={ job.id } data-key={ job.id }>
                    <form onSubmit={ onDeleteClick } data-key={ job.id } className="job-added">
                        <input required={ true } type="text" onChange={ onChange } placeholder={ "Job title" } name={ "name" } defaultValue={ job.name }></input>
                        <input required={ true } type="text" onChange={ onChange } placeholder={ "Employer" } name={ "employer" } defaultValue={ job.employer }></input>
                        <input required={ true } type="text" onChange={ onChange } placeholder={ "Start" } name={ "start" } defaultValue={ job.start }></input>
                        <input required={ true } type="text" onChange={ onChange } placeholder={ "End" } name={ "end" } defaultValue={ job.end }></input>
                        <h3>Job/Project description</h3>
                        <ul style={ { position: "relative", left: "1rem" } } className='descriptionlist-ul' data-key={ job.id }>
                            { job.descriptions.map((description) => (
                                <li key={ description.id } data-key={ description.id } className="description-saved">
                                    <input type={ "text" } name ="short" defaultValue={ description.short } onChange={ onChange } ></input>
                                    <button onClick={ onDeleteClick }>Delete the description</button>
                                </li>
                            )) }
                            <li className="description-add-to-saved" data-key={ "description-add-to-saved" }>
                                <input onChange={ onChange } type={ "text" } name={ "short" } data-key="description.id"></input>
                                <button onClick={ onAddClick }>Add description</button>
                            </li>
                        </ul>

                        <button onChange={ onChange }>Delete the job</button>
                    </form>
                </li>

            )) }
            {/*This is the default questionnare */ }
            <li className='job' key={ 456 } data-key={ "jobs-entry" } >
                <form className="job" onSubmit={ onAddClick } data-key={ "jobs-entry" }>
                    <input required={ true } type={ "text" } onChange={ onChange } placeholder={ "Job title" } name={ "name" }></input>
                    <input required={ true } type={ "text" } onChange={ onChange } placeholder={ "Employer" } name={ "employer" }></input>
                    <input required={ true } type={ "text" } onChange={ onChange } placeholder={ "Start" } name={ "start" }></input>
                    <input required={ true } type={ "text" } onChange={ onChange } placeholder={ "End" } name={ "end" }></input>
                    <h3>Job descriptions</h3>
                    <ul>
                        { descriptionList.map((descriptions) => {

                            return (
                                < li key={ descriptions.id } data-key={ descriptions.id } className="description-default" >
                                    <input name="short" type={ "text" } defaultValue={ descriptions.short } onChange={ onChange }></input>
                                    <button onClick={ onDeleteClick }>Delete Description</button>
                                </li>
                            );
                        }) }


                        < li className="description" data-key={ "descriptions-entry" }>
                            <input name="short" onChange={ onChange }></input>
                            <button onClick={ onAddClick }>Add Descrption</button>
                        </li>
                    </ul>
                    <button>Add</button>
                </form>
            </li>
        </>
    );
};
export default JobAndExperienceLists;