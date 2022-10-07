import "./App.css";
import CVQuestionaire from "../CVQuestionaire/CVQuestionaire";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


function App() {
    const [personal, setPersonal] = useState({});
    const [school, setSchool] = useState([]);
    const [certs, setCerts] = useState([]);
    const [jobs, setJobs] = useState([]);

    let schoolHand = {};
    let certsHand = {};
    let jobsHand = {};


    const handleChange = (e) => {
        switch (e.target.dataset.type) {
            case "personal":
                return setPersonal({
                    ...personal,
                    [e.target.name]: e.target.value
                });
            /*
            While Personal is easy peasy to fill, the rest is a bit more tricky.
            
            1. Data entry:
            User enters minimum data
            the eventlistener is reading the parent's data-key attribute
            put the new data inside a corresponding "hand" object to later on push
            While minimum data is not reached, button is inactive
            When minimum data is reached, the object is given an id and added to the respective state
            
            2. Data modification:
            User modifies data.
            The parent Elements id is being read first through the data-key attribute.
            The id is used to filter through the state and return the corresponding object.
            The corresponding property is being overwritten and the state is set
            */
            case "school":
                if (e.target.parentElement.dataset.key === "education-entry") {
                    e.target.type === "checkbox" ? schoolHand[e.target.name] = e.target.checked : schoolHand[e.target.name] = e.target.value;
                } else {// TODO: fix the updating 

                    setSchool([...school,]);
                }
            default:
                break;
        }

    };

    const handleAddClick = (e) => {
        switch (e.target.parentElement.dataset.key) {
            case "education-entry":
                // the input text is written 
                if (Object.keys(schoolHand).length > 3) {
                    if (schoolHand["finished"] === undefined) {
                        schoolHand["finished"] = false;
                    }
                    schoolHand["id"] = uuidv4();
                    setSchool([
                        ...school,
                        schoolHand
                    ]);
                    schoolHand = {};
                    clearDefaultInputs("education-entry");

                }
                break;

            default:
                break;
        }
    };


    const handleDeleteClick = (e) => {
        setSchool(school.filter((education) => education.id !== e.target.dataset.key));
    };


    const clearDefaultInputs = (identity) => {
        const inputs = document.querySelectorAll(`[data-key="${identity}"]`);
        const toDefault = inputs[0].getElementsByTagName("input");
        for (let i = 0; i < toDefault.length; i++) {
            toDefault[i].type === "checkbox" ?
                toDefault[i].checked = false :
                toDefault[i].value = "";
        }
    };





    return (
        <div id="root">
            <header id={ "app-header" }>
                <h1>Hello World</h1>
            </header>
            <div id={ "wrapper" }>
                <section id={ "cv-questioner" }>
                    <div>
                        <CVQuestionaire
                            onChange={ handleChange }
                            onAddClick={ handleAddClick }
                            onDeleteClick={ handleDeleteClick }
                            school={ school }
                            certs={ certs }
                            jobs={ jobs }
                        />
                    </div>
                    <div id="europe-cv">

                    </div>

                </section>
                <section id={ "cv-result" }>
                </section>
            </div>
        </div>
    );
}

export default App;