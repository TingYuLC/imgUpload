const path = require('path');
const common = require('../utils/common');

const config = {
  port: 3040,
  // 数据库配置
  dbInfo: {
    local: {
      dbHost: '127.0.0.1',
      dbUser: 'root',
      dbPort: '3306',
      dbPWD: 'welcome123',
      dbName: 'images',
    },
    dev: {
      dbHost: '139.199.198.65',
      dbUser: 'root',
      dbPort: '3306',
      dbPWD: '2491531ljc',
      dbName: 'images',      
    }
  },
  corsConfig: {
    origin: (ctx) => {
      let allowedOrigin = ['https://upload.luojc.cn'];
      let origin = ctx.header.origin;
      if (origin.indexOf('http://10.9.8') > -1 || origin.indexOf('http://localhost') > -1) {
        return origin;
      }
      if (allowedOrigin.includes(origin)) {
        return origin;
      }
      return false;
    },
    allowMethods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
    credentials: true
  },
  koaBodyConfig: {
    multipart:true, // 支持文件上传
    encoding:'gzip',
    formidable:{
      uploadDir:path.join('/data/upload/'), // 设置文件上传目录
      keepExtensions: true,    // 保持文件的后缀
      onFileBegin:(name, file) => { // 文件上传前的设置
        const dir = path.join('/data/upload');
        common.checkDirExist(dir);
        file.path = `${dir}/${file.name}`;
      },
    }
  },
  koaBodyConfigTmp: {
    multipart:true, // 支持文件上传
    encoding:'gzip',
    formidable:{
      uploadDir:path.join('/data/tmp/'), // 设置文件上传目录
      keepExtensions: true,    // 保持文件的后缀
      onFileBegin:(name, file) => { // 文件上传前的设置
        const dir = path.join('/data/tmp');
        common.checkDirExist(dir);
        file.path = `${dir}/${file.name}`;
      },
    }
  }
}

module.exports = config