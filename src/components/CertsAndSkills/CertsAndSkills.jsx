import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function CertsAndSkills({ liftCertsUp }) {
    const [certs, setCerts] = useState([]);
    let hand = {};

    const handleEntryChange = (e) => {
        hand[e.target.name] = e.target.value;
    };

    const handleUpdateChange = (e) => {
        let id = e.target.parentElement.dataset.key;
        let objects = certs.map((certification) => {
            if (certification.id === id) {
                certification[e.target.name] = e.target.value;
                return certification;
            } return certification;
        });
        setCerts(objects);
        liftCertsUp(certs, "certs");
    };


    const handleClickAdd = (e) => {
        hand["id"] = uuidv4();
        setCerts([...certs, hand]);
        let m = e.target.parentElement.getElementsByTagName("input");
        for (let i = 0; i < m.length; i++) {
            m[i].type === "text" ? m[i].value = "" : m[i].checked = false;
        }
        liftCertsUp(certs, "certs");
    };

    const handleDeleteClick = (e) => {
        let id = e.target.dataset.key;
        setCerts(certs.filter((cert) => cert.id !== id));
        liftCertsUp(certs, "certs");
    };

    return (<>
        { certs.map((cert) => (

            <li key={ cert.id } data-key={ cert.id }>
                <input type={ "text" } onChange={ handleUpdateChange } placeholder={ "Cert or Skillname" } name={ "name" }
                    defaultValue={ cert.name }></input>
                <input type={ "text" } onChange={ handleUpdateChange } placeholder={ "proficiency, optional" } name={ "proficiency" }
                    defaultValue={ cert.proficiency }></input>
                <input type={ "text" } onChange={ handleUpdateChange } placeholder={ "url for optional proof" } name={ "proof" }
                    defaultValue={ cert.proof }></input>
                <button data-key={ cert.id } onClick={ handleDeleteClick }>Delete</button>
            </li>
        )) }
        <li key={ 234 } data-key={ "certification-entry" }>

            <input type={ "text" } onChange={ handleEntryChange } placeholder={ "Cert or Skillname" } name={ "name" } defaultValue=""></input>
            <input type={ "text" } onChange={ handleEntryChange } placeholder={ "proficiency, optional" } name={ "proficiency" } defaultValue=""></input>
            <input type={ "text" } onChange={ handleEntryChange } placeholder={ "url for optional proof" } name={ "proof" } defaultValue=""></input>
            <button onClick={ handleClickAdd }>Add</button>
        </li >

    </>);
}

export default CertsAndSkills;