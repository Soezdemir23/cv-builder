export default function Jobs({ jobs }) {
    if (jobs.length === 0) {
        return (
            <div className='information'>
                <div className='left'>
                    <p>date from and to </p>
                </div>
                <div className='right'>
                    <h4>Name of company</h4>
                    <h5>Job</h5>
                    <h6>The deeds:</h6>
                    <ul >
                        <li>This</li>
                        <li>that</li>
                        <li>a little bit of this</li>
                        <li>Take a piss?</li>
                    </ul>
                </div>
            </div>);

    } else {
        return (
            <>
                { jobs.map((job) => (
                    <div className="information" key={ job.id }>
                        <div className="left">
                            <p>{ job.start === undefined ?
                                'no start date' : job.start } - { job.end === undefined ?
                                    'no end date' : job.end }
                            </p>
                        </div>
                        <div className="right">
                            <h4>{ job.employer === undefined ? "No company" : job.employer } </h4>
                            <h5>{ job.name === undefined ? "Not definable" : job.name }</h5>

                            <h6>description</h6>
                            { job.descriptions === undefined ?
                                <li>No description</li> :
                                job.descriptions.map((description) => (
                                    <li key={ description.id }>{ description.short }</li>
                                )) }
                        </div>
                    </div>
                )) }
            </>
        );
    }

}