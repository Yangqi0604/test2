const mainRouter = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/index.vue'),
        redirect: { name: 'home' },
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('../views/home/index.vue')
            },
            {
                path:'dstance',
                name:'dstance',
                component: () => import('../views/dstance/index.vue')
            },
            {
                path:'order',
                name:'order',
                component: () => import('../views/order/index.vue')
            }
        ]
    }
]
export default mainRouter