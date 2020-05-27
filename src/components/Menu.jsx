import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { mailOutline, cogOutline, informationOutline } from 'ionicons/icons';
import './Menu.css';

const int = {
  survey: {
    de: 'Umfrage',
    en: 'Survey',
    it: 'Inchiesta',
    fr: 'Sondage '  
  },
  settings: {
    de: 'Einstellungen',
    en: 'Settings',
    it: 'impostazioni',
    fr: 'Paramètres'
  }
}

function getLanguageCode() {
  const s = localStorage.getItem('language');
  if(!s || s == '' || s == 'de') return 'de';
  return s;
}
console.log(int.survey[getLanguageCode()])

const appPages = [
  {
    title: int.survey[getLanguageCode()],
    url: '/',
    iosIcon: mailOutline
  },
  {
    title: int.settings[getLanguageCode()],
    url: '/settings',
    iosIcon: cogOutline
  },
  {
    title: 'About',
    url: '/about',
    iosIcon: informationOutline
  }
];

const Menu = () => {
  const location = useLocation();
  /*const getLanguage = () => {
    return localStorage.getItem("language") || "";
  }
  const language = getLanguage();*/

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Covid-19 Tracking</IonListHeader>
          <IonNote> </IonNote>
          {appPages.map((appPage, index) => {
            /*if(appPage.url === "/" && language !== ""){
              appPage.url = `/p/${language}/`;
            }*/
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
