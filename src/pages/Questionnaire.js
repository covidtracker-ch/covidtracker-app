
import React from 'react';
import * as Ion from '@ionic/react';
import Page from '../components/Page';


export default class extends React.Component {
        
    render() {
      return (
        <Page title="" menu style={{overflow: 'hidden', position: 'relative', width: '100%', height: '100%'}}>
          <iframe width="100%"
            style={{
              position: 'absolute',
              height: '100%',
              border: 0,
              width: '100%'
            }} 
            src="https://covidtracker.ch"></iframe>
        </Page>
      );
    }
    
  }
  