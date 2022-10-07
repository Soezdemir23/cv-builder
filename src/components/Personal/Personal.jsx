function Personal({onChange}) {

    return (
        <div className={ "personal" }>
            <input type={ "text" } onChange={ onChange } placeholder={ "First name" } name={ "first name" }></input>
            <input type={ "text" } onChange={ onChange } placeholder={ "Second name" }
                name={ "second name" }></input>
            <input type={ "text" } onChange={onChange } placeholder={ "title" } name={ "title" }></input>
            <input type={ "file" } placeholder={ "Photo" } name={ "photo" }></input>
            <input type={ "text" } onChange={onChange } placeholder={ "Street name and number" }
                name={ "street and nr" }></input>
            <input type={ "text" } onChange={onChange } placeholder={ "Email Address" } name={ "email" }></input>
            <input type={ "text" } onChange={onChange } placeholder={ "Phone number" } name={ "phone" }></input>
            <input type={ "text" } onChange={onChange } placeholder={ "Github profile" } name={ "github" }></input>
            <input type={ "text" } onChange={onChange } placeholder={ "Preferred Jobsite Profile" }
                name={ "jobprofile" }></input>
            <textarea rows={ 4 } onChange={ onChange} placeholder={ "Describe yourself" }
                name={ "self" }></textarea>
        </div>
    );
}

export default Personal;