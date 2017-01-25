var React = require('react');

var Footer = React.createClass({
    render: function () {
        return (
            <footer
                className={this.props.animate ? "i-footer m-auto" : "i-footer m-auto active"}
            >
                <ul>
                    <li><a href="javascript:void (0)">联系我们</a></li>
                    <li><i>|</i></li>
                    <li><a href="./about.html#/address">商城位置</a></li>
                    <li><i>|</i></li>
                    <li><a href="./about.html#/job">人才招聘</a></li>
                    <li><i>|</i></li>
                    <li><a href="./about.html#/address">网站地图</a></li>
                    <li><i>|</i></li>
                    <li><a href="javascript:void (0)">友情链接</a></li>
                    <li><i>|</i></li>
                    <li><a href="javascript:void (0)">供应商服务</a></li>
                </ul>
                <p>@2009-2016 modern-plaza.com.cn All rights reserved 京ICP备：052311 京公网安备11010230150112号</p>
            </footer>
        )
    }
});

module.exports = Footer;