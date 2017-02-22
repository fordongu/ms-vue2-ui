/**
 * Created by Bane.Shi.
 * Copyright KaShuo
 * User: Bane.Shi
 * Date: 2016/11/25
 * Time: 15:18
 */
"use strict";
import path from 'path';
import webpack from 'webpack';
import colors from 'colors';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TransferWebpackPlugin from 'transfer-webpack-plugin';
import Clean from 'clean-webpack-plugin';
import args from "node-args";
const development = 'DEVELOPMENT';
const production = 'PRODUCTION';
const ENV = args.env || development;
let config = {
    resolve:{
        alias:{
            'vue': 'vue/dist/vue.js',
            'jquery.resize':'vendor/jquery.ba-resize.js'
        },
        root: path.join(__dirname, 'src'),
        extensions: ['', '.js','vue'],
    },
    entry:{
        'js/index'  : './src/index.js',
        'js/style'  : './src/style.js',
/*        'css/theme-default/style.css':'./src/packages/theme-default/style.scss'*/
    },
    output:{
        path: path.resolve(__dirname,'lib'),
        filename:'[name].js',
        publicPath: 'MsVue2UI',
        libraryTarget: 'umd'
    },
    module:{
        loaders:[
            {test: /\.vue$/ ,loader : 'vue'},
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader' ,
                query:{
                    presets:['es2015','stage-3'],
                    plugins:['transform-runtime']
                },
            },
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?name=css/[name].[ext]") },
            {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader","css!sass?sourceMap?name=css/[name].[ext]") },
            {test: /\.(png|jpg|gif)$/,loader: "url?limit=2500" },
            {test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader?name=fonts/[name].[ext]" },
            //  {test: require.resolve('jquery'), loader: 'expose?window.jquery'},
            // {test: require.resolve('jquery'), loader: 'expose?$'},
        ]
    },
/*    vue:{
        loaders:{
            // html: 'vue-html-loader?removeOptionalTags=false&removeRedundantAttributes=false', //https://www.npmjs.com/package/html-minifier
            css: ExtractTextPlugin.extract('css'),
            'scss': ExtractTextPlugin.extract("css!sass"),
        }
    },*/
    plugins:[
        new Clean(['lib']),
        new TransferWebpackPlugin([
            // {from: 'images', to: 'images'}
        ], path.join(__dirname, 'lib')),
        new webpack.ProvidePlugin({
            _ : 'lodash',
            $ : 'jquery',
            jQuery : 'jquery',
        }),
        new ExtractTextPlugin('css/theme-default/style.css',{
            allChunks: true
        })
    ],
    devtool: (ENV == production)?'': '#source-map'
}
let collection = ((pluginItems)=>{
    let {plugins} = config;
    plugins = [...plugins,...pluginItems];
    Object.assign(config,{plugins});
});
const productionPlugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress:{
            warnings:false
        }
    })
];
switch (ENV){
    case development:
        break;
    case production:
        collection(productionPlugins);
        break;
    default:
        break;
}
module.exports = config;