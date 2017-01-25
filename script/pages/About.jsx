var React = require('react');
var ReactRouter = require('react-router');

var Header = require('../componets/Header.jsx');
var Footer = require('../componets/Footer.jsx');

var AboutLeft = require('../componets/AboutLeft.jsx');
var AboutRight = require('../componets/AboutRight.jsx');

var Idea = require('./About/Idea.jsx');
var Culture = require('./About/Culture.jsx');
var Response = require('./About/Respon.jsx');
var Periodical = require('./About/Periodical.jsx');
var Job = require('./About/Job.jsx');
var Address = require('./About/Address.jsx');
var Song = require('./About/Song.jsx');
var Blog = require('./About/Blog.jsx');
var Form = require('./About/Form.jsx');
var Writer = require('./About/Writer.jsx');
var Success = require('./About/Success.jsx');

var About = React.createClass({
    render: function () {
        return (
            <div>
                <Header/>
                <section className="i-content">
                    <AboutLeft/>
                        <ReactRouter.Router history={ReactRouter.hashHistory}>
                            <ReactRouter.Route path="/">
                                <ReactRouter.IndexRoute component={Idea}/>
                                <ReactRouter.Route path="culture" component={Culture}/>
                                <ReactRouter.Route path="responsibility" component={Response}/>
                                <ReactRouter.Route path="periodical" component={Periodical}/>
                                <ReactRouter.Route path="job" component={Job}/>
                                <ReactRouter.Route path="job/form" component={Form}/>
                                <ReactRouter.Route path="job/writer" component={Writer}/>
                                <ReactRouter.Route path="job/success" component={Success}/>
                                <ReactRouter.Route path="address" component={Address}/>
                                <ReactRouter.Route path="song" component={Song}/>
                                <ReactRouter.Route path="blog" component={Blog}/>
                            </ReactRouter.Route>
                        </ReactRouter.Router>
                    <AboutRight/>
                </section>
                <Footer/>
            </div>
        )
    }
});

module.exports = About;