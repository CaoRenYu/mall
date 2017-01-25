var React = require('react');

var Respon = React.createClass({
    render: function () {
        return (
            <div className="main-wrapper m-auto">
                <div className="tab-wrapper">
                    <ul className="tab-top fc">
                        <li className="cur">社会责任</li>
                    </ul>
                    <div className="tab-content">
                        <div className="item">
                            <article>
                                <h3>责任</h3>
                                <p>这是一段描述</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Respon;