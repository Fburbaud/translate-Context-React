import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  /* without LanguageStore:
  state = { language: 'english' };
  
  onLanguageChange = language => {
    this.setState({ language });
  }; */

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          {/* <LanguageSelector onLanguageChange={this.onLanguageChange} /> */}
          <ColorContext.Provider value="primary">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
