const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-body');
const config = require('./config/base');
const router = require('./routes/imgUploading');
const cors = require('@koa/cors');

app.use(cors());
app.use(koaBody(config.koaBodyConfig));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.port, () => {
  console.log(`serve is listening at ${config.port}`);
});
