export default {
    singular: true,
    routes: [{
        path: '/',
        component: '../layout/',
        routes: [
            {
                path: 'puzzlecards',
                component: './puzzlecards',
            },
            {
                path: '/helloworld',
                component: './HelloWorld',
            },
            {
                path: '/',
                component: './HelloWorld',
            },
            {
                path: '/dashboard',
                routes: [
                    {path: 'analysis', component: './Dashboard/Analysis'},
                    {path: 'monitor', component: './Dashboard/Monitor'},
                    {path: 'workplace', component: './Dashboard/Workplace'},
                ],
            },
        ],
    }],
    plugins: [
        ['umi-plugin-react', {
            Dva: true,
            antd: true,
        }],
    ],
};