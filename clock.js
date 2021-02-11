var CronJob = require('cron').CronJob;
new CronJob({
	cronTime: "30 * * * * *",//30 seconds after every minute
	onTick: () => {
		console.log(new Date());
	},
	start: true,
	timeZone: "Asia/Tokyo"
});