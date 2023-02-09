import { Home, Categories} from '../pages';
import {Route} from '../interface/interface';

export const routes:Route[] = [
    {
        to:'/',
        path:'/',
        Component: Home,
        name:'genaral'
    },
    // {
    //     to:'/news',
    //     path:'/news',
    //     Component: News,
    //     name:'news'
    // },
    {
        to:'/business',
        path:'/business',
        Component: Categories,
        name:'business'
    },
    {
        to:'/entertainment',
        path:'/entertainment',
        Component: Categories,
        name:'entertainment'
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
        to:'/technology',
        path:'/technology',
        Component: Categories,
        name:'technology'
    },
];