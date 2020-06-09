import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component:Msite,
            meta:{
                isshow:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                isshow:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                isshow:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                isshow:true
            }
        },
        {
            path:'/',
            redirect:'/msite',
            meta:{
                isshow:true
            }
        },
        {
            path:'/login',
            component:Login
        }
    ]
})