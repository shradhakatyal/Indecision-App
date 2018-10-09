import React from 'react';

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.onDeleteOption(props.optionText);
            }}>Remove Option</button>
        </div>
    );
}

export default Option;