const path = require('path');
const common = require('../utils/common');

const config = {
  port: 3000,
  koaBodyConfig: {
    multipart:true, // 支持文件上传
    encoding:'gzip',
    formidable:{
      uploadDir:path.join('/data/upload/'), // 设置文件上传目录
      keepExtensions: true,    // 保持文件的后缀
      maxFieldsSize:2 * 1024 * 1024, // 文件上传大小
      onFileBegin:(name, file) => { // 文件上传前的设置
        const dir = path.join('/data/upload');
        common.checkDirExist(dir);
        file.path = `${dir}/${file.name}`;
      },
    }
  }
}

module.exports = config