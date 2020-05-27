
import React from 'react';
import * as Ion from '@ionic/react';
import Page from '../components/Page';


export default class extends React.Component {
        
    constructor(props){
      super(props);
      this.state = {language: this.getLanguage()}
    }

    getLanguage = () => {
      return localStorage.getItem("language") || "";
    }

    render() {
      const language = this.state.language;
      let lang_div;
      if(language == "" || language == "de"){
        lang_div = (
          <div>
            <p>Der Covid-19-Tracker wurde ursprünglich von mehreren unabhängigen Forschern und Software-Entwicklern im Austausch mit der Gesundheitsdirektion des Kantons Bern realisiert. Er wird nun von einem Konsortium, welches die ETH Zürich und die Gesundheitsdirektion des Kantons Bern einschliesst, geleitet.</p>
            <p>Ziel des Covid-19-Trackers ist es, in kurzer Zeit möglichst viele Daten von gesunden und infizierten Personen in der Schweiz zusammentragen. Diese Daten sollen unter anderem dazu dienen, ein differenziertes Bild der Corona-Situation zu erhalten.</p>
            <p>Mehr Informationen:</p>
            <ul>
              <li><a href="/p/faq.html">Häufig gestellte Fragen</a></li>
              <li><a href="/p/study_info.html">Informationen für Teilnehmende</a></li>
            </ul> 
          </div>
        )
      }
      else if(language == "en"){
        lang_div = (
          <div>
            <p>The COVID-19 tracker was created by several independent researchers and software developers in collaboration with the health department of the Canton of Bern.</p>
            <p>The aim of the COVID-19 tracker is to collect as much data as possible as quickly as possible from both healthy and infected people in Switzerland. Among other things, this data is intended to provide a more detailed picture of the corona situation in different parts of our country.</p>
            <p>More information:</p>
            <ul>
              <li><a href="/p/faq.html">FAQ</a></li>
              <li><a href="/p/study_info.html">Information for participants</a></li>
            </ul> 
          </div>
        )
      }
      else if(language == "it"){
        lang_div = (
          <div>
            <p>Il tracciamento del Covid-19 è stato implementato da diversi ricercatori e sviluppatori di software indipendenti, con il sostegno del Dipartimento della sanità del Canton Berna.</p>
            <p>L’obiettivo del tracciamento del Covid-19 è quello di raccogliere in Svizzera, in tempi brevi, il maggior numero possibile di dati sulle persone sane e sulle persone positive al coronavirus. Tali dati dovrebbero essere finalizzati, tra l’altro, a ottenere un quadro differenziato della situazione del coronavirus.</p>
            <ul>
              <li><a href="/p/faq.html">FAQ</a></li>
              <li><a href="/p/study_info.html">Foglio informativo per i partecipanti</a></li>
            </ul> 
          </div>
        )
      }
      else if(language == "fr"){
        lang_div = (
          <div>
            <p>Le Covid-19-Tracker est réalisé par différents chercheurs et développeurs de logiciels, en collaboration avec la Direction de la santé publique du canton de Berne.</p>
            <p>L’objectif du Covid-19-Tracker est de récolter, dans les plus brefs délais, un maximum de données de personnes saines et infectées en Suisse. Ces données doivent notamment permettre d’obtenir une image différenciée de la situation en lien avec le nouveau coronavirus.</p>
            <ul>
              <li><a href="/p/faq.html">FAQ</a></li>
              <li><a href="/p/study_info.html">Information aux participants</a></li>
            </ul> 
          </div>
        )
      }
      return (
        <Page title="About" menu padding >
          {lang_div}
        </Page>
      );
    }
    
  }
  