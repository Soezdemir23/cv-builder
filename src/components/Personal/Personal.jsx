function Personal({ handleInputChange }) {
    return (
        <div className={ "" }>
            <input type={ "text" } onChange={ handleInputChange } placeholder={ "First name" } name={ "first name" }></input>
            <input type={ "text" } onChange={ handleInputChange } placeholder={ "Second name" }
                name={ "second name" }></input>
            <input type={ "text" } onChange={ handleInputChange } placeholder={ "title" } name={ "title" }></input>
            <input type={ "file" } placeholder={ "Photo" } name={ "photo" }></input>
            <input type={ "text" } onChange={ handleInputChange } placeholder={ "Street name and number" }
                name={ "street and nr" }></input>
            <input type={ "text" } onChange={ handleInputChange } placeholder={ "Email Address" } name={ "email" }></input>
            <input type={ "text" } onChange={ handleInputChange } placeholder={ "Phone number" } name={ "phone" }></input>
            <input type={ "text" } onChange={ handleInputChange } placeholder={ "Github profile" } name={ "github" }></input>
            <input type={ "text" } onChange={ handleInputChange } placeholder={ "Preferred Jobsite Profile" }
                name={ "jobprofile" }></input>
            <textarea rows={ 4 } onChange={ handleInputChange } placeholder={ "Describe yourself" }
                name={ "self" }></textarea>
        </div>
    );
}

export default Personal;