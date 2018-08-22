const base_err = 30000;
const system_err = 50000;  // 未知错误

const err_code_esop = {
    system_err: system_err, // 系统错误
    common: base_err,  // 通用错误(包括行)

};

module.exports = err_code_esop;