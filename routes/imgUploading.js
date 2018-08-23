const Router = require('koa-router');
const router = new Router({ prefix: '/upload' });
const controllers = require('../controllers/imgUploading');
const common = require('../service/common')

router.all('*', common.errorHandle);

router.get('/status', controllers.getStatus);

router.post('/saveImgServer', controllers.saveImgServer);
router.post('/saveImgStorage', controllers.saveImgStorage);

module.exports = router;
