const fs = require('fs');
const COS = require('cos-nodejs-sdk-v5');

let cos = new COS({
    AppId: '1253715374',
    SecretId: 'AKIDjMo48zLDXeZImGufcOyPn37yjKjw3oTw',
    SecretKey: 'QfiYCeuypV0JQL5d9YlmbDdrshKo9Ugh',
});

const imp = {};

imp.uploadFile = (key, path) => {
  // 分片上传
  return new Promise(function (resolve, reject) { 
    cos.sliceUploadFile({
      Bucket: 'luojc-1253715374',
      Region: 'ap-guangzhou',
      Key: key,
      FilePath: path
    }, (err, data) => {
      fs.unlink(path, error => {
        if (err || error) {
          return reject('error')
        }
        return resolve('//' + data.Location)
      })
    })
  });
}

module.exports = imp;