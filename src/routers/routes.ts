import Suscription from '../components/suscription/suscription';
import {Route} from '../interface/interface';
import { Categories, Home} from '../pages';

export const routes:Route[] = [
    {
        to:'/',
        path:'/',
        Component: Home,
        name:'general'
    },
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
    {
        to:'/suscription',
        path:'/suscription',
        Component: Suscription,
        name:'suscription'
    },
];