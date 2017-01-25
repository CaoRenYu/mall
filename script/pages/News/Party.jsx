var React = require('react');

var Party = React.createClass({
    render: function () {
        return (
            <div className="main-wrapper slide-wrapper m-auto">
                <div className="tab-title">党建工作</div>
                <div className="content-wrapper">
                    <dl className="list-img-txt fc">
                        <dt><img src="./img/@@.jpg" height="76" alt="@@"/></dt>
                        <dd>
                            <a href="javascript:void (0)">纪念建党九十四周年 践行"三严三实"专题</a>
                        </dd>
                        <dd>...</dd>
                    </dl>
                    <ul className="list-news"/>
                    <div className="page ptb"></div>
                </div>
            </div>
        )
    }
});

module.exports = Party;