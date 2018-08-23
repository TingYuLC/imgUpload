const imgUploading = require('../models/imgUploading');
const models = new imgUploading();
const errCode = require('../config/err_code_esop');

const imp = {};

imp.getStatus = async (ctx, next) => {
  const rst = {code: 0, msg: 'ok'};
  ctx.body = rst;
};

imp.saveImg = async (ctx, next) => {
  const rst = await models.saveImg(ctx.request.files);
  if (rst === 'error') {
    ctx.body = {
      code: errCode.common
    }
  } else {
    ctx.body = {
      code: 0,
      data: {
        img: rst
      }
    }
  }
}

module.exports = imp;