import { useState } from 'react';
import DescriptionLists from '../DescriptionLists/DescriptionLists';

function JobAndExperienceLists() {
    const newJobAndExperienceChildren = [];

    return (
        <>
            { newJobAndExperienceChildren.map((information, index) => (

                <li key={ index } data-key={ index }>
                    { console.table(information) }
                    <input type="text" placeholder={ "Job title" } name={ "name" } defaultValue={ information.name }></input>
                    <input type="text" placeholder={ "Employer" } name={ "employer" } defaultValue={ information.employer }></input>
                    <input type="text" placeholder={ "Start" } name={ "start" } defaultValue={ information.start }></input>
                    <input type="text" placeholder={ "End" } name={ "end" } defaultValue={ information.end }></input>
                    <DescriptionLists />
                    <button>Update</button>
                    <button >Delete</button>
                </li>

            ))

            }
            <JAEEntry />
        </>);


}



function JAEEntry({ handleChangeLift, descriptionsDown, handleDescriptionClickLift, handleClickLift }) {

    return (
        <li key={ "JAE-Dummy" } >
            <input type={ "text" } placeholder={ "Job title" } name={ "name" } required={ true }></input>
            <input type={ "text" } placeholder={ "Employer" } name={ "employer" } required={ true }></input>
            <input type={ "text" } placeholder={ "Start" } name={ "start" }></input>
            <input type={ "text" } placeholder={ "End" } name={ "end" }></input>
            <ul>
                <DescriptionLists
                    getDescriptions={ descriptionsDown }
                    handleDescriptions={ handleDescriptionClickLift }
                />
            </ul>
            <button onClick={ handleClickLift }>Add</button>
        </li>
    );
}

export default JobAndExperienceLists;