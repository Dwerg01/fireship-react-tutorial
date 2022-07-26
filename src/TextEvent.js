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
                placeHolder="This placeholder is whack"
                onChange={eventHandler}
            />
        </>
    );

}
export default HandleEvent;