const cos = require('../utils/cos');
const dac = require('./dac');

class imgUploading {
  constructor () {
  }

  saveImgBase (data) {
    return insertDataImg().then(rows => {
      return Promise.resolve({code: 0, msg: 'ok'})
    });

    function insertDataImg () {
      const sql = `insert into save_images set ?`
      return dac.query(sql, data);
    }
  }

  saveImgServer (files) {
    const file = files.imgServer;
    const imgName = file.path.substring(file.path.lastIndexOf('/') + 1) ;
    const imgPath = 'https://luojc.cn/uploadImg/' + imgName;
    return imgPath;
  }

  saveImgStorage (files) {
    return cos.uploadFile(files.imgStorage.name, files.imgStorage.path);
  }
}

module.exports = imgUploading;