
import React from 'react';
import * as Ion from '@ionic/react';
import Page from '../components/Page';


export default class extends React.Component {
        
    render() {
      return (
        <Page title="Über uns" menu large padding >
          <p>Die Kampagne wurde von .... entwickelt.</p>
          <p>Ziel ist es, die räumliche Verteilung von COVID-19 zu erfassen.</p>
          <p>Mehr Informationen:</p>
          <ul>
          <li><a href="https://www.covidtracker.ch/faq.html" target="_blank">Häufig gestellte Fragen</a></li>
          <li><a href="https://www.covidtracker.ch/study_info.html" target="_blank">Informationen für Teilnehmende</a></li>
          <li>...</li>
          </ul>
          
          
        </Page>
      );
    }
    
  }
  