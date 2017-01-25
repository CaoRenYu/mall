var React = require('react');

var HomeWrap = React.createClass({
    render: function () {
        return (
            <div className="animate-wrapper">
                <div className="step1 op0"></div>
                <div className="step2 op0"></div>
                <div className="loading">
                    <em/><em/><span>0%</span>
                </div>
                <div className="text">
                    <em className="cn"/>
                    <em className="en"/>
                </div>
                <div className="cube-box">
                    <div className="side side-1"></div>
                    <div className="side side-2"></div>
                    <div className="side side-3"></div>
                    <div className="side side-4"></div>
                    <div className="side side-5"></div>
                    <div className="side side-6"></div>
                </div>
                <em className="text1"/>
                <em className="text4"/>
                <em className="text6"/>
            </div>
        )
    }
});

module.exports = HomeWrap;