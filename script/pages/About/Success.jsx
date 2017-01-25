var React = require('react');
var Link = require('react-router').Link;

var Success = React.createClass({
    render: function () {
        var query = this.props.location.query;
        return (
            <div className="main-wrapper m-auto">
                <div className="tab-wrapper">
                    <ul className="tab-top fc">
                        <li className="cur">人才招聘</li>
                    </ul>
                    <div className="tab-content">
                        <div className="item">
                            <article>
                                <div className="success-text">
                                    <p>提交成功！</p>
                                </div>
                                <Link to="/job">返回</Link>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Success;