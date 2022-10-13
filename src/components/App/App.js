import "./App.css";
import CVQuestionaire from "../CVQuestionaire/CVQuestionaire";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


function App() {
    const [personal, setPersonal] = useState({});
    const [school, setSchool] = useState([]);
    const [certs, setCerts] = useState([]);
    const [jobs, setJobs] = useState([/*{
        "name":"a",
        "employer":"a",
        "start":"a",
        "end":"a",
        "id":"438a2ec4-f4cd-4e77-a800-7af77f4620e1",
        "descriptions":[
            {"id":"128", "short": "oompa.a"},
            {"id": "256", "short": "oompala"}
        ]},
    {"name":"b","employer":"b","start":"b","end":"b","id":"0de54150-5668-4949-85ef-934b3f691cbd","descriptions":[]}*/]);

    let schoolHand = {};
    let certsHand = {};
    let jobsHand = {};
    let descriptionHand = {}


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
        console.log(jobsHand);
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
                    console.log(e.target.parentElement.dataset.key);
                    school.map((education) => {
                        if (education.id === e.target.parentElement.dataset.key) {
                            return education[e.target.name] = e.target.value;
                        } else {
                            return education;
                        }
                    });
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
                if (e.target.parentElement.dataset.key.includes("entry")) {
                    jobsHand[e.target.name] = correctValues(e);
                } else {
                    jobs.map((job) => {
                        if (job.id === e.target.parentElement.dataset.key) {
                            return job[e.target.name] = e.target.value;
                        } else {
                            return job;
                        }
                    });
                }
                break;
/*            case "descriptionlist":
                if (e.target.parentElement.dataset.key.includes("entry")) {
                    descriptionHand[e.target.name] = e.target.value
                } else {
                    jobs.map((job) => {
                        if (job.id === e.target.parentElement.dataset.key){
                            //probably should traverse the descriptions next
                            console.log(job.description)
                            return job;
                        } else {
                            return job;
                        }
                    })
                } 
                console.log(descriptionHand)
                break;*/
            default:
                console.log("not here", e.target.parentElement.className);
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

                if (// we have four properties, the values don't contain empty strings and has no finished property
                    (Object.keys(schoolHand).length === 4 && !Object.values(schoolHand).includes("") && schoolHand["finished"] === undefined) ||
                    // we have 5 properties and none of them include an empty string
                    Object.keys(schoolHand).length === 5 && !Object.values(schoolHand).includes("")
                ) {
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

                } else {
                    console.log(e.target);
                    e.target.textContent = "Missing!";
                    setTimeout(() => e.target.textContent = "Add", 500);
                }
                break;
            case "CAS-entry":
                if (Object.keys(certsHand).length === 3) {
                    certsHand["id"] = uuidv4();
                    setCerts([
                        ...certs,
                        certsHand
                    ]);
                    certsHand = {};
                    clearDefaultInputs("CAS-entry");
                } else {
                    e.target.textContent = "Missing!";
                    setTimeout(() => e.target.textContent = "Add", 500);
                }
                break;
            case "jobs-entry":
                // this will be interesting to check by generalizing the solution
                console.log(jobsHand);
                if (
                    jobsHand["name"] !== undefined &&
                    jobsHand["employer"] !== undefined &&
                    jobsHand["start"] !== undefined &&
                    jobsHand["end"] !== undefined) {
                    jobsHand["id"] = uuidv4();
                    jobsHand["descriptions"] = []
                    setJobs([
                        ...jobs,
                        jobsHand
                    ]);
                    jobsHand = {}
                    clearDefaultInputs("jobs-entry")
                } else {
                    e.target.textContent = "Missing!";
                    setTimeout(() => e.target.textContent = "Add", 500)
                }
                break;
            case "description-entry":
                
                
                /*if (descriptionHand["short"] !== undefined) {
                    descriptionHand["id"] = uuidv4()
                    
                    //find the job with the parentElementid
                    setJobs([jobs.map((job) => {
                        // find the job with the same id as the descriptionlist's parentid

                        if (job.id === e.target.parentElement.parentElement.dataset.key){
                            console.log("here")
                            //job.descriptions.push(descriptionHand)
                            descriptionHand = {}
                            return job;
                        } else {
                            return job;
                        }})]
                    )
                } else {
                    e.target.textContent = "Missing!";
                    setTimeout(() => e.target.textContent = "Add", 500)
                }*/
                break;
            default:
                break;
        }
    };


    const handleDeleteClick = (e) => {
        switch(e.target.parentElement.className) {
            case "job":
                setJobs(jobs.filter((job) => job.id !== e.target.parentElement.dataset.key ));
                break;
            case "cert":
                setCerts(certs.filter((cert) => cert.id !== e.target.parentElement.dataset.key))
                break;
            case "school":
                setJobs(jobs.filter((job) => job.id !== e.target.parentElement.dataset.key))
                break;
            default:
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