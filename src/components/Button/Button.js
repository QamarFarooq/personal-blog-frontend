import './Button.css';
import React, {useEffect, useContext} from 'react';
import {Context} from '../../store/Store.js';



const Button = ( props ) => {

    const [state, dispatch] = useContext(Context);

    const incrementAction = () => {
        dispatch({
            type:'DO_ACTION',
            payload: 1
        })
      };

    return (
        <div>
            {/* <button onClick={() => incrementAction()}>Display matrix!!!</button>
            <div>{state.displayMatrix.toString()}</div> */}
        </div>
    )
};

export default Button