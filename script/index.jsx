var React = require('react');
var ReactDOM = require('react-dom');


var page = document.getElementsByTagName('div')[0].id;

switch (page) {
    case 'home':
        var Home = require('./pages/Home.jsx');
        ReactDOM.render(<Home/>, document.getElementById('home'));
        break;
    case 'index':
        var Index = require('./pages/Index.jsx');
        ReactDOM.render(<Index/>, document.getElementById('index'));
        break;
    case 'news':
        var News = require('./pages/News.jsx');
        ReactDOM.render(<News/>, document.getElementById('news'));
        break;
    case 'about':
        var About = require('./pages/About.jsx');
        ReactDOM.render(<About/>, document.getElementById('about'));
        break;
    case 'server':
        var Server = require('./pages/Server.jsx');
        ReactDOM.render(<Server/>, document.getElementById('server'));
        break;
}