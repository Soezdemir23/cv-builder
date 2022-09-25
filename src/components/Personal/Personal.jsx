import { useState } from "react";

function Personal({ liftPersonalUp }) {
    const [personal, setPersonal] = useState({});

    const handleChange = (e) => {
        setPersonal({ ...personal, [e.target.name]: e.target.value });

        liftPersonalUp(personal, "personal");
    };

    return (
        <div className={ "" }>
            <input type={ "text" } onChange={ handleChange } placeholder={ "First name" } name={ "first name" }></input>
            <input type={ "text" } onChange={ handleChange } placeholder={ "Second name" }
                name={ "second name" }></input>
            <input type={ "text" } onChange={ handleChange } placeholder={ "title" } name={ "title" }></input>
            <input type={ "file" } placeholder={ "Photo" } name={ "photo" }></input>
            <input type={ "text" } onChange={ handleChange } placeholder={ "Street name and number" }
                name={ "street and nr" }></input>
            <input type={ "text" } onChange={ handleChange } placeholder={ "Email Address" } name={ "email" }></input>
            <input type={ "text" } onChange={ handleChange } placeholder={ "Phone number" } name={ "phone" }></input>
            <input type={ "text" } onChange={ handleChange } placeholder={ "Github profile" } name={ "github" }></input>
            <input type={ "text" } onChange={ handleChange } placeholder={ "Preferred Jobsite Profile" }
                name={ "jobprofile" }></input>
            <textarea rows={ 4 } onChange={ handleChange } placeholder={ "Describe yourself" }
                name={ "self" }></textarea>
        </div>
    );
}

export default Personal;