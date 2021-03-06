
import Menu from './components/Menu';
import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import './app.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/style.css';

import Questionnaire from './pages/Questionnaire';
import About from './pages/About';
import Settings from './pages/Settings';
import registerNotifications from './registerNotifications';

export default class extends React.Component {

  componentDidMount() {
    const notificationTime = this.getNotificationTime();
    this.hour = notificationTime.split(":")[0];
    this.minutes = notificationTime.split(":")[1];
    this.hasRegistered = false;
  }

  getNotificationTime = () => {
    return localStorage.getItem("notificationTime") || "17:00";
  }

  register(){
    const allowNotifications = localStorage.getItem("allowNotifications");
    if(this.hasRegistered === false && allowNotifications !== false){
      this.hasRegistered = true;
      console.log("registered notification");
      registerNotifications(this.hour, this.minutes);
    }
  }

  render() {
    return (
      <div onClick={()=>this.register()}>
        <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
            <Route path="/settings" component={Settings} exact />
            <Route path="/about" component={About} exact />
            <Route path="/p/:path" component={Questionnaire} exact />
            <Route path="/" component={Questionnaire} exact />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </div>
    )
  }
}
