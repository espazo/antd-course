export default {
    singular: true,
    routes: [
        {path: 'list', component: './list'},
        {
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