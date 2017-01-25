var React = require('react');

var AboutLeft = React.createClass({
    render: function () {
        return (
            <div className="i-nav">
                <div className="title">
                    <div>新闻活动</div>
                    <div>News Events</div>
                </div>
                <ul>
                    <li><a href="./news.html#">当代要闻</a></li>
                    <li><a href="./news.html#/active">当代活动</a></li>
                    <li><a href="./news.html#/party">党建工作</a></li>
                    <li><a href="./news.html#/edm">EDM</a></li>
                </ul>
                <div className="hot-line"></div>
                <div className="blog"></div>
                <p>官方微博</p>
                <p>@北京当代商城</p>
                <div className="wx"></div>
                <p>官方微博</p>
                <p>北京当代商城</p>
            </div>
        )
    }
});

module.exports = AboutLeft;