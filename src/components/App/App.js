import "./App.css";
import CVQuestionaire from "../CVQuestionaire/CVQuestionaire";
import { useState } from "react";



function App() {

    const [information, setInformation] = useState({});


    const updateInformation = (newInformation) => {
        setInformation(newInformation);
        console.log(information);
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
                            liftInformationUp={ updateInformation }
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