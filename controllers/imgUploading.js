const imgUploading = require('../models/imgUploading');
const models = new imgUploading();
const errCode = require('../config/err_code_esop');

const imp = {};

imp.getStatus = async (ctx, next) => {
  const rst = {code: 0, msg: 'ok'};
  ctx.body = rst;
};

imp.saveImgBase = async (ctx, next) => {
  const rst = await models.saveImgBase(ctx.request.body);
  ctx.body = rst;
}

imp.saveImgServer = async (ctx, next) => {
  const rst = await models.saveImgServer(ctx.request.files);
  ctx.body = {
    code: 0,
    data: {
      imgServer: rst
    }
  }
}

imp.saveImgStorage = async (ctx, next) => {
  const rst = await models.saveImgStorage(ctx.request.files);
  if (rst === 'error') {
    ctx.body = {
      code: errCode.common
    }
  } else {
    ctx.body = {
      code: 0,
      data: {
        imgStorage: rst
      }
    }
  }
}

module.exports = imp;