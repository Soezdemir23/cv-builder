function EducationLists({ handleInput, newEducationListChildren, handleDelete }) {
    let educationObject = {}


    function handleChange(e) {
        educationObject[e.target.name] = e.target.defaultValue
    }

    function handleAdd() {

        educationObject["id"] = newEducationListChildren.length
        console.log(educationObject);
        handleInput(educationObject)
    }


    if (newEducationListChildren.length > 0) {

        let current = newEducationListChildren.map((element, index) => {
            return (

                <li data-key={index} key={index}>
                    <input type={"text"} onChange={handleChange} placeholder={"school or college"} name={"name"}
                        defaultValue={element.name}></input>
                    <input type={"text"} onChange={handleChange} placeholder={"degree"} name={"degree"}
                        defaultValue={element.degree}></input>
                    <input type={"text"} onChange={handleChange} placeholder={"Start"} name={"start"}
                        defaultValue={element.start}></input>
                    <input type={"text"} onChange={handleChange} placeholder={"End"} name={"end"}></input>
                    <div>
                        <label htmlFor={"finished"}>Finished</label>
                        <input id={"finished"} type={"checkbox"} name={"finished"}></input>
                    </div>
                    <button onClick={handleAdd}>Update</button>
                    <button onClick={handleDelete}>Delete</button>
                </li>

            )
        })
        current.push(
            <li data-key={"zero"} key={"zero"}>
                <input type={"text"} onChange={handleChange} placeholder={"school or college"} name={"name"}></input>
                <input type={"text"} onChange={handleChange} placeholder={"degree"} name={"degree"} ></input>
                <input type={"text"} onChange={handleChange} placeholder={"Start"} name={"start"} ></input>
                <input type={"text"} onChange={handleChange} placeholder={"End"} name={"end"} ></input>
                <div>
                    <label htmlFor={"finished"}>Finished</label>
                    <input id={"finished"} type={"checkbox"} name={"finished"} defaultValue={false}></input>
                </div>
                <button onClick={handleAdd}>Add</button>
            </li>

        )

        return (current)
    } else {
        return (
            <li key={"dummy"}>
                <input type={"text"} onChange={handleChange} placeholder={"school or college"} name={"name"}></input>
                <input type={"text"} onChange={handleChange} placeholder={"degree"} name={"degree"}></input>
                <input type={"text"} onChange={handleChange} placeholder={"Start"} name={"start"}></input>
                <input type={"text"} onChange={handleChange} placeholder={"End"} name={"end"}></input>
                <div>
                    <label htmlFor={"finished"}>Finished</label>
                    <input id={"finished"} type={"checkbox"} name={"finished"}></input>
                </div>
                <button onClick={handleAdd}>Add</button>
            </li>
        )
    }
}

export default EducationLists