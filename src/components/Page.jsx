
import React from 'react';
import * as Ion from '@ionic/react';

/*
	Usage:

	<Page title="Home" large padding menu >
		<p>content here</p>
	</Page>

*/

const Page = props => (
  <Ion.IonPage>
    <Ion.IonHeader style={{backgroundColor: '#f74141'}}>

      <Ion.IonToolbar color="primary">
        <Ion.IonButtons slot="start">
          {props.menu && <Ion.IonMenuButton />}
          <Ion.IonBackButton />
        </Ion.IonButtons>
        <Ion.IonTitle>{props.title}</Ion.IonTitle>
      </Ion.IonToolbar>

    </Ion.IonHeader>
    <Ion.IonContent>
    	{props.large && (
	      <Ion.IonHeader collapse="condense">              
	        <Ion.IonToolbar color="primary">      
	          <Ion.IonTitle size="large">{props.title}</Ion.IonTitle>
	        </Ion.IonToolbar>
	      </Ion.IonHeader>
    	)}
      <div style={{padding: props.padding && 13, ...props.style}}>
      	{props.children}
      </div>
    </Ion.IonContent>

  </Ion.IonPage>
)

export default Page