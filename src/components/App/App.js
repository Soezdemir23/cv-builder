import "./App.css";
import CVQuestionaire from "../CVQuestionaire/CVQuestionaire";
import { useState } from "react";


function App() {
    const [informationExample, setInformationExample] = useState({
        personal: {
            "first name": "Borchst",
            "second name": "Horchst",
            "title": "Professor",
            "photo": "dummy",
            "street and nr": "Somewhere streeets 48",
            "email": "somewhere@example.com",
            "phone": "0234 234234 23424",
            "github": "https://github.com/in/ZoomZoombaby",
            "jobprofile": "https://linkedin.com/in/profilemaster",
            "self": "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
        },
        education: [{
            "id": 0,
            "name": "Test college",
            "degree": "Masters of the universe",
            "start": "here and there",
            "end": "there and where",
            "finished": true,
        }],
        certsAndSkills: [{
            "id": 0,
            "name": "Cert",
            "proficiency": "b45",
            "proof": "a proof?"
        }],
        jobAndExperience: [{
            "id": 0,
            "name": "Diskjockey",
            "employer": "Magenta Club",
            "start": "2012",
            "end": "2015",
            "descriptions": [{
                "id": 0,
                "description": "cockbreaking"
            }]
        }]
    });
    const [information, setInformation] = useState({
        personal: {
            "first name": "Borchst",
            "second name": "Horchst",
            "title": "Professor",
            "photo": "dummy",
            "street and nr": "Somewhere streeets 48",
            "email": "somewhere@example.com",
            "phone": "0234 234234 23424",
            "github": "https://github.com/in/ZoomZoombaby",
            "jobprofile": "https://linkedin.com/in/profilemaster",
            "self": "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
        },
        education: [],
        certsAndSkills: [],
        jobAndExperience: []

    });
    //only for the personal, photo requires something else until I get it
    function handleInputChangeParent(e) {

        setInformation({
            ...information,
            education: []
        });

        setInformation({
            ...information,
            personal: {
                ...information.personal,
                [e.target.name]: e.target.value
            }
        });

    }

    function handleEducationListChildrenInput(educationObject) {
        setInformation({
            ...information,
            education: [...information.education, educationObject]
        });
    };

    function handleCertsAndSkillsChildrenInput(certsAndSkillsObject) {
        setInformation({
            ...information,
            certsAndSkills: [...information.certsAndSkills, certsAndSkillsObject]
        });
    }

    function handleJobsAndExperiencesChildrenInput(jobAndExperienceObject) {
        console.log('inside app.js', jobAndExperienceObject);
        setInformation({
            ...information,
            jobAndExperience: [...information.jobAndExperience, jobAndExperienceObject]
        });
    }

    return (
        <div id="root">
            <header id={ "app-header" }>
                <h1>Hello World</h1>
            </header>
            <div id={ "wrapper" }>
                <section id={ "cv-questioner" }>
                    <div>
                        <CVQuestionaire
                            handleInputChangeChild={ handleInputChangeParent }
                            handleInputEducationListChildren={ handleEducationListChildrenInput }
                            handleNewEducationListChildren={ information.education }
                            handleInputCertsAndSkillsChildren={ handleCertsAndSkillsChildrenInput }
                            handleNewCertsAndSkillsChildren={ information.certsAndSkills }
                            handleInputJobsAndExperiencesChildren={ handleJobsAndExperiencesChildrenInput }
                            handleNewJobsAndExperienceChildren={ information.jobAndExperience }
                        />
                    </div>
                </section>
                <section id={ "cv-result" }>
                </section>
            </div>
        </div>
    );
}

export default App;