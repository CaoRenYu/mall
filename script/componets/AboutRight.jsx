var React = require('react');

var AboutRight = React.createClass({
    render: function () {
        return (
            <div className="right-ad-side">
                <div className="ad-1 fc">
                    <div className="f1 img">
                        <a href="javascript:void (0)">
                            <img src="./img/paper.jpg" width="100%" alt=""/>
                        </a>
                    </div>
                    <div className="f1 text">
                        <div className="title">2016 第4期</div>
                        <div className="desc">当代人2016第四期</div>
                        <div className="btn">
                            <a href="javascript:void (0)">往期查看</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = AboutRight;