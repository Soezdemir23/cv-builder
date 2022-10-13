function DescriptionLists({descriptions, onChange, onAddClick, onDeleteClick}) {

    return (
        <>
            { descriptions.map((description) => (
                <li key={ description.id } data-key={ description.id } >
                    <input onChange={onChange} type="text" name="short" placeholder="short description" defaultValue={ description.short }></input>
                    <button onClick={onDeleteClick}>Delete</button>
                </li>
            )) }
            <li className="descriptionlist" data-key={"description-entry"}>
                <input type="text" name="short" placeholder="short description" onChange={ onChange}></input>
                <button onClick={onAddClick}>Add</button>
            </li>
    </>
    );
}

export default DescriptionLists;