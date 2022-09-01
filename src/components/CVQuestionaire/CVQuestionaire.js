import './CVQuestionaire.css'

function CVQuestionaire({handleInputChangeChild}) {


    return (
        <>
            <div id={"cvq-wrapper"}>
                {/*Add the personal*/}

                <section className={"cvq-section"}>
                    <h3>Personal</h3>
                    <div className={""}>
                    <input onChange={handleInputChangeChild} placeholder={"First name"} name={"first name"}></input>
                    <input onChange={handleInputChangeChild} placeholder={"Second name"} name={"second name"}></input>
                    <input onChange={handleInputChangeChild} placeholder={"title"} name={"title"}></input>
                    <input type={"file"} placeholder={"Photo"} name={"photo"}></input>
                    <input onChange={handleInputChangeChild} placeholder={"Street name and number"}  name={"street and nr"}></input>
                    <input onChange={handleInputChangeChild} placeholder={"Email Address"} name={"email"}></input>
                    <input onChange={handleInputChangeChild} placeholder={"Phone number"} name={"phone"}></input>
                    <input onChange={handleInputChangeChild} placeholder={"Github profile"} name={"github"}></input>
                    <input onChange={handleInputChangeChild} placeholder={"Preferred Jobsite Profile"} name={"jobprofile"}></input>
                    <textarea onChange={handleInputChangeChild} placeholder={"Describe yourself"} name={"self"}></textarea>
                    </div>
                    </section>
                {/*Add the information like education*/}
                <section className={"cvq-section"}>
                    <h3>Education</h3>
                    <ul className={"cvq-ul"}>
                        <li>
                            <input placeholder={"school or college"} name={"name"}></input>
                            <input placeholder={"degree"} name={"degree"}></input>
                            <input placeholder={"Start"} name={"start"}></input>
                            <input placeholder={"End"} name={"end"}></input>
                            <div>
                                <label>Finished</label>
                                <input type={"checkbox"} name={"finished"}></input>
                            </div>
                            <button>Add</button>
                        </li>
                    </ul>
                </section>
                {/*Add the information like skills or languages and certs*/}
                <section className={"cvq-section"}>
                    <h3>Certs/Skills</h3>
                    <ul className={"cvq-ul"}>
                        <li>
                            <input placeholder={"Cert or Skillname"} name={"name"}></input>
                            <input placeholder={"proficiency, optional"} name={"proficiency"}></input>
                            <input placeholder={"url for optional proof"} name={"proof"}></input>
                            <button>Add</button>
                        </li>
                    </ul>
                </section>
                {/*Add the information like job experiences*/}
                <section className={"cvq-section"}>
                    <h3>Job and Experiences</h3>
                    <ul className={"cvq-ul"}>
                        <li>
                            <input placeholder={"Job title"} name={"name"}></input>
                            <input placeholder={"Employer"} name={"employer"}></input>
                            <input placeholder={"Start"} name={"start"}></input>
                            <input placeholder={"End"} name={"end"}></input>
                            <ul>
                                <li>
                                    <input placeholder={"Short description of job"}></input>
                                    <button>Add</button>
                                </li>
                            </ul>
                            <button>Add</button>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}


export default CVQuestionaire;