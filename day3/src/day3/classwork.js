import React, { useState } from 'react'

function ToggleMessage(){
    const [showMessage, setshowMessage]=useState(false);

    const toggleMessage=()=>{
        setshowMessage(!showMessage);
    }

    return (
        <div>
            <button onClick={toggleMessage}>
                {showMessage ? 'Hide Message' : 'Show Messag'}
                </button>
            {showMessage && <p>Hi! How are You!!!</p>}
        </div>
    )
}
export default ToggleMessage;