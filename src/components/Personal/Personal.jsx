function Personal({ onChange }) {

    return (
        <div className={ "personal" }>
            <input type={ "text" } onChange={ onChange } placeholder={ "First name" } name={ "firstName" }></input>
            <input type={ "text" } onChange={ onChange } placeholder={ "Second name" }
                name={ "secondName" }></input>
            <input type={"text"} onChange={onChange} placeholder={"Birthday"} name={"birthday"}></input>
            <input type={"text"} onChange={onChange} placeholder={"Birthplace"} name={"birthplace"} ></input>
            <input type={ "text" } onChange={ onChange } placeholder={ "title" } name={ "title" }></input>
            <input type={ "file" } onChange={onChange} placeholder={ "Photo" } name={ "photo" }></input>
            <input type={ "text" } onChange={ onChange } placeholder={ "Street name and number" }
                name={ "address" }></input>

            <input type={ "text" } onChange={ onChange } placeholder={ "Email Address" } name={ "mail" }></input>
            <input type={ "text" } onChange={ onChange } placeholder={ "Phone number" } name={ "phone" }></input>
            <input type={ "text" } onChange={ onChange } placeholder={ "Github profile" } name={ "github" }></input>
            <input type={ "text" } onChange={ onChange } placeholder={ "Xing profile" } name={ "xing" }></input>
            <input type={ "text" } onChange={ onChange } placeholder={ "LinkedIn profile" } name={ "linkedIn" }></input>

            <input type={ "text" } onChange={ onChange } placeholder={ "Preferred Jobsite Profile" }
                name={ "jobprofile" }></input>
            <textarea rows={ 4 } onChange={ onChange } placeholder={ "Describe yourself" }
                name={ "self" }></textarea>
        </div>
    );
}

export default Personal;