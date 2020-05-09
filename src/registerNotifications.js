
import { Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;

async function registerNotifications(hour, minute) {

	console.log('request permissions...');
	LocalNotifications.requestPermission().then(r => {
			console.log(r)
	})

	/*const notifs = await LocalNotifications.schedule({
		notifications: [
			{
				title: "Reminder: Help us track the disease",
				body: "Fill out the survey",
				id: 1,
				schedule: { at: new Date(Date.now() + 1000 * 10) },
			}
		]
	});*/
	if(hour !== -1 && minute !== -1){
		const intH = parseInt(hour);
		const intM = parseInt(minute);
		console.log(intH);
		console.log(intM);
		const notifs = await LocalNotifications.schedule({
			notifications: [
				{
					title: "Reminder: Help us track the disease",
					body: `Fill out the survey ${hour}:${minute}`,
					id: 1, 
					trigger: { every: { hour: intH, minute: intM } }
					// {at: new Date(new Date().getTime() + 3600)},
					// { every: { hour: intH, minute: intM } },
					// progressBar: { value: 20 }
				}
			]
		});
		console.log('scheduled notifications', notifs);
	}
	else { // delete like this?
		const notifs = await LocalNotifications.schedule({
			notifications: []
		});
		console.log('descheduled notifications', notifs);
	}
      
}

export default registerNotifications;