var React = require('react');
var ReactRouter = require('react-router');

var Header = require('../componets/Header.jsx');
var Footer = require('../componets/Footer.jsx');

var ServerLeft = require('./Server/ServerLeft.jsx');
var ServerNav = require('./Server/ServerNav.jsx');
var Community = require('./Server/Community.jsx');

var Server = React.createClass({
    render: function () {
        return (
            <div>
                <Header/>
                <section className="i-content m-auto fc">
                    <ServerLeft/>
                    <ReactRouter.Router history={ReactRouter.hashHistory}>
                        <ReactRouter.Route path="/">
                            <ReactRouter.IndexRoute component={ServerNav}/>
                            <ReactRouter.Route path="community" component={Community}/>
                        </ReactRouter.Route>
                    </ReactRouter.Router>
                </section>
                <Footer/>
            </div>
        )
    }
});

module.exports = Server;