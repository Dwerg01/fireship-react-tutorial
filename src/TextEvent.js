import React, {useState} from "react";


function HandleEvent() {
    const [value, setValue] = useState('');

    const eventHandler = (e) => {
        setValue(e.target.value);
        console.log(e.target.value)
    }

    return (
        <>
            <input 
                value={value}
                placeholder="Check console for output onChange"
                onChange={eventHandler}
            />
        </>
    );

}
export default HandleEvent;