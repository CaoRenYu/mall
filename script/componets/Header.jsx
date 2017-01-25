var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
            <header
                className="i-header m-auto"
                //data-ajax-html="./header.html"
            >
                <ul>
                    <li><a href="./home.html">首页</a></li>
                    <li><a href="./about.html#">关于当代</a></li>
                    <li><a href="./news.html">新闻活动</a></li>
                    <li><span/></li>
                    <li><a href="javascript:void (0)">商城导航</a></li>
                    <li><a href="javascript:void (0)">尊贵会员</a></li>
                    <li><a href="./server.html">服务导航</a></li>
                </ul>
                <p>
                    <span><a href="javascript:void (0)">中文</a></span>
                    <span><a href="javascript:void (0)">英文</a></span>
                </p>
            </header>
        )
    }
});

module.exports = Header;