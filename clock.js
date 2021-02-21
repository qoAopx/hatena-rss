const CronJob = require('cron').CronJob;
const request = require('request');

const get_rss = function (url) {
	return new Promise((resolve, reject) => {
		request(url + '?' + (new Date()).getTime(), (error, response, body) => {
			// エラーチェック
			if (error !== null) {
				reject(error);
			}
			// レスポンスコードとHTMLを表示
			console.log('statusCode:', response && response.statusCode);
			resolve(true);
		});
	})
};

const job = new CronJob({
	cronTime: "0 0 */6 * * *",//every 6 hour
	onTick: () => {
		console.log(new Date());
		get_rss('https://hatena-rss.herokuapp.com/');
	},
	onComplete: (s) => {
		console.log('onComplete',s);
	},
	start: true,
	timeZone: "Asia/Tokyo"
});

console.log(job);
