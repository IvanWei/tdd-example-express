const express = require('express');
const app = express();
const http = require('http');
const port = 3000;
global.request = require('supertest'); // 測試 API 時使用
request = request(app); // 設定 Hostname 給 supertest，省去之後每一次指定 Hostname

app.use('/demo', require('./api/controller/demo'));

http.createServer(app)
.listen(port, () => {
  console.log('App listening on port ' + port + '!'); // Server 啟動後吐回目前的 PORT 碼
});
