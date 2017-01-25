var React = require('react');

var Index = React.createClass({
    render: function () {
        return (
            <table>
                <tbody>
                    <tr>
                        <th colSpan="2">当代商城地址导航</th>
                    </tr>
                    <tr>
                        <th>页面名称</th>
                        <th>页面地址</th>
                    </tr>
                    <tr>
                        <td>首页</td>
                        <td><a href="./home.html">./home.html</a></td>
                    </tr>
                    <tr>
                        <td>关于当代</td>
                        <td><a href="./about.html">./about.html</a></td>
                    </tr>
                    <tr>
                        <td>新闻活动</td>
                        <td><a href="./news.html">./news.html</a></td>
                    </tr>
                    <tr>
                        <td>服务导航</td>
                        <td><a href="./server.html">./server.html</a></td>
                    </tr>
                </tbody>
            </table>
        )
    }
});

module.exports = Index;