global.Vue = require('vue');
var express = require('express');
var fs = require('fs');
var renderer = require('vue-server-renderer').createRenderer();

//instancia do Vue.js
var app = require('./js/app');
var layout = fs.readFileSync('./index.html','utf8');
var server = express();

server.use('/js', express.static('js'));

server.get('/', function(request, response){

    renderer.renderToString(app, function(error, html){
        if(error){
            throw error;
        }
        var content = layout.replace("<div id=\"app\"></div>", html)
        response.send(content);
    });

});

server.listen(3000, function(error){
    if(error){
        throw error;
    }
    console.log("Servidor rodando na porta 3000");
});