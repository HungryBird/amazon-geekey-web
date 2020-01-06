const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/home'),
        children: [
            {
                path: '/',
                component: () => import('@/pages/dash/index'),
            },
            {
                path: '/about',
                component: () => import('@/pages/about/index'),
            },
            {
                path: '/case',
                component: () => import('@/pages/case/index'),
            },
            {
                path: '/problem',
                component: () => import('@/pages/problem/index'),
            },
            {
                path: '/contact',
                component: () => import('@/pages/contact/index'),
            },
        ],
    },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: () => import('@/views/login'),
    // },
    {
        path: '*',
        name: '404',
        component: () => import('@/pages/errPages/404'),
    },
    {
        path: '/401',
        name: '401',
        component: () => import('@/pages/errPages/401'),
    }
]

export default routes;