var React = require('react');
var ReactRouter = require('react-router');

var Header = require('../componets/Header.jsx');
var Footer = require('../componets/Footer.jsx');

var NewsLeft = require('../componets/NewsLeft.jsx');
var AboutRight = require('../componets/AboutRight.jsx');

var List = require('./News/List.jsx');
var Active = require('./News/Active.jsx');
var Party = require('./News/Party.jsx');
var EDM = require('./News/EDM.jsx');

var News = React.createClass({
    render: function () {
        return (
            <div>
                <Header/>
                <section className="i-content m-auto fc">
                    <NewsLeft/>
                    <ReactRouter.Router history={ReactRouter.hashHistory}>
                        <ReactRouter.Route path="/">
                            <ReactRouter.IndexRoute component={List}/>
                            <ReactRouter.Route path="active" component={Active}/>
                            <ReactRouter.Route path="party" component={Party}/>
                            <ReactRouter.Route path="edm" component={EDM}/>
                        </ReactRouter.Route>
                    </ReactRouter.Router>
                    <AboutRight/>
                </section>
                <Footer/>
            </div>
        )
    }
});

module.exports = News;