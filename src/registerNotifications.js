
import { Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;

async function registerNotifications() {

	console.log('request permissions...');
	LocalNotifications.requestPermission().then(r => {
			console.log(r)
	})

	const notifs = await LocalNotifications.schedule({
		notifications: [
			{
				title: "Reminder: Help us track the disease",
				body: "Fill out the survey",
				id: 1,
				schedule: { at: new Date(Date.now() + 1000 * 10) },
			}
		]
	});
	console.log('scheduled notifications', notifs);
      
}

export default registerNotifications;