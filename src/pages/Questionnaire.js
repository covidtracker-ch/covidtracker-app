
import React from 'react';
import * as Ion from '@ionic/react';
import Page from '../components/Page';


export default class extends React.Component {

    render() {
      const isLocal = false;
      const src = isLocal ? "http://10.1.1.60:4567/":"https://covidtracker.ch/";  
      return (
        <Page title="" menu style={{overflow: 'hidden', position: 'relative', width: '100%', height: '100%'}}>
          <iframe id="main_iframe" 
            src={src}></iframe>
        </Page>
      );
    }
    
  }
  