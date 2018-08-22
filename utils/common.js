const fs = require('fs');
const imp = {};

imp.getUploadFileExt =  function (name) {
  let ext = name.split('.');
  return ext[ext.length - 1];
}

imp.checkDirExist = function (p) {
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p);
  }
}

module.exports = imp;