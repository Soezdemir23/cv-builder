import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function CertsAndSkills({ certs }) {

    return (<>
        { certs.map((cert) => (

            <li key={ cert.id } data-key={ cert.id }>
                <input type={ "text" } placeholder={ "Cert or Skillname" } name={ "name" }
                    defaultValue={ cert.name }></input>
                <input type={ "text" } placeholder={ "proficiency, optional" } name={ "proficiency" }
                    defaultValue={ cert.proficiency }></input>
                <input type={ "text" } placeholder={ "url for optional proof" } name={ "proof" }
                    defaultValue={ cert.proof }></input>
                <button>Delete</button>
            </li>
        )) }
        <li key={ "CAS-zero" } data-key={ "CAS-entry" }>

            <input type={ "text" } placeholder={ "Cert or Skillname" } name={ "name" } defaultValue=""></input>
            <input type={ "text" } placeholder={ "proficiency, optional" } name={ "proficiency" } defaultValue=""></input>
            <input type={ "text" } placeholder={ "url for optional proof" } name={ "proof" } defaultValue=""></input>
            <button>Add</button>
        </li >
    </>);
}

export default CertsAndSkills;