
function CertsAndSkills({ certs, onChange, onAddClick, onDeleteClick }) {

    return (<>
        { certs.map((cert) => (

            <li className="cert" key={ cert.id } data-key={ cert.id }>
                <input onChange={ onChange } type={ "text" } placeholder={ "Cert or Skillname" } name={ "name" }
                    defaultValue={ cert.name }></input>
                <input onChange={ onChange } type={ "text" } placeholder={ "proficiency, optional" } name={ "proficiency" }
                    defaultValue={ cert.proficiency }></input>
                <input onChange={ onChange } type={ "text" } placeholder={ "url for optional proof" } name={ "proof" }
                    defaultValue={ cert.proof }></input>
                <button onClick={ onDeleteClick } >Delete</button>
            </li>
        )) }
        <li className="cert" key={ "CAS-zero" } data-key={ "CAS-entry" }>

            <input onChange={ onChange } type={ "text" } placeholder={ "Cert or Skillname" } name={ "name" } defaultValue=""></input>
            <input onChange={ onChange } type={ "text" } placeholder={ "proficiency, optional" } name={ "proficiency" } defaultValue=""></input>
            <input onChange={ onChange } type={ "text" } placeholder={ "url for optional proof" } name={ "proof" } defaultValue=""></input>
            <button onClick={ onAddClick }>Add</button>
        </li >
    </>);
}

export default CertsAndSkills;