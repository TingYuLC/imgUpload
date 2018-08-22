const imgUploading = require('../models/imgUploading');
const models = new imgUploading();

const imp = {};

imp.getStatus = async (ctx, next) => {
  const rst = await models.getStatus();
  ctx.body = rst;
};

imp.saveImg = async (ctx, next) => {
  const rst = await models.saveImg(ctx.request.files);
  ctx.body = rst;
}

module.exports = imp;