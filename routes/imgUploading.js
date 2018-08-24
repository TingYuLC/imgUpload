const Router = require('koa-router');
const router = new Router({ prefix: '/upload' });
const controllers = require('../controllers/imgUploading');
const common = require('../service/common')
const koaBody = require('koa-body');
const config = require('../config/base');

router.all('*', common.errorHandle);

router.get('/status', controllers.getStatus);

router.post('/saveImgBase', controllers.saveImgBase)
router.post('/saveImgServer', koaBody(config.koaBodyConfig), controllers.saveImgServer);
router.post('/saveImgStorage', koaBody(config.koaBodyConfigTmp), controllers.saveImgStorage);

module.exports = router;
