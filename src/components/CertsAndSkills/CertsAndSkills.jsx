import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function CertsAndSkills({liftCertsUp}) {
    const [certs, setCerts] = useState([])
    let hand = {}

    const handleEntryChange = (e)=> {
            hand[e.target.name] = e.target.value;
    }

    const handleUpdateChange = (e) => {
        let id = e.target.parentElement.dataset.key
        let objects = certs.map((cert) => {
            if (cert.id === id) {
                cert[e.target.name] = e.target.value
                return cert
            } else {
                return cert
            }
        })
        setCerts(objects)
        liftCertsUp(certs, "certs")
    }

    const handleAddClick = (e) => {
        hand["id"] = uuidv4()
        setCerts([...certs, hand])
        let m = e.target.parentElement.getElementsByTagName("input")
        for (let i = 0; i < m.length; i++) {
        m[i].value = ""            
        }
        liftCertsUp(certs, "certs")
    }

    const handleDeleteClick = (e) => {
        let id = e.target.dataset.key
        setCerts(certs.filter((cert) => cert.id !== id))
        liftCertsUp(certs, "cert")
    }
    return(<> 
    {certs.map((cert) => (

            <li key={ cert.id } data-key={ cert.id }>
                <input type={ "text" } onChange={handleUpdateChange} placeholder={ "Cert or Skillname" } name={ "name" }
                    defaultValue={ cert.name }></input>
                <input type={ "text" } onChange={handleUpdateChange} placeholder={ "proficiency, optional" } name={ "proficiency" }
                    defaultValue={ cert.proficiency }></input>
                <input type={ "text" } onChange={handleUpdateChange} placeholder={ "url for optional proof" } name={ "proof" }
                    defaultValue={ cert.proof }></input>
                <button onClick={handleDeleteClick}>Delete</button>
            </li>
        ))}
            <li key={ "CAS-zero" } data-key={ "CAS-zero" }>

                <input type={ "text" } onChange={handleEntryChange}placeholder={ "Cert or Skillname" } name={ "name" } defaultValue=""></input>
                <input type={ "text" } onChange={handleEntryChange}placeholder={ "proficiency, optional" } name={ "proficiency" } defaultValue=""></input>
                <input type={ "text" } onChange={handleEntryChange}placeholder={ "url for optional proof" } name={ "proof" } defaultValue=""></input>
                <button onClick={handleAddClick}>Add</button>
            </li >
        </>);
}

export default CertsAndSkills;