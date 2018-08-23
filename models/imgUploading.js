const cos = require('../utils/cos');

class imgUploading {
  constructor () {
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