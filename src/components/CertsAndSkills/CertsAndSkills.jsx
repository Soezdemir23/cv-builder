import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function CertsAndSkills() {
    const newCertsAndSkillsListChildren = [];
    if (newCertsAndSkillsListChildren.length > 0) {
        console.log("more certs");
        let current = newCertsAndSkillsListChildren.map((element, index) => (

            <li key={ index } data-key={ index }>
                <input type={ "text" } placeholder={ "Cert or Skillname" } name={ "name" }
                    defaultValue={ element.name }></input>
                <input type={ "text" } placeholder={ "proficiency, optional" } name={ "proficiency" }
                    defaultValue={ element.proficiency }></input>
                <input type={ "text" } placeholder={ "url for optional proof" } name={ "proof" }
                    defaultValue={ element.proof }></input>
                <button>Update</button>
                <button>Delete</button>
            </li>
        ));
        current.push(

            <li key={ "CAS-zero" } data-key={ "CAS-zero" }>

                <input type={ "text" } placeholder={ "Cert or Skillname" } name={ "name" } defaultValue=""></input>
                <input type={ "text" } placeholder={ "proficiency, optional" } name={ "proficiency" } defaultValue=""></input>
                <input type={ "text" } placeholder={ "url for optional proof" } name={ "proof" } defaultValue=""></input>
                <button>Add</button>
            </li >

        );
        return (current);
    } else {
        console.log("no certs");
        return (
            <li key={ "CAS-dummy" } data-key={ "CAS-dummy" } >
                <input type={ "text" } placeholder={ "Cert or Skillname" } name={ "name" } ></input>
                <input type={ "text" } placeholder={ "proficiency, optional" } name={ "proficiency" } ></input>
                <input type={ "text" } placeholder={ "url for optional proof" } name={ "proof" }></input>
                <button >Add</button>
            </li>
        );
    }

}

export default CertsAndSkills;