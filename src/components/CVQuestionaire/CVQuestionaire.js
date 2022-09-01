import './CVQuestionairre.css'

function CVQuestionaire() {
    return (
        <>
            <div>
                {/*Add the personal*/}
                <section>
                    <input placeholder={"First name"}></input>
                    <input placeholder={"Second name"}></input>
                    <input placeholder={"title"}></input>
                    <input placeholder={"Photo"}></input>
                    <input placeholder={"Street name and number"}></input>
                    <input placeholder={"Email Address"}></input>
                    <input placeholder={"Phone number"}></input>
                    <input placeholder={"Github profile"}></input>
                    <input placeholder={"Preferred Jobsite Profile"}></input>
                    <textarea placeholder={"Describe yourself"}></textarea>
                </section>
                {/*Add the information like education*/}
                {/*Add the information like skills or languages and certs*/}
                {/*Add the information like job experiences*/}
            </div>
        </>
    )
}


export default CVQuestionaire;