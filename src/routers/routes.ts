import { Home, News, Categories} from '../pages';
import {Route} from '../interface/interface';

export const routes:Route[] = [
    {
        to:'/',
        Component: Home,
        name:'home'
    },
    {
        to:'/news',
        Component: News,
        name:'news'
    },
    {
        to:'/categories',
        Component: Categories,
        name:'categories'
    },
    {
        to:'/entertaiment',
        Component: Categories,
        name:'entertaiment'
    },
    {
        to:'/health',
        Component: Categories,
        name:'health'
    },
    {
        to:'/science',
        Component: Categories,
        name:'science'
    },
    {
        to:'/sports',
        Component: Categories,
        name:'sports'
    },
    {
        to:'/tecnology',
        Component: Categories,
        name:'tecnology'
    },
];