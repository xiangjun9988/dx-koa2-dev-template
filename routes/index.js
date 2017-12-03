const router = require('koa-router')()
const api = require("./mock")

router.get('/', async(ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async(ctx, next) => {
  ctx.body = 'koa2 string'
})



/* mock测试数据 */
router.get('/api/mock/test', async(ctx, next) => {
  let data = api.mockUserInfo();
  ctx.body = {
    code: 0,
    msg: 'mockjs模拟请求用户信息',
    data: data
  }

})


router.get('/sy_shop/api/index.do', async(ctx, next) => {
   ctx.body = api.suyunData();
})




router.get('/json', async(ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router