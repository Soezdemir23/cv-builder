import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function EducationLists({ liftEducationUp }) {
    const [education, setEducation] = useState([]);
    //exclusively for the use for the data entry
    let hand = {};

    //if the user enters something inside the entry element, then change the hand object
    const handleEntryChange = (e) => {
        e.target.type === "text" ?
            hand[e.target.name] = e.target.value :
            hand[e.target.name] = e.target.checked;

    };
    //if the user enters something in the previous entries
    const handleUpdateChange = (e) => {
        let id = e.target.parentElement.dataset.key;
        let objects = education.map((educationDetails) => {
            if (educationDetails.id === id) {
                if (e.target.type === "text") {
                    educationDetails[e.target.name] = e.target.value;
                    return educationDetails;
                } else {
                    educationDetails[e.target.name] = e.target.checked;
                    return educationDetails;
                }
            } else {
                return educationDetails;
            }
        });
        setEducation(objects);
        liftEducationUp(education, "education");
    };

    const handleAddClick = (e) => {
        hand["id"] = uuidv4();
        setEducation([...education, hand]);
        let m = e.target.parentElement.getElementsByTagName("input");
        for (let i = 0; i < m.length; i++) {
            m[i].type === "text" ? m[i].value = "" : m[i].checked = false;
        }
        liftEducationUp(education, "education");
    };

    const handleDeleteClick = (e) => {
        let id = e.target.dataset.key;
        setEducation(education.filter((education) => education.id !== id));
        liftEducationUp(education, "education");
    };

    return (<> { education.map((element) => (
        <li data-key={ element.id } key={ element.id }>
            <input onChange={ handleUpdateChange } type={ "text" } placeholder={ "school or college" } name={ "name" }
                defaultValue={ element.name }></input>
            <input onChange={ handleUpdateChange } type={ "text" } placeholder={ "degree" } name={ "degree" }
                defaultValue={ element.degree }></input>
            <input onChange={ handleUpdateChange } type={ "text" } placeholder={ "Start" } name={ "start" }
                defaultValue={ element.start }></input>
            <input onChange={ handleUpdateChange } type={ "text" } placeholder={ "End" } name={ "end" }
                defaultValue={ element.end }></input>
            <div data-key={ element.id }>
                <label htmlFor={ "finished" }>Finished</label>
                <input onChange={ handleUpdateChange } id={ "finished" } type={ "checkbox" } name={ "finished" } defaultChecked={ element.finished }></input>
            </div>
            <button data-key={ element.id } onClick={ handleDeleteClick } >Delete</button>
        </li>
    )) }
        <li key={ 123 } data-key={ "education-entry" }>
            <input type={ "text" } onChange={ handleEntryChange } placeholder={ "school or college" } name={ "name" }></input>
            <input type={ "text" } onChange={ handleEntryChange } placeholder={ "degree" } name={ "degree" }></input>
            <input type={ "text" } onChange={ handleEntryChange } placeholder={ "Start" } name={ "start" }></input>
            <input type={ "text" } onChange={ handleEntryChange } placeholder={ "End" } name={ "end" }></input>
            <div>
                <label htmlFor={ "finished" }>Finished</label>
                <input id={ "finished" } onChange={ handleEntryChange } type={ "checkbox" } name={ "finished" }></input>
            </div>
            <button onClick={ handleAddClick }>Add</button>
        </li>
    </>
    );

}

export default EducationLists;