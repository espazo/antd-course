export default {
    singular: true,
    theme: {
        '@primary-color': '#30b767',
    },
    routes: [
        {
            path: '/',
            component: '../layout/',
            routes: [
                {
                    path: 'index',
                    component: './index',
                },
                {
                    path: 'css-modules-with-less',
                    component: './css-modules-with-less',
                },
                {
                    path: 'css-modules-with-antd',
                    component: './css-modules-with-antd',
                },
                {
                    path: 'list',
                    component: './list',
                },
                {
                    path: 'puzzlecards',
                    component: './puzzlecards',
                },
                {
                    path: '/helloworld',
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
        },
    ],
    proxy: {
        '/dev': {
            target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
            changeOrigin: true,
        },
    },
    plugins: [
        ['umi-plugin-react', {
            dva: true,
            antd: true,
        }],
    ],
};