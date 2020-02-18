import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import Types from '../pages/Types/Types'
import Topic from '../pages/Topic/Topic'
import Shopcart from '../pages/Shopcart/Shopcart'
import Profile from '../pages/Profile/Profile'


export default [
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/home',
        component:Home,
    },
    {
        path:'/types',
        component:Types,
    },
    {
        path:'/topic',
        component:Topic,
    },
    {
        path:'/shopcart',
        component:Shopcart,
    },
    {
        path:'/profile',
        component:Profile,
    },
    {
        path:'/',
        redirect:'/home',
    },
]