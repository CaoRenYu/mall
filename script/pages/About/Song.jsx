var React = require('react');

var Song = React.createClass({
    render: function () {
        return (
            <div className="main-wrapper m-auto">
                <div className="tab-wrapper">
                    <ul className="tab-top fc">
                        <li className="cur">当代城歌</li>
                    </ul>
                    <div className="tab-content">
                        <div className="item">
                            <article>
                                <h3>城歌</h3>
                                <p>这是一段歌词</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Song;