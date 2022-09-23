
import './CVQuestionaire.css'
import EducationLists from '../EducationLists/EducationLists';
import JobAndExperienceLists from '../JobAndExperienceLists/JobAndExperienceList';
import CertsAndSkills from '../CertsAndSkills/CertsAndSkills';

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



export default CVQuestionaire;