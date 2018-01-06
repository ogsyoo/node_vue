// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./db');
const express = require('express');
const $ = require('jquery');
const router = express.Router();
const url = require('url');
/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount', (req, res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newAccount = new models.Login({
        account: req.body.account,
        password: req.body.password
    });
    // 保存数据newAccount数据进mongoDB
    newAccount.save((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('createAccount successed');
        }
    });
});
// 获取已有账号接口
router.post('/api/gsy', (req, res) => {
    // 通过模型去查找数据库
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("gsy");
});

router.post('/post', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send('post');
})
router.put('/post', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send('put');
})
router.post('/gsy', (req, res) => {
    console.log('gsy');
    res.setHeader("Access-Control-Allow-Origin", "*");
    var data = { 'name': 'jifeng', 'company': 'taobao' };
    var params = url.parse(req.url, true);
    //console.log('请求1:'+params);
    if (params.query && params.query.callback) {
        //console.log('请求2:'+params.query);
        var str = params.query.callback + '(' + JSON.stringify(data) + ')';//jsonp
        res.send(str);
    } else {
        res.send(JSON.stringify(data));//普通的json
    }
    // // 通过模型去查找数据库
    // var r = [{"_name":"湖南省","_regionId":134},{"_name":"北京市","_regionId":143}];
    // res.send("callback("+JSON.stringify(r)+")");
});
module.exports = router;