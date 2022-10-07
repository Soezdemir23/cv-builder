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

    /* Handling the change in the form should essentially go this way:
        Seperate the events by their parents className:
        1. personal
        2. education
        3. certs
        4. skills
        
        For personal, there is no need to distinctively seperate them between "new entry" and "update entries".
        For the rest we need to check for their data-key:
        does it contain the word "entry"?
            You enter the information into their distinctive objects to hold  until it is ready to be added
        does it not contain the word entry?
            You immediately set the state by filtering for the parent's corresponding id, 
            then change the property in the object, then returning it to the stateArray
     */
    const handleChange = (e) => {
        console.log()
        switch (e.target.parentElement.className) {
            case "personal":
                return setPersonal({
                    ...personal,
                    [e.target.name]: e.target.value
                });
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
    /**
     * If the user clicks the add button, the information is saved in the state for further processing.
     * Conditions: 
     * the user has filled the required amount of input and the clicks "Add":
     *      Add an uuid as an id to the object
     *          in the case of a checkbox, it is permissible to simply accept it, as it only has a true or false option.
     *      The information in the hand object is added to the state for re-rendering the correct state of the website
     * the user has left certain amount of properties free
     *      The button's value "Add" is replaced with "not enough information" until the user interacts with the input again.
     * 
     * @param {Eventlistener ButtonClick} e Element returned for further processing
     */
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