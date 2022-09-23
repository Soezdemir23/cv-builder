function EducationLists() {
    const newEducationListChildren = [];


    return (<> { newEducationListChildren.map((element, index) => (
        <li data-key={ index } key={ index }>
            <input type={ "text" } placeholder={ "school or college" } name={ "name" }
                defaultValue={ element.name }></input>
            <input type={ "text" } placeholder={ "degree" } name={ "degree" }
                defaultValue={ element.degree }></input>
            <input type={ "text" } placeholder={ "Start" } name={ "start" }
                defaultValue={ element.start }></input>
            <input type={ "text" } placeholder={ "End" } name={ "end" }></input>
            <div>
                <label htmlFor={ "finished" }>Finished</label>
                <input id={ "finished" } type={ "checkbox" } name={ "finished" }></input>
            </div>
            <button >Update</button>
            <button >Delete</button>
        </li>
    )) }
        <li key={ "EL-dummy" }>
            <input type={ "text" } placeholder={ "school or college" } name={ "name" }></input>
            <input type={ "text" } placeholder={ "degree" } name={ "degree" }></input>
            <input type={ "text" } placeholder={ "Start" } name={ "start" }></input>
            <input type={ "text" } placeholder={ "End" } name={ "end" }></input>
            <div>
                <label htmlFor={ "finished" }>Finished</label>
                <input id={ "finished" } type={ "checkbox" } name={ "finished" }></input>
            </div>
            <button>Add</button>
        </li>
    </>);

}

export default EducationLists;