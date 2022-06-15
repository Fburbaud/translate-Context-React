import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {

    //hookup a context object to a class component when using this.context
    //static contextType = LanguageContext;

    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color) {
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {

        //const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

        return(
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}

//or instead of static contextType, we can use:
//Button.contextType = LanguageContext;

export default Button;