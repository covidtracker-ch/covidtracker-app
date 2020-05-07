
import React from 'react';
import * as Ion from '@ionic/react';
import Page from '../components/Page';


export default class extends React.Component {
    constructor(){
      super()
      this.state = {language: this.getLanguage()}      
    }

    setLanguage(event, languageCode){
      localStorage.setItem("language", languageCode);
      event.preventDefault();
      this.setState({language: languageCode});
      return false;
    }
    getLanguage = () => {
      return localStorage.getItem("language") || "";
    }

    render() {
      const language = this.getLanguage();
      return (
        <Page title="Über uns" menu large padding >
          <p>Sprachauswahl:</p>
          <ul>
            <li>
              <a onClick={(e)=>this.setLanguage(e, "de")} style={language === "de" ? {color: "white", background: "red"} : {}} href="/#">German</a>
            </li>
            <li>
              <a onClick={(e)=>this.setLanguage(e, "fr")} style={language === "fr" ? {color: "white", background: "red"} : {}} href="/#">French</a>
            </li>
            <li>
              <a onClick={(e)=>this.setLanguage(e, "it")} style={language === "it" ? {color: "white", background: "red"} : {}} href="/#">Italian</a>
            </li>
            <li>
              <a onClick={(e)=>this.setLanguage(e, "en")} style={language === "en" ? {color: "white", background: "red"} : {}} href="/#">English</a>
            </li>
          </ul>          
        </Page>
      );
    }
    
  }
  