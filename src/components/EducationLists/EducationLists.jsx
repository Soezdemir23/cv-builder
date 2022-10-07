import { useState } from "react";
function EducationLists({ school, onChange, onAddClick, onDeleteClick }) {
    return (<> { school.map((element) => (
        <li data-key={ element.id } key={ element.id }>
            <input data-type="school" type={ "text" } placeholder={ "school or college" } name={ "name" }
                defaultValue={ element.name } onChange={ onChange }></input>
            <input data-type="school" type={ "text" } placeholder={ "degree" } name={ "degree" }
                defaultValue={ element.degree } onChange={ onChange }></input>
            <input data-type="school" type={ "text" } placeholder={ "Start" } name={ "start" }
                defaultValue={ element.start } onChange={ onChange }></input>
            <input data-type="school" type={ "text" } placeholder={ "End" } name={ "end" }
                defaultValue={ element.end } onChange={ onChange }></input>
            <div data-key={ element.id }>
                <label htmlFor={ "finished" }>Finished</label>
                <input data-type="school" id={ "finished" } type={ "checkbox" } name={ "finished" } defaultChecked={ element.finished } onChange={ onChange }></input>
            </div>
            <button data-key={ element.id } onClick={ onDeleteClick }  >Delete</button>
        </li>
    )) }
        <li key={ 123 } data-key={ "education-entry" }>
            <input data-type="school" onChange={ onChange } type={ "text" } placeholder={ "school or college" } name={ "name" }></input>
            <input data-type="school" onChange={ onChange } type={ "text" } placeholder={ "degree" } name={ "degree" }></input>
            <input data-type="school" onChange={ onChange } type={ "text" } placeholder={ "Start" } name={ "start" }></input>
            <input data-type="school" onChange={ onChange } type={ "text" } placeholder={ "End" } name={ "end" }></input>
            <div data-key={ "education-entry" }>
                <label htmlFor={ "finished" }>Finished</label>
                <input data-type="school" onChange={ onChange } id={ "finished" } type={ "checkbox" } name={ "finished" }></input>
            </div>
            <button onClick={ onAddClick }>Add</button>
        </li>
    </>
    );

}

export default EducationLists;