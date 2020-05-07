
import React from 'react';
import * as Ion from '@ionic/react';
import Page from '../components/Page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Questionnaire() {
  let { path } = useParams();

  const isLocal = false;
  const src = isLocal ? "http://10.1.1.60:4567/":"https://covidtracker.ch/";  
  
  const getLanguage = () => {
    return localStorage.getItem("language") || "";
  }
  const lang = getLanguage();

  const cleanPath = lang ?? "";
  const p = (cleanPath === "de") ? src : src+cleanPath+"/"+path;
  console.log(cleanPath);
  console.log(p);

  return (
    <Page title="" menu style={{overflow: 'hidden', position: 'relative', width: '100%', height: '100%'}}>
      <iframe 
        id="main_iframe" 
        src={p}></iframe>
    </Page>
  );
    
}
  
export default Questionnaire;