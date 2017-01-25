var React = require('react');
var $ = require('jquery');

var shopNum = 3;

var Address = React.createClass({
    getInitialState: function () {
        return {
            db: []
        }
    },

    inItDB: function () {
        this.state.db = [];
        for (var i = 0; i < shopNum; i++) {
            this.state.db.push({cur: '', show: ''})
        }
    },

    componentWillMount: function () {
        this.inItDB();
        this.state.db[0] = {cur: 'cur', show: 'show'};
        this.setState(this.state);
    },

    onClick: function (id) {
        this.inItDB();
        this.state.db[id] = {cur: 'cur', show: 'show'};
        this.setState(this.state);
    },

    render: function () {
        return (
            <div className="main-wrapper m-auto">
                <div className="tab-wrapper">
                    <ul className="tab-top fc">
                        <li className={this.state.db[0].cur} onClick={this.onClick.bind(this, 0)}>当代商城（本店）</li>
                        <li className={this.state.db[1].cur} onClick={this.onClick.bind(this, 1)}>当代商城鼎城店</li>
                        <li className={this.state.db[2].cur} onClick={this.onClick.bind(this, 2)}>当代网上商城</li>
                    </ul>
                    <div className="tab-content">
                        <div className={'item hide' + this.state.db[0].show}>
                            <article>
                                <img src="./img/map1.jpg" alt="map1"/>
                                <br/>
                                <h3>当代商城简介</h3>
                                <p>这是一段描述</p>
                            </article>
                        </div>
                        <div className={'item hide' + this.state.db[1].show}>
                            <article>
                                <img src="./img/map2.jpg" alt="map2"/>
                                <br/>
                                <h3>填补京西消费市场空白-当代商城鼎城店构筑商业地标</h3>
                                <p>这是一段描述</p>
                            </article>
                        </div>
                        <div className={'item hide' + this.state.db[2].show}>
                            <article>
                                <h3>当代网上商城</h3>
                                <p>这是一段描述</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Address;