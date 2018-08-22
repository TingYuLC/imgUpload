/*
* @Desc:   公共函数
* @Date:   2018-05-27
* @Author: Bob
*/
const errCode = require('../config/err_code_esop');
const imp = {};

/** 异常处理 */
imp.errorHandle =  async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error('system error', err.message || err);
    // 自定义
    if (err.code && !isNaN(parseInt(err.code))) {
      ctx.response.body = err;
      return;
    }
    // 异常
    ctx.response.body = { code: errCode.system_err, msg: err.message || 'error' };
  }
};

module.exports = imp;