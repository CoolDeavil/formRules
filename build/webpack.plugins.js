const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');


exports.buildPlugs = () => {
    
    return  [
        new HtmlWebpackPlugin({
            title: 'FManager',
            template: './assets/template/formRules.html',
            filename: 'index.html',
            inject: 'head',      
            minify: false,  
        }),
        new MiniCssExtractPlugin({
            // filename: "./css/[name].[hash].css",
            filename: "./css/[name].min.css",
        }),
        new CopyPlugin({
            patterns:[
                {from: './assets/template/index.php', to: path.resolve(__dirname,'../public') },
                {from: './assets/template/favicon.ico', to:path.resolve(__dirname,'../public') },
                {from: './assets/template/mock.data.json', to:path.resolve(__dirname,'../public') },
            ]
        }),

    ]
}
