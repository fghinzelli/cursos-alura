import React, {Component} from 'react';


{/* Utilizando classes 
export default class InputSubmit extends Component {

    render() {
        return(
            <div className="pure-control-group">     
                <label></label>                             
                <button type="submit" className="pure-button pure-button-primary">{this.props.title}</button>                                    
            </div>
        );
    }
}
*/}

{/* Utilizando functions */}

export default function InputSubmit(props) {
    return(
        <div className="pure-control-group">     
            <label></label>                             
            <button type="submit" className="pure-button pure-button-primary">{props.title}</button>                                    
        </div>
    );
}