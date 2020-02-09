import htmlTemplate from 'rollup-plugin-generate-html-template';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import baseConfig from './rollup.config.base';
import { host } from './ip';

export default [
    {
        input: 'example/index.js',
        output: {
            name: 'index',
            file: 'dist/index.js',
            format: 'umd',
            sourcemap: true
        },
        plugins: [
            ...baseConfig.plugins,
            htmlTemplate({
                template: 'example/index.html',
                target: 'index.html',
            }),
            serve({
                open: true,
                contentBase: 'dist',
                host: host() || 'localhost',
                port: 3003,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }),
            livereload()
        ]
    }
];