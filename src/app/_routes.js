import Home from 'home';
import About from 'about';

export const Routes=[
    {
        component:Home,
        menu_title:'home',
        endpoint:'/',
    },
    {
        component:About,
        menu_title:'about',
        endpoint:'/about',
    },
];