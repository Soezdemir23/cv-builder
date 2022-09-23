import { useState } from 'react'
import DescriptionLists from '../DescriptionLists/DescriptionLists'

function JobAndExperienceLists({ handleInputFromJobAndExperienceLists, newJobAndExperienceChildren }) {
    let jobAndExperienceObject = {}
    let [descriptions, setDescription] = useState([])
    console.log("")
    function handleChange(e) {
        jobAndExperienceObject[e.target.name] = e.target.value

    }

    function handleClick() {
        console.log("getInformation in handleClick", newJobAndExperienceChildren)
        console.log("jobAndExperienceModel", jobAndExperienceObject)
        if (Object.keys(jobAndExperienceObject).length >= 4) {
            if (newJobAndExperienceChildren.length === 0) {
                console.log('kiff');
                jobAndExperienceObject["id"] = 0
            } else {
                console.log('siff');
                jobAndExperienceObject["id"] = newJobAndExperienceChildren.length
            }
            handleInputFromJobAndExperienceLists(jobAndExperienceObject)
        } else {
            console.log("Object is not complete")
        }
    }

    function handleDelete() {

    }

    function handleDescriptionClick(e) {
        console.log(newJobAndExperienceChildren)
    }
    //check
    if (newJobAndExperienceChildren.length > 0) {

        let current = newJobAndExperienceChildren.map((information, index) => (

            <li key={index} data-key={index}>
                {console.table(information)}
                <input type="text" onChange={handleChange} placeholder={"Job title"} name={"name"} defaultValue={information.name}></input>
                <input type="text" onChange={handleChange} placeholder={"Employer"} name={"employer"} defaultValue={information.employer}></input>
                <input type="text" onChange={handleChange} placeholder={"Start"} name={"start"} defaultValue={information.start}></input>
                <input type="text" onChange={handleChange} placeholder={"End"} name={"end"} defaultValue={information.end}></input>
                <DescriptionLists />
                <button onClick={handleClick}>Update</button>
                <button onClick={handleDelete}>Delete</button>
            </li>

        ))

        current.push(

            <li key={"zero"} data-key={"zero"} id="zero-child">

                <input type={"text"} onChange={handleChange} placeholder={"Job title"} name={"name"} defaultValue=""></input>
                <input type={"text"} onChange={handleChange} placeholder={"Employer"} name={"employer"} defaultValue=""></input>
                <input type={"text"} onChange={handleChange} placeholder={"Start"} name={"start"} defaultValue=""></input>
                <input type={"text"} onChange={handleChange} placeholder={"End"} name={"end"} defaultValue=""></input>
                <DescriptionLists
                    handleDescriptions={handleDescriptionClick}
                    getDescriptions={descriptions}

                />
                <button onClick={handleClick}>Add</button>
            </li>

        )
        return (current)
    } else {

        return (
            <li key={"dummy"} >
                <input type={"text"} onChange={handleChange} placeholder={"Job title"} name={"name"} required={true}></input>
                <input type={"text"} onChange={handleChange} placeholder={"Employer"} name={"employer"} required={true}></input>
                <input type={"text"} onChange={handleChange} placeholder={"Start"} name={"start"}></input>
                <input type={"text"} onChange={handleChange} placeholder={"End"} name={"end"}></input>
                <ul>

                    <DescriptionLists
                        getDescriptions={descriptions}
                        handleDescriptions={handleDescriptionClick}
                    />

                </ul>
                <button onClick={handleClick}>Add</button>
            </li>
        )
    }
}

export default JobAndExperienceLists