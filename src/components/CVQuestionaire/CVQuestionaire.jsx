import { useState } from 'react'
import './CVQuestionaire.css'


function CVQuestionaire({
    handleInputChangeChild,
    handleInputEducationListChildren,
    handleNewEducationListChildren,
    handleInputCertsAndSkillsChildren,
    handleNewCertsAndSkillsChildren,
    handleInputJobsAndExperiencesChildren,
    handleNewJobsAndExperienceChildren
}) {
    return (
        <>
            <div id={"cvq-wrapper"}>
                {/*Add the personal*/}

                <section className={"cvq-section"}>
                    <h3>Personal</h3>
                    <div className={""}>
                        <input type={"text"} onChange={handleInputChangeChild} placeholder={"First name"} name={"first name"}></input>
                        <input type={"text"} onChange={handleInputChangeChild} placeholder={"Second name"}
                            name={"second name"}></input>
                        <input type={"text"} onChange={handleInputChangeChild} placeholder={"title"} name={"title"}></input>
                        <input type={"file"} placeholder={"Photo"} name={"photo"}></input>
                        <input type={"text"} onChange={handleInputChangeChild} placeholder={"Street name and number"}
                            name={"street and nr"}></input>
                        <input type={"text"} onChange={handleInputChangeChild} placeholder={"Email Address"} name={"email"}></input>
                        <input type={"text"} onChange={handleInputChangeChild} placeholder={"Phone number"} name={"phone"}></input>
                        <input type={"text"} onChange={handleInputChangeChild} placeholder={"Github profile"} name={"github"}></input>
                        <input type={"text"} onChange={handleInputChangeChild} placeholder={"Preferred Jobsite Profile"}
                            name={"jobprofile"}></input>
                        <textarea rows={4} onChange={handleInputChangeChild} placeholder={"Describe yourself"}
                            name={"self"}></textarea>
                    </div>
                </section>
                {/*Add the information like education*/}
                <section className={"cvq-section"}>
                    <h3>Education</h3>
                    <ul className={"cvq-ul"}>
                        <EducationLists
                            handleInput={handleInputEducationListChildren}
                            newEducationListChildren={handleNewEducationListChildren}
                        />
                    </ul>
                </section>
                {/*Add the information like skills or languages and certs*/}
                <section className={"cvq-section"}>
                    <h3>Certs/Skills</h3>
                    <ul className={"cvq-ul"}>
                        <CertsAndSkills
                            handleInputFromEducationLists={handleInputCertsAndSkillsChildren}
                            newCertsAndSkillsListChildren={handleNewCertsAndSkillsChildren}
                        />

                    </ul>
                </section>
                {/*Add the information like job experiences*/}
                <section className={"cvq-section"}>
                    <h3>Job and Experiences</h3>
                    <ul className={"cvq-ul"}>
                        <JobAndExperienceLists
                            handleInputFromJobAndExperienceLists={handleInputJobsAndExperiencesChildren}
                            newJobAndExperienceChildren={handleNewJobsAndExperienceChildren}
                        />
                    </ul>
                </section>
            </div>
        </>
    )
}

function DescriptionLists({ handleDescriptions, getDescriptions }) {


}
/*
When you add your job, you actually pass it into an object.
    When you press add in the job description, put it into the description object
    Then re-render the the same component with the additional list
When you also add a short description of your jobs, you first
 */
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
            //handleInputFromJobAndExperienceLists(jobAndExperienceObject)
        } else {
            console.log("Object is not complete")
        }
    }

    function handleDelete() {

    }

    function handleDescriptionClick(e) {
        console.log(newJobAndExperienceChildren)
    }
    /*if (getInformation.jobAndExperience.length > 0) {

        let current = getInformation.jobAndExperience.map((information, index) => (

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

            <li key={"zero"} data-key={"zero"}>

                <input type="text" onChange={handleChange} placeholder={"Job title"} name={"name"} ></input>
                <input type="text" onChange={handleChange} placeholder={"Employer"} name={"employer"}></input>
                <input type="text" onChange={handleChange} placeholder={"Start"} name={"start"}></input>
                <input type="text" onChange={handleChange} placeholder={"End"} name={"end"}></input>
                <DescriptionLists
                    handleDescriptions={handleDescriptionClick}
                    getDescriptions={descriptions}

                />
                <button onClick={handleClick}>Add</button>
            </li>

        )
        return (current)
    } else {*/
    return (
        <li key={"dummy"}>
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
    //}




}
function CertsAndSkills({ handleInputFromEducationLists, newCertsAndSkillsListChildren, handleDelete, handleUpdate }) {
    let certsAndSkillsChildrenObject = {}

    function handleChange(e) {
        certsAndSkillsChildrenObject[e.target.name] = e.target.defaultValue
    }

    function handleInput() {

        handleInputFromEducationLists(certsAndSkillsChildrenObject)
    }

    if (newCertsAndSkillsListChildren != null) {
        let current = newCertsAndSkillsListChildren.map((element, index) => {
            return (

                <li key={index} data-key={index}>
                    <input type={"text"} onChange={handleChange} placeholder={"Cert or Skillname"} name={"name"}
                        defaultValue={element.name}></input>
                    <input type={"text"} onChange={handleChange} placeholder={"proficiency, optional"} name={"proficiency"}
                        defaultValue={element.proficiency}></input>
                    <input type={"text"} onChange={handleChange} placeholder={"url for optional proof"} name={"proof"}
                        defaultValue={element.proof}></input>
                    <button>Update</button>
                    <button>Delete</button>
                </li>
            )
        })
        current.push(

            <li key={"zero"} data-key={"zero"}>
                <input type={"text"} onChange={handleChange} placeholder={"Cert or Skillname"} name={"name"}
                    required={true}></input>
                <input type={"text"} onChange={handleChange} placeholder={"proficiency, optional"} name={"proficiency"}></input>
                <input type={"text"} onChange={handleChange} placeholder={"url for optional proof"} name={"proof"}></input>
                <button onClick={handleInput}>Add</button>
            </li>

        )
        return (current)

    }

    return (
        <li key={"zero"}>
            <input type={"text"} onChange={handleChange} placeholder={"Cert or Skillname"} name={"name"} required={true}></input>
            <input type={"text"} onChange={handleChange} placeholder={"proficiency, optional"} name={"proficiency"}></input>
            <input type={"text"} onChange={handleChange} placeholder={"url for optional proof"} name={"proof"}></input>
            <button onClick={handleInput}>Add</button>
        </li>
    )

}


function EducationLists({ handleInput, newEducationListChildren, handleDelete }) {
    let educationObject = {}


    function handleChange(e) {
        educationObject[e.target.name] = e.target.defaultValue
    }

    function handleAdd() {

        educationObject["id"] = newEducationListChildren.length
        handleInput(educationObject)
    }


    if (newEducationListChildren.length != null) {

        let current = newEducationListChildren.map((element, index) => {
            return (

                <li data-key={index} key={index}>
                    <input type={"text"} onChange={handleChange} placeholder={"school or college"} name={"name"}
                        defaultValue={element.name}></input>
                    <input type={"text"} onChange={handleChange} placeholder={"degree"} name={"degree"}
                        defaultValue={element.degree}></input>
                    <input type={"text"} onChange={handleChange} placeholder={"Start"} name={"start"}
                        defaultValue={element.start}></input>
                    <input type={"text"} onChange={handleChange} placeholder={"End"} name={"end"} defaultValue={element.end}></input>
                    <div>
                        <label htmlFor={"finished"}>Finished</label>
                        <input id={"finished"} type={"checkbox"} name={"finished"}></input>
                    </div>
                    <button onClick={handleAdd}>Update</button>
                    <button onClick={handleDelete}>Delete</button>
                </li>

            )
        })
        current.push(
            <li data-key={"zero"} key={"zero"}>
                <input type={"text"} onChange={handleChange} placeholder={"school or college"} name={"name"}></input>
                <input type={"text"} onChange={handleChange} placeholder={"degree"} name={"degree"}></input>
                <input type={"text"} onChange={handleChange} placeholder={"Start"} name={"start"}></input>
                <input type={"text"} onChange={handleChange} placeholder={"End"} name={"end"}></input>
                <div>
                    <label htmlFor={"finished"}>Finished</label>
                    <input id={"finished"} type={"checkbox"} name={"finished"}></input>
                </div>
                <button onClick={handleAdd}>Add</button>
            </li>

        )

        return (current)
    } else {
        return (
            <li>
                <input type={"text"} onChange={handleChange} placeholder={"school or college"} name={"name"}></input>
                <input type={"text"} onChange={handleChange} placeholder={"degree"} name={"degree"}></input>
                <input type={"text"} onChange={handleChange} placeholder={"Start"} name={"start"}></input>
                <input type={"text"} onChange={handleChange} placeholder={"End"} name={"end"}></input>
                <div>
                    <label htmlFor={"finished"}>Finished</label>
                    <input id={"finished"} type={"checkbox"} name={"finished"}></input>
                </div>
                <button onClick={handleAdd}>Add</button>
            </li>
        )
    }
}

export default CVQuestionaire;