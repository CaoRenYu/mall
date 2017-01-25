var React = require('react');

var HomeLeft = React.createClass({
    render: function () {
        return (
            <div className="leftNav">
                <ul>
                    <li><a href="./about.html#/address">当代商城（本店）</a></li>
                    <li><a href="./about.html#/address">当代商城鼎城店</a></li>
                    <li><a href="./about.html#/address">当代网上商城</a></li>
                    <li><a href="./about.html#/blog">当代微博</a></li>
                </ul>
                <div className="hot-line"></div>
            </div>
        )
    }
});

module.exports = HomeLeft;