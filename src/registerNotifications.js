
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
		const intM = parseInt(minute); //int and string both don't work
		console.log(intH);
		console.log(intM);
		const year = new Date().getFullYear();
		const curr_month = new Date().getMonth(); //0 indexed
		const curr_date = new Date().getDate(); //1 indexed
		const months = [...Array(12).keys()].filter((month)=>month>=curr_month);
		const days = [...Array(31).keys()].filter((day)=>day>=curr_date);
		const notifications = months.map((month) =>
			{
				return days.map((day) => {
					const date = new Date(year, month, day, hour, minute);
					console.log(year, month, day, hour, minute);
					console.log(date);
					return {
						title: "Reminder: Help us track the disease",
						body: `Fill out the survey - ${hour}:${minute}`,
						id: 1, 
						schedule: { at: date }
					}
				})
			});
		console.log(notifications.flat());
		const notifs = await LocalNotifications.schedule({
			notifications: notifications.flat()
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