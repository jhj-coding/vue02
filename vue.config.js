const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //assets目录
  assetsDir: 'static',
  // favicon:"static/favicon.ico" ,          //新增
  //控制静态资源访问路径
  // 例如 https://www.ruoyi.vip/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.ruoyi.vip/admin/，则设置 baseUrl 为 /admin/。
  // publicPath: '/customfile/',
  // publicPath:'./',
  devServer:{
    host:'localhost',
    // port:80,
    open:true,
    historyApiFallback: true,
    // proxy:{
    //   '/api':{
    //     target:'http://localhost:8080',
    //     changeOrigin: true,
    //     pathRewrite:{
    //       "^/api":''
    //     }
    //   }
    // }
  }
})
