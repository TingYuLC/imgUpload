const errCode = require('../config/err_code_esop');
const fs = require('fs');
// 引入模块
const COS = require('cos-nodejs-sdk-v5');
// 创建实例
let cos = new COS({
    AppId: '1253715374',
    SecretId: 'AKIDjMo48zLDXeZImGufcOyPn37yjKjw3oTw',
    SecretKey: 'QfiYCeuypV0JQL5d9YlmbDdrshKo9Ugh',
});

class imgUploading {
  constructor () {
  }

  getStatus () {
    return {
      code: 0,
      msg: 'ok'
    }
  }

  saveImg (files) {
    // 分片上传
    return new Promise(function (resolve, reject) { 
      cos.sliceUploadFile({
        Bucket: 'luojc-1253715374',
        Region: 'ap-guangzhou',
        Key: files.myImg.name,
        FilePath: files.myImg.path
      }, function (err, data) {
        fs.unlink(files.myImg.path, error => {
          if (err || error) {
            return resolve({
              code: errCode.system_err
            })
          }
          return resolve({
            code: 0,
            data: {
              img: 'http://' + data.Location
            }
          })
        })
      })
    });
  }
}

module.exports = imgUploading;