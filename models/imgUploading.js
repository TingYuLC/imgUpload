const cos = require('../utils/cos');

class imgUploading {
  constructor () {
  }

  saveImg (files) {
    return cos.uploadFile(files.myImg.name, files.myImg.path);
  }
}

module.exports = imgUploading;