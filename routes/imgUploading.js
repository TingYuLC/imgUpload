const Router = require('koa-router');
const router = new Router({ prefix: '/upload' });
const controllers = require('../controllers/imgUploading');
const common = require('../service/common')

router.all('*', common.errorHandle);

router.get('/status', controllers.getStatus);

router.post('/saveImg', controllers.saveImg);

module.exports = router;
