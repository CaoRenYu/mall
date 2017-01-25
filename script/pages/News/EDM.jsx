var React = require('react');

var EDM = React.createClass({
    render: function () {
        return (
            <div className="main-wrapper slide-wrapper m-auto">
                <div className="tab-title">EDM</div>
                <div className="content-wrapper">
                    <h3 className="text-fc">EMD</h3>
                    <p>这是一段描述</p>
                    <ul className="list-news"/>
                    <div className="page ptb"></div>
                </div>
            </div>
        )
    }
});

module.exports = EDM;