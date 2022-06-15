import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {

    //hookup a context object to a class component
    static contextType = LanguageContext;

    render() {

        const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

        return(
            <button className="ui button primary">{text}</button>
        )
    }
}

//or instead of static contextType, we can use:
//Button.contextType = LanguageContext;

export default Button;