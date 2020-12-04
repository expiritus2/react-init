const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');

class Installer {
    static execOptions = { cwd: ROOT, stdio: 'inherit' }

    run() {
        this.defineDependencies();
        this.defineDevDependencies();
        this.installDependencies();
        this.installDevDependencies();
        this.install();
    }

    defineDependencies() {
        this.dependencies = [
            'axios',
            'react',
            'react-dom',
            'react-redux',
            'react-router-dom',
            'react-router-prop-types',
            'redux',
            'redux-actions',
            'redux-thunk',
            'classnames',
        ];
    }

    defineDevDependencies() {
        this.devDependencies = [
            '@babel/core',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-transform-runtime',
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/runtime',
            'babel-eslint',
            'babel-loader',
            'mini-css-extract-plugin',
            'clean-webpack-plugin',
            'css-loader',
            'cssnano',
            'eslint',
            'eslint-config-airbnb',
            'eslint-plugin-import',
            'eslint-plugin-jsx-a11y',
            'eslint-plugin-prettier',
            'eslint-plugin-react',
            'eslint-plugin-react-hooks',
            'file-loader',
            'html-loader',
            'html-webpack-plugin',
            'husky',
            'postcss-import',
            'postcss-loader',
            'postcss-preset-env',
            'prettier',
            'sass-loader',
            'node-sass',
            'prop-types',
            'webpack',
            'webpack-cli',
            'webpack-dev-server',
            'webpack-merge',
            'dotenv',
            'redux-devtools-extension',
            'postcss',
        ];
    }

    installDependencies() {
        const dependencies = this.dependencies.join(' ');
        execSync(`yarn add ${dependencies}`, this.constructor.execOptions);
    }

    installDevDependencies() {
        const devDependencies = this.devDependencies.join(' ');
        execSync(`yarn add -D ${devDependencies}`, this.constructor.execOptions);
    }

    install() {
        execSync('yarn install', this.constructor.execOptions);
    }
}

const installer = new Installer();
installer.run();
