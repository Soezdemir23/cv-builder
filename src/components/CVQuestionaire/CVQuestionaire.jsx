
import './CVQuestionaire.css';
import EducationLists from '../EducationLists/EducationLists';
import JobAndExperienceLists from '../JobAndExperienceLists/JobAndExperienceList';
import CertsAndSkills from '../CertsAndSkills/CertsAndSkills';
import Personal from '../Personal/Personal';
import { useState } from 'react';

function CVQuestionaire({ liftInformationUp }) {
    const [full, setFull] = useState({});


    const piecePartTogether = (object, areas) => {
        console.log(areas);
        switch (areas) {
            case "personal":
                setFull({ ...full, "personal": object });
                break;
            case "education":
                setFull({ ...full, "education": object });
                break;
            case "jobs":
                setFull({ ...full, "jobs": object });
                break;
            case "certs":
                setFull({ ...full, "certs": object });
                break;
            default:
                console.log("something is wrong at function pieceTogether");
                break;
        }
    };

    

    return (
        <>
            <div id={ "cvq-wrapper" }>
                {/*Add the personal*/ }

                <section className={ "cvq-section" }>
                    <h3>Personal</h3>
                    <Personal
                        liftPersonalUp={ piecePartTogether } />
                </section>
                {/*Add the information like education*/ }
                <section className={ "cvq-section" }>
                    <h3>Education</h3>
                    <ul className={ "cvq-ul" }>
                        <EducationLists
                            liftEducationUp={ piecePartTogether }
                        />
                    </ul>
                </section>
                {/*Add the information like skills or languages and certs*/ }
                <section className={ "cvq-section" }>
                    <h3>Certs/Skills</h3>
                    <ul className={ "cvq-ul" }>
                        <CertsAndSkills
                            liftCertsUp={ piecePartTogether }
                        />

                    </ul>
                </section>
                {/*Add the information like job experiences*/ }
                <section className={ "cvq-section" }>
                    <h3>Job and Experiences</h3>
                    <ul className={ "cvq-ul" }>
                        <JobAndExperienceLists
                        />
                    </ul>
                </section>
            </div>
        </>
    );
}



export default CVQuestionaire;