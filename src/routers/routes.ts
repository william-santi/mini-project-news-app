import { Home, News, Categories} from '../pages';
import {Route} from '../interface/interface';

export const routes:Route[] = [
    {
        to:'/',
        path:'/',
        Component: Home,
        name:'home'
    },
    {
        to:'/news',
        path:'/news',
        Component: News,
        name:'news'
    },
    {
        to:'/categories',
        path:'/categories',
        Component: Categories,
        name:'categories'
    },
    {
        to:'/entertaiment',
        path:'/entertaiment',
        Component: Categories,
        name:'entertaiment'
    },
    {
        to:'/health',
        path:'/health',
        Component: Categories,
        name:'health'
    },
    {
        to:'/science',
        path:'/science',
        Component: Categories,
        name:'science'
    },
    {
        to:'/sports',
        path:'/sports',
        Component: Categories,
        name:'sports'
    },
    {
        to:'/tecnology',
        path:'/tecnology',
        Component: Categories,
        name:'tecnology'
    },
];