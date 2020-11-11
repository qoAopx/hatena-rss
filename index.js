const express = require('express');

const app = express();

app.get('/', (req, res) => {
	console.log('Access', new Date());     // コンソール出力
	res.send('Hello World!');  // ブラウザでのアクセス時に画面に表示されるモノ
});

// サーバ起動
const server = app.listen(process.env.PORT || 8080, () => {
	const host = server.address().address;
	const port = server.address().port;
	console.log(`Example app listening at http://${host}:${port}`);
	console.log('process.env', process.env);     // コンソール出力
});
