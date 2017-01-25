var React = require('react');

var Respon = React.createClass({
    render: function () {
        return (
            <div className="main-wrapper m-auto">
                <div className="tab-wrapper">
                    <ul className="tab-top fc">
                        <li className="cur">当代期刊</li>
                    </ul>
                    <div className="tab-content">
                        <div className="item">
                            <article>
                                <h3>期刊</h3>
                                <p>这是一段文字</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Respon;