import "./App.css";
import CVQuestionaire from "../CVQuestionaire/CVQuestionaire";
import CVGerman from "../CVGerman/CVGerman";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


function App() {
    const [personal, setPersonal] = useState({});
    // school component
    const [school, setSchool] = useState([]);
    let schoolHand = {};
    // certs and skills component
    const [certs, setCerts] = useState([]);
    let certsHand = {};
    // the jobs and skills component
    const [jobs, setJobs] = useState([]);
    const [jobsHand, setJobsHand] = useState({});
    // the descriptions used to fill in the form
    const [descriptionHand, setDescriptionHand] = useState({});
    const [descriptionList, setDescriptionList] = useState([]);


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

    const correctValues = (e) => e.target.type === "checkbox" ? e.target.checked : e.target.value;

    const handleChange = (e) => {
        switch (e.target.parentElement.className) {
            case "personal":
                return setPersonal({
                    ...personal,
                    [e.target.name]: e.target.value
                });
            case "school":
                if (e.target.parentElement.dataset.key.includes("entry")) {
                    schoolHand[e.target.name] = correctValues(e);
                } else {

                    setSchool(school.map((education) => {
                        if (education.id === e.target.parentElement.dataset.key) {
                            console.log(e.target.type);
                            education[e.target.name] = correctValues(e);
                            return education;
                        } else {
                            return education;
                        }
                    }));
                }
                break;
            case "cert":
                if (e.target.parentElement.dataset.key.includes("entry")) {
                    certsHand[e.target.name] = correctValues(e);
                } else {
                    certs.map((cert) => {
                        if (cert.id === e.target.parentElement.dataset.key) {
                            return cert[e.target.name] = e.target.value;
                        } else {
                            return cert;
                        }
                    });
                }
                break;
            case "job":
                setJobsHand({ ...jobsHand, [e.target.name]: e.target.value });
                break;
            case "description":
                setDescriptionHand({ ...descriptionHand, [e.target.name]: e.target.value });
                break;
            case "description-default":
                setDescriptionList(descriptionList.map(
                    (description) => {
                        if (description.id === e.target.parentElement.dataset.key) {
                            console.log(e.target.name, e.target.value);
                            description[e.target.name] = e.target.value;
                            return description;
                        } return description;
                    }));
                break;
            case "description-saved":
                let parentId = e.target.parentElement.parentElement.dataset.key;
                let childId = e.target.parentElement.dataset.key;
                setJobs(jobs.map((job) => {
                    if (job.id === parentId) {
                        job.descriptions.map((description) => {
                            if (description.id === childId) {
                                description[e.target.name] = e.target.value;
                                return description;
                            } else {
                                return description;
                            }
                        });
                        return job;
                    } return job;
                }));
                break;
            case "description-add-to-saved":
                console.log("Hou");
                setJobsHand({ ...jobsHand, [e.target.name]: e.target.value });
                break;
            case "job-added":
                console.log("job-added");
                setJobs(jobs.map((job) => {
                    if (job.id === e.target.parentElement.dataset.key) {
                        job[e.target.name] = e.target.value;
                        return job;
                    } return job;
                }));
                break;
            default:
                console.log("not here", e.target.parentElement);
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
        e.preventDefault();
        e.stopPropagation();

        let id = uuidv4();
        switch (e.target.parentElement.dataset.key) {

            case "education-entry":

                if (// we have four properties, the values don't contain empty strings and has no finished property
                    (Object.keys(schoolHand).length === 4 && !Object.values(schoolHand).includes("") && schoolHand["finished"] === undefined) ||
                    // we have 5 properties and none of them include an empty string
                    Object.keys(schoolHand).length === 5 && !Object.values(schoolHand).includes("")
                ) {
                    if (schoolHand["finished"] === undefined) {
                        schoolHand["finished"] = false;
                    }
                    schoolHand["id"] = id;
                    setSchool([
                        ...school,
                        schoolHand
                    ]);
                    schoolHand = {};
                    clearDefaultInputs("education-entry");

                } else {
                    console.log(e.target);
                    e.target.textContent = "Missing!";
                    setTimeout(() => e.target.textContent = "Add", 500);
                }
                break;
            case "CAS-entry":
                if (Object.keys(certsHand).length === 3) {
                    certsHand["id"] = id;
                    setCerts([
                        ...certs,
                        certsHand
                    ]);
                    console.log("certsHand", certsHand);
                    console.table("certs", certs);
                    certsHand = {};

                    clearDefaultInputs("CAS-entry");
                } else {
                    e.target.textContent = "Missing!";
                    setTimeout(() => e.target.textContent = "Add", 500);
                }
                break;
            case "jobs-entry":
                // this will be interesting to check by generalizing the solution
                if (
                    jobsHand["name"] !== undefined &&
                    jobsHand["employer"] !== undefined &&
                    jobsHand["start"] !== undefined &&
                    jobsHand["end"] !== undefined) {
                    // assign the id and descriptionsList to the current JobsHand

                    setJobs([
                        ...jobs,
                        { ...jobsHand, ["id"]: id, ["descriptions"]: descriptionList }
                    ]);
                    // 
                    setJobsHand({});
                    setDescriptionList([]);
                    // clearDefaultInputs("jobs-entry");
                } else {

                }
                break;
            case "descriptions-entry":
                // first entry was ignored, let's add to the second entry a timeout and see what happens
                let object = descriptionHand;
                object["id"] = id;
                setDescriptionHand(descriptionHand);
                setDescriptionList([...descriptionList, descriptionHand]);
                setDescriptionHand({});
                break;
            case "description-saved":
                console.log("I wrote here");
                break;
            case "description-add-to-saved":
                const parentId = e.target.parentElement.parentElement.dataset.key;

                setJobs(jobs.map((job) => {
                    if (job.id === parentId) {
                        let n = jobsHand;
                        n["id"] = id;
                        job.descriptions.push(n);
                        setJobsHand({});
                        return job;
                    } return job;
                }));
                break;
            default:
                console.log("what's wrong: ", e.target.parentElement);
                break;
        }
    };


    const handleDeleteClick = (e) => {
        e.preventDefault();
        console.log(e.target.parentElement.className);
        let id = e.target.parentElement.dataset.key;
        switch (e.target.parentElement.className) {
            case "job":
                setJobs(jobs.filter((job) => job.id !== e.target.parentElement.dataset.key));
                break;
            case "cert":
                setCerts(certs.filter((cert) => cert.id !== e.target.parentElement.dataset.key));
                break;
            case "school":

                setSchool(school.filter((classes) => classes.id !== id));
                break;
            case "description-default":
                console.log("description inside");
                setDescriptionList(descriptionList.filter((description) => description.id !== e.target.parentElement.dataset.key));
                break;
            default:
                console.log(e.target.parentElement);
                console.log("Not found");
                break;
        }
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
                <h1>CV-Generator</h1>
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
                            jobHand={ jobsHand }
                            descriptionList={ descriptionList }
                            descriptionHand={ descriptionHand }

                        />
                    </div>
                </section>
                <section id={ "cv-result" }>
                    <CVGerman
                        personal={ personal }
                        school={ school }
                        certs={ certs }
                        jobs={ jobs }

                    />
                </section>
            </div>

        </div>
    );
}

export default App;