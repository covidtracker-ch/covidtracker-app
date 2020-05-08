
import React from 'react';
import * as Ion from '@ionic/react';
import Page from '../components/Page';
import TimePickerWrapper from 'react-times';
import { IonToggle, IonItem, IonLabel } from '@ionic/react';

// or you can use classic theme
import 'react-times/css/classic/default.css';

export default class extends React.Component {
    constructor(){
      super()
      this.state = {
        language: this.getLanguage(),
        notificationTime: this.getNotificationTime(),
        allowNotifications: this.getAllowNotifications()
      }      
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
    getNotificationTime = () => {
      return localStorage.getItem("notificationTime") || "17:00";
    }
    getAllowNotifications = () => {
      return localStorage.getItem("allowNotifications") || true;
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
          <p>Benachrichtigungen einschalten:</p>
          <div style={{width: "200px", margin: "20px"}}>
            <IonToggle checked={this.state.allowNotifications} onIonChange={
              e => {
                this.setState({allowNotifications: e.detail.checked});
                localStorage.setItem("allowNotifications", e.detail.checked);
                }
              } />
          </div>
          {this.state.allowNotifications ? 
            <div>
              <p>Jeden Tag:</p>
              <div style={{width: "200px"}}>
                <TimePickerWrapper 
                  theme="classic" 
                  time={this.state.notificationTime}
                  onTimeChange={(options)=>{ // you can get hour, minute and meridiem here
                    const { hour, minute, meridiem } = options; 
                    console.log(options);
                    this.setState({notificationTime: `${hour}:${minute}`});
                    localStorage.setItem("notificationTime", `${hour}:${minute}`);
                    }
                  }
                />   
              </div>
            </div>
            : ""}
        </Page>
      );
    }
    
  }
  