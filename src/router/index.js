import Vue from 'vue'
import VueRouter from 'vue-router'

let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        //如果成功 调用原来的push方法  
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
const Home = () => import('@/views/home')
const WorldMap = () => import('@/views/world-map')
const ZhMap = () => import('@/views/zh-map')
const Test = () => import('@/views/test')
const Drools = () => import('@/views/drools')
//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [//配置对应映射关系
    {
        path: "/",
        component: Home,
        children: [
            {
                //路由器名字
                name: 'WorldMap',
                path: 'world-map',
                component: WorldMap,
            },
            {
                //路由器名字
                name: 'ZhMap',
                path: 'zh-map',
                component: ZhMap,
            },
            {
                //规则校验
                name: 'drools',
                path: 'drools',
                component: Drools,
            }
        ]
    }, {
        path: "/test",
        component: Test
    }

]

const router = new VueRouter({
    routes,
    mode: 'history',//去除#
    // base: '/customfile',
})

//导出
export default router