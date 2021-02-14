var CronJob = require('cron').CronJob;
new CronJob({
	cronTime: "0 0 * * * *",//every hour
	onTick: () => {
		console.log(new Date());
	},
	start: true,
	timeZone: "Asia/Tokyo"
});
