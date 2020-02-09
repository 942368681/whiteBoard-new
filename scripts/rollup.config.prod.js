import { terser } from 'rollup-plugin-terser';
import baseConfig from './rollup.config.base';
import { name, version, author } from '../package.json';

// banner
const banner =
    `${'/*!\n' + ' * '}${name}.js v${version}\n` +
    ` * (c) 2019-${new Date().getFullYear()} ${author}\n` +
    ` * Released under the MIT License.\n` +
    ` */`;

export default [
    {
        input: 'src/main.js',
        output: {
            name,
            banner,
            file: `dist/${name}.js`,
            format: 'umd'
        },
        plugins: [
            ...baseConfig.plugins,
            terser()
        ]
    }
];