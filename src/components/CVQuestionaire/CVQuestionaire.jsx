
import './CVQuestionaire.css';
import EducationLists from '../EducationLists/EducationLists';
import JobAndExperienceLists from '../JobAndExperienceLists/JobAndExperienceList';
import CertsAndSkills from '../CertsAndSkills/CertsAndSkills';
import Personal from '../Personal/Personal';
import { useState } from 'react';

function CVQuestionaire() {
    const [full, setFull] = useState({});

    const piecePartTogether = (piece) => {
        setFull({ ...full, piece });
        console.log(full);
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
                        />
                    </ul>
                </section>
                {/*Add the information like skills or languages and certs*/ }
                <section className={ "cvq-section" }>
                    <h3>Certs/Skills</h3>
                    <ul className={ "cvq-ul" }>
                        <CertsAndSkills
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