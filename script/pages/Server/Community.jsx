var React = require('react');
var Link = require('react-router').Link;

var Community = React.createClass({
    render: function () {
        var query = this.props.location.query.name ? this.props.location.query : {name: 'title', img: ''};
        return (
            <div className="main-wrapper">
                <div className="tab-title">{query.name}</div>
                <div className="btn-back">
                    <Link to="/">返回</Link>
                </div>
                <div className="content-wrapper">
                    <div className="pis">
                        <img src={query.img} width="100%" alt={query.name}/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Community;