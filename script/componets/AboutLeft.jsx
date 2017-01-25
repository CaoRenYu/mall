var React = require('react');

var AboutLeft = React.createClass({
    render: function () {
        return (
            <div className="i-nav">
                <div className="title">
                    <div>关于当代</div>
                    <div>About</div>
                </div>
                <ul>
                    <li><a href="./about.html#">当代理念</a></li>
                    <li><a href="./about.html#/culture">文化理念</a></li>
                    <li><a href="./about.html#/responsibility">社会责任</a></li>
                    <li><a href="./about.html#/periodical">当代期刊</a></li>
                    <li><a href="./about.html#/job">人才招聘</a></li>
                    <li><a href="./about.html#/address">联系我们</a></li>
                    <li><a href="./about.html#/song">当代城歌</a></li>
                    <li><a href="./about.html#/blog">当代博客</a></li>
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