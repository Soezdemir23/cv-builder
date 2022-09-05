import './CVQuestionaire.css'


function CVQuestionaire({
                            handleInputChangeChild,
                            handleInputEducationListChildren,
                            handleNewEducationListChildren,
                            handleInputCertsAndSkillsChildren,
                            handleNewCertsAndSkillsChildren,
                            handleInputJobsAndExperiencesChildren,
                            handleNewJobsAndExperiencesChildren
                        }) {
    return (
        <>
            <div id={"cvq-wrapper"}>
                {/*Add the personal*/}

                <section className={"cvq-section"}>
                    <h3>Personal</h3>
                    <div className={""}>
                        <input onChange={handleInputChangeChild} placeholder={"First name"} name={"first name"}></input>
                        <input onChange={handleInputChangeChild} placeholder={"Second name"}
                               name={"second name"}></input>
                        <input onChange={handleInputChangeChild} placeholder={"title"} name={"title"}></input>
                        <input type={"file"} placeholder={"Photo"} name={"photo"}></input>
                        <input onChange={handleInputChangeChild} placeholder={"Street name and number"}
                               name={"street and nr"}></input>
                        <input onChange={handleInputChangeChild} placeholder={"Email Address"} name={"email"}></input>
                        <input onChange={handleInputChangeChild} placeholder={"Phone number"} name={"phone"}></input>
                        <input onChange={handleInputChangeChild} placeholder={"Github profile"} name={"github"}></input>
                        <input onChange={handleInputChangeChild} placeholder={"Preferred Jobsite Profile"}
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
                            NewJobAndExperienceListsChildren={handleNewJobsAndExperiencesChildren}

                        />

                    </ul>
                </section>
            </div>
        </>
    )
}


function JobAndExperienceLists({handleInputFromJobAndExperienceLists, newJobsAndExperiencesListsChildren}) {
    let jobAndExperienceObject = {}

    function handleChange(e) {
        jobAndExperienceObject[e.target.name] = e.target.value
    }

    function handleClick() {
        console.log(jobAndExperienceObject)
        handleInputFromJobAndExperienceLists(jobAndExperienceObject)
    }

    console.log("read", newJobsAndExperiencesListsChildren)
    return (
        <li>
            <input onChange={handleChange} placeholder={"Job title"} name={"name"} required={true}></input>
            <input onChange={handleChange} placeholder={"Employer"} name={"employer"}></input>
            <input onChange={handleChange} placeholder={"Start"} name={"start"}></input>
            <input onChange={handleChange} placeholder={"End"} name={"end"}></input>
            <ul>{/*This is going to be the next component*/}
                <li>
                    <input placeholder={"Short description of job"}></input>
                    <button>Add</button>
                </li>
            </ul>
            <button onClick={handleClick}>Add</button>
        </li>
    )
}

function CertsAndSkills({handleInputFromEducationLists, newCertsAndSkillsListChildren, handleDelete, handleUpdate}) {
    let certsAndSkillsChildrenObject = {}

    function handleChange(e) {
        certsAndSkillsChildrenObject[e.target.name] = e.target.value

    }

    function handleInput() {

        handleInputFromEducationLists(certsAndSkillsChildrenObject)
    }

    if (newCertsAndSkillsListChildren.length > 0) {
        let current = newCertsAndSkillsListChildren.map((element, index) => {
            return (
                <>
                    <li key={index} data-key={index}>
                        <input onChange={handleChange} placeholder={"Cert or Skillname"} name={"name"}
                               value={element.name}></input>
                        <input onChange={handleChange} placeholder={"proficiency, optional"} name={"proficiency"}
                               value={element.proficiency}></input>
                        <input onChange={handleChange} placeholder={"url for optional proof"} name={"proof"}
                               value={element.proof}></input>
                        <button>Update</button>
                        <button>Delete</button>
                    </li>
                </>)
        })
        current.push(
            <>
                <li key={"zero"} data-key={"zero"}>
                    <input onChange={handleChange} placeholder={"Cert or Skillname"} name={"name"}
                           required={true}></input>
                    <input onChange={handleChange} placeholder={"proficiency, optional"} name={"proficiency"}></input>
                    <input onChange={handleChange} placeholder={"url for optional proof"} name={"proof"}></input>
                    <button onClick={handleInput}>Add</button>
                </li>
            </>
        )
        return (current)

    }

    return (
        <li>
            <input onChange={handleChange} placeholder={"Cert or Skillname"} name={"name"} required={true}></input>
            <input onChange={handleChange} placeholder={"proficiency, optional"} name={"proficiency"}></input>
            <input onChange={handleChange} placeholder={"url for optional proof"} name={"proof"}></input>
            <button onClick={handleInput}>Add</button>
        </li>
    )

}


function EducationLists({handleInput, newEducationListChildren, handleDelete}) {
    let educationObject = {}


    function handleChange(e) {
        educationObject[e.target.name] = e.target.value
    }

    function handleAdd() {

        educationObject["id"] = newEducationListChildren.length
        handleInput(educationObject)
    }


    if (newEducationListChildren.length > 0) {
        let current = newEducationListChildren.map((element, index) => {
            return (
                <>
                    <li data-key={index} key={index}>
                        <input onChange={handleChange} placeholder={"school or college"} name={"name"}
                               value={element.name}></input>
                        <input onChange={handleChange} placeholder={"degree"} name={"degree"}
                               value={element.degree}></input>
                        <input onChange={handleChange} placeholder={"Start"} name={"start"}
                               value={element.start}></input>
                        <input onChange={handleChange} placeholder={"End"} name={"end"} value={element.end}></input>
                        <div>
                            <label htmlFor={"finished"}>Finished</label>
                            <input id={"finished"} type={"checkbox"} name={"finished"}></input>
                        </div>
                        <button onClick={handleAdd}>Update</button>
                        <button onClick={handleDelete}>Delete</button>
                    </li>
                </>
            )
        })
        current.push(<>
                <li data-key={"zero"} key={"zero"}>
                    <input onChange={handleChange} placeholder={"school or college"} name={"name"}></input>
                    <input onChange={handleChange} placeholder={"degree"} name={"degree"}></input>
                    <input onChange={handleChange} placeholder={"Start"} name={"start"}></input>
                    <input onChange={handleChange} placeholder={"End"} name={"end"}></input>
                    <div>
                        <label htmlFor={"finished"}>Finished</label>
                        <input id={"finished"} type={"checkbox"} name={"finished"}></input>
                    </div>
                    <button onClick={handleAdd}>Add</button>
                </li>
            </>
        )

        return (current)
    } else {
        return (
            <li>
                <input onChange={handleChange} placeholder={"school or college"} name={"name"}></input>
                <input onChange={handleChange} placeholder={"degree"} name={"degree"}></input>
                <input onChange={handleChange} placeholder={"Start"} name={"start"}></input>
                <input onChange={handleChange} placeholder={"End"} name={"end"}></input>
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