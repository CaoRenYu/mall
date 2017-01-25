var React = require('react');
var $ = require('jquery');

var fImgs = [
    {title: "优享家居 乐享端午", img: "./img/focus1.jpg", href: "javascript:void (0)"},
    {title: "伊丽莎白雅顿", img: "./img/focus2.jpg", href: "javascript:void (0)"},
    {title: "双立人", img: "./img/focus3.jpg", href: "javascript:void (0)"},
    {title: "FANCL", img: "./img/focus4.jpg", href: "javascript:void (0)"}
];
var iNow = 0;
var timer = null;

var Active = React.createClass({
    getInitialState: function () {
        return {
            title: '',
            img: '',
            href: ''
        }
    },

    onChange: function (iNow) {
        this.state.title = fImgs[iNow].title;
        this.state.img = fImgs[iNow].img;
        this.state.href = fImgs[iNow].href;
        timer = setInterval(function () {
            this.onNext();
        }.bind(this), 3000);
        this.setState(this.state);
    },

    onNext: function () {
        if (timer) clearInterval(timer);
        iNow++;
        iNow = iNow > fImgs.length - 1 ? 0 : iNow;
        this.onChange(iNow);
    },

    onPre: function () {
        if (timer) clearInterval(timer);
        iNow--;
        iNow = iNow < 0 ? fImgs.length - 1 : iNow;
        this.onChange(iNow);
    },

    componentDidMount: function () {
        this.onChange(iNow);
    },

    componentWillUnmount: function () {
        if (timer) clearInterval(timer);
        timer = null;
    },

    render: function () {
        return (
            <div className="main-wrapper slide-wrapper m-auto">
                <div className="tab-title">当代活动</div>
                <div className="content-wrapper content-slide">
                    <div className="pis">
                        <a href={this.state.href}>
                            <img src={this.state.img} width="100%" alt={this.state.title}/>
                        </a>
                    </div>
                    <div className="text-fc">
                        <em className="pre" onClick={this.onPre}/>
                        <span className="text">{this.state.title}</span>
                        <em className="next" onClick={this.onNext}/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Active;