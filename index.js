const express = require('express');
const request = require('request');

const app = express();

const rss_feed = function(url) {
	return new Promise((resolve,reject)=> {
		request(url+'?'+(new Date()).getTime(), (error, response, body) => {
			// エラーチェック
			if (error !== null) {
				reject(error);
			}
			// レスポンスコードとHTMLを表示
			//console.log('statusCode:', response && response.statusCode);
			//console.log('body:', body);
			resolve(body);			
		});
	})
};

app.get('/', async (req, res) => {
	rss_feed('https://koleben.hatenablog.com/feed')
		.then((body)=>{
			res.header('access-control-allow-origin', '*');
			res.header('content-type', 'application/xml');
			//console.log('Access', new Date());     // コンソール出力
			res.send(body);  // ブラウザでのアクセス時に画面に表示されるモノ
		})
		.catch((error)=>{
			res.header('access-control-allow-origin', '*');
			res.header('content-type', 'application/xml');
			res.send('');  // ブラウザでのアクセス時に画面に表示されるモノ
		});
});

// サーバ起動
const server = app.listen(process.env.PORT || 8080, () => {
	//const host = server.address().address;
	//const port = server.address().port;
	//console.log(`Example app listening at http://${host}:${port}`);
	console.log('process.env', process.env);     // コンソール出力
});
