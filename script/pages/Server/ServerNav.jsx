var React = require('react');
var $ = require('jquery');
var Link = require('react-router').Link;

var Timer = null;
var opaNum = 8;

var ServerNav = React.createClass({
    getInitialState: function () {
        return {
            db: []
        }
    },

    initDB: function () {
        this.state.db = [];
        for (var i = 0; i < opaNum; i++) {
            this.state.db.push('')
        }
    },

    componentDidMount: function () {
        var This = this;
        Timer = setInterval(function () {
            This.initDB();
            This.state.db[Math.floor(Math.random() * opaNum)] = 'active';
            This.setState(This.state);
            //console.log(This.state.db)
        }, 1500);
    },

    componentWillUnmount: function () {
        if (Timer) clearInterval(Timer);
        Timer = null;
    },

    render: function () {
        return (
            <div className="main-wrapper">
                <div className="server-nav-box">
                    <div className="fc pl4">
                        <a href="javascript:void (0)" className={'opa ' + this.state.db[0]}/>
                        <Link to={{pathname: "/community", query: {name: '停车服务', img: './img/phone1.jpg'}}}>车场礼宾<br/>停车服务</Link>
                    </div>
                    <div className="fc">
                        <a href="javascript:void (0)" className={'opa ' + this.state.db[1]}/>
                        <Link to={{pathname: "/community", query: {name: '社团服务', img: './img/phone1.jpg'}}}>社团服务</Link>
                        <Link to={{pathname: "/community", query: {name: '退货活动', img: './img/phone1.jpg'}}}>一站式<br/>退货活动</Link>
                        <a href="javascript:void (0)" className={'opa ' + this.state.db[2]}/>
                        <Link to={{pathname: "/community", query: {name: '客服热线', img: './img/phone1.jpg'}}}>24小时<br/>客服热线</Link>
                        <Link to={{pathname: "/community", query: {name: '俱乐部', img: './img/phone1.jpg'}}}>VIP会员<br/>俱乐部</Link>
                        <a href="javascript:void (0)" className={'opa ' + this.state.db[3]}/>
                        <Link to={{pathname: "/community", query: {name: '会员中心', img: './img/phone1.jpg'}}}>会员中心</Link>
                    </div>
                    <div className="fc pl2">
                        <a href="javascript:void (0)" className={'opa ' + this.state.db[4]}/>
                        <a href="javascript:void (0)" className={'opa ' + this.state.db[5]}/>
                        <Link to={{pathname: "/community", query: {name: '设施服务', img: './img/phone1.jpg'}}}>无障碍<br/>设施服务</Link>
                    </div>
                    <div className="fc pl1">
                        <Link to={{pathname: "/community", query: {name: '顾客休息区', img: './img/phone1.jpg'}}}>顾客休息区</Link>
                        <a href="javascript:void (0)" className={'opa ' + this.state.db[6]}/>
                        <Link to={{pathname: "/community", query: {name: '国际代购', img: './img/phone1.jpg'}}}>国际代购</Link>
                        <Link to={{pathname: "/community", query: {name: 'VIP服务', img: './img/phone1.jpg'}}}>VIP服务</Link>
                        <Link to={{pathname: "/community", query: {name: '双语接待', img: './img/phone1.jpg'}}}>双语接待</Link>
                    </div>
                    <div className="fc pl3">
                        <Link to={{pathname: "/community", query: {name: '在线购物', img: './img/phone1.jpg'}}}>在线购物</Link>
                        <Link to={{pathname: "/community", query: {name: '在线客服', img: './img/phone1.jpg'}}}>在线客服</Link>
                        <a href="javascript:void (0)" className={'opa ' + this.state.db[7]}/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = ServerNav;