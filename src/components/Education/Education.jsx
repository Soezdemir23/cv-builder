export default function Education({education}) {
    if (education.length === 0){
        return (
            <div className='information'>
                <div className='left'>
                    <p>Start and end date</p>
                </div>
                <div className='right'>
                    <h4>Education name</h4>
                        <p>What it is</p>
                        <p>when and if finished</p>
                </div>
            </div>
        )
    }
    console.log(education)
    return (
        <>
            {education.map((edu) => (
                <div className="information" key={edu.id}>
                    <div className="left">
                        <p>{edu.start === undefined ?
                            "not found":
                            edu.start} - {edu.end === undefined ?
                            "not found":
                            edu.end}
                        </p>
                    </div>
                    <div className="right">
                        <h4>{edu.name}</h4>
                        <p>{edu.degree}</p>
                        <p>{edu.finished === true? "completed": "aborted"}</p>
                    </div>
                </div>
            ))}
        </>
    )
}