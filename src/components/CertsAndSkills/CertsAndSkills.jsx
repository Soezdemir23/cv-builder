
function CertsAndSkills({ handleInputFromEducationLists, newCertsAndSkillsListChildren, handleDelete, handleUpdate }) {
    let certsAndSkillsChildrenObject = {}

    function handleChange(e) {
        certsAndSkillsChildrenObject[e.target.name] = e.target.value
        console.log(certsAndSkillsChildrenObject)
    }

    function handleInput() {
        console.log(certsAndSkillsChildrenObject)
        handleInputFromEducationLists(certsAndSkillsChildrenObject)
    }

    if (newCertsAndSkillsListChildren.length > 0) {
        console.log("more certs")
        let current = newCertsAndSkillsListChildren.map((element, index) => (

            <li key={index} data-key={index}>
                <input type={"text"} onChange={handleChange} placeholder={"Cert or Skillname"} name={"name"}
                    defaultValue={element.name}></input>
                <input type={"text"} onChange={handleChange} placeholder={"proficiency, optional"} name={"proficiency"}
                    defaultValue={element.proficiency}></input>
                <input type={"text"} onChange={handleChange} placeholder={"url for optional proof"} name={"proof"}
                    defaultValue={element.proof}></input>
                <button>Update</button>
                <button>Delete</button>
            </li>
        ))
        current.push(

            <li key={"zero"} data-key={"zero"}>

                <input type={"text"} onChange={handleChange} placeholder={"Cert or Skillname"} name={"name"} defaultValue=""></input>
                <input type={"text"} onChange={handleChange} placeholder={"proficiency, optional"} name={"proficiency"} defaultValue=""></input>
                <input type={"text"} onChange={handleChange} placeholder={"url for optional proof"} name={"proof"} defaultValue=""></input>
                <button onClick={handleInput}>Add</button>
            </li >

        )
        return (current)
    } else {
        console.log("no certs")
        return (
            <li key={"dummy"} data-key={"dummy"} >
                <input type={"text"} onChange={handleChange} placeholder={"Cert or Skillname"} name={"name"} ></input>
                <input type={"text"} onChange={handleChange} placeholder={"proficiency, optional"} name={"proficiency"} ></input>
                <input type={"text"} onChange={handleChange} placeholder={"url for optional proof"} name={"proof"}></input>
                <button onClick={handleInput}>Add</button>
            </li>
        )
    }

}

export default CertsAndSkills