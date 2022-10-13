
import './CVQuestionaire.css';
import EducationLists from '../EducationLists/EducationLists';
import JobAndExperienceLists from '../JobAndExperienceLists/JobAndExperienceList';
import CertsAndSkills from '../CertsAndSkills/CertsAndSkills';
import Personal from '../Personal/Personal';


function CVQuestionaire({ personal, school, certs, jobs, onChange, onAddClick, onDeleteClick }) {
    return (
        <>
            <div id={ "cvq-wrapper" }>
                {/*Add the personal*/ }

                <section className={ "cvq-section" }>
                    <h3>Personal</h3>
                    <Personal
                        personal={ personal }
                        onChange={ onChange }
                        onAddClick={ onAddClick }
                        onDeleteClick={ onDeleteClick }
                    />
                </section>
                {/*Add the information like education*/ }
                <section className={ "cvq-section" }>
                    <h3>Education</h3>
                    <ul className={ "cvq-ul" }>
                        <EducationLists
                            school={ school }
                            onChange={ onChange }
                            onAddClick={ onAddClick }
                            onDeleteClick={ onDeleteClick }
                        />
                    </ul>
                </section>
                {/*Add the information like skills or languages and certs*/ }
                <section className={ "cvq-section" }>
                    <h3>Certs/Skills</h3>
                    <ul className={ "cvq-ul" }>
                        <CertsAndSkills
                            certs={ certs }
                            onChange={ onChange }
                            onAddClick={ onAddClick }
                            onDeleteClick={ onDeleteClick }
                        />

                    </ul>
                </section>
                {/*Add the information like job experiences*/ }
                <section className={ "cvq-section" }>
                    <h3>Job and Experiences</h3>
                    <ul className={ "cvq-ul" }>
                        <JobAndExperienceLists
                            jobs={ jobs }
                            onChange={ onChange }
                            onAddClick={ onAddClick }
                            onDeleteClick={ onDeleteClick }
                        />
                    </ul>
                </section>
            </div>
        </>
    );
}



export default CVQuestionaire;