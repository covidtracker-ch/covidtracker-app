
import React from 'react';
import * as Ion from '@ionic/react';
import Page from '../components/Page';


export default class extends React.Component {
        
    render() {
      return (
        <Page title="Über uns" menu large padding >
          <p>Der Covid-19-Tracker wurde ursprünglich von mehreren unabhängigen Forschern und Software-Entwicklern im Austausch mit der Gesundheitsdirektion des Kantons Bern realisiert. Er wird nun von einem Konsortium, welches die ETH Zürich und die Gesundheitsdirektion des Kantons Bern einschliesst, geleitet.</p>
          <p>Ziel des Covid-19-Trackers ist es, in kurzer Zeit möglichst viele Daten von gesunden und infizierten Personen in der Schweiz zusammentragen. Diese Daten sollen unter anderem dazu dienen, ein differenziertes Bild der Corona-Situation zu erhalten.</p>
          <p>Mehr Informationen:</p>
          <ul>
          <li><a href="/p/faq.html">Häufig gestellte Fragen</a></li>
          <li><a href="/p/study_info.html">Informationen für Teilnehmende</a></li>
          </ul>          
        </Page>
      );
    }
    
  }
  