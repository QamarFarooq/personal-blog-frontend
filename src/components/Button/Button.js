import './Button.css';
import React, {useEffect, useContext} from 'react';
import {Context} from '../../store/Store.js';



const Button = ( props ) => {

    const [state, dispatch] = useContext(Context);

    return (
        <div>
            <div className="button" onClick={() => dispatch({type: 'DO_ACTION'})}>Matrix Display {state.displayMatrix ? 'Off' : 'On'}</div>
        </div>
    )
};

export default Button