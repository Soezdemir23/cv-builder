import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function DescriptionLists({ liftDescriptionUp }) {
    const [descriptions, setDescriptions] = useState([]);
    let hand = {};
    const handleEntryChange = (e) => {
        hand[e.target.name] = e.target.value;
        
    }
    const handleUpdateChange = (e) => {
        const id = e.target.parentElement.dataset.key;
        const objects = descriptions.map((description) => {
            if (description.id === id) {
                description[e.target.name] = e.target.value;
                return description;
            } return description;
        });
        setDescriptions(objects);
        liftDescriptionUp(descriptions)
    };

    const handleAddClick = (e) => {
        hand["id"] = uuidv4();
        e.target.previousElementSibling.value = "";
            setDescriptions([...descriptions, hand]);
       

    };
    return (
        <>
            { descriptions.map((description) => (
                <li key={ description.id } data-key={ description.id } >
                    <input onChange={ handleUpdateChange } type="text" name="short" placeholder="short description" defaultValue={ description.short }></input>
                    <button>Delete</button>
                </li>
            )) }
            <li>
                <input type="text" name="short" placeholder="short description" onChange={ handleEntryChange }></input>
                <button onClick={handleAddClick}>Add</button>
            </li>
        </>
    );
}

export default DescriptionLists;