import React from 'react';

export default function InputSubmit(props) {
    return(
        <div className="pure-control-group">     
            <label></label>                             
            <button type="submit" className="pure-button pure-button-primary">{props.title}</button>                                    
        </div>
    );
}