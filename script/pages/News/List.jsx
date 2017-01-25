var React = require('react');
var $ = require('jquery');

var pagination = require('../../jquery/common.js');

var List = React.createClass({
    getInitialState: function () {
        return {
            htmls: []
        }
    },

    componentDidMount: function () {
        var This = this;
        new pagination({
            selector: ".page",
            dataUrl: "./data/list.json",
            data: {},
            callbackfn: function (data) {
                $.each(data.obj, function (i, item) {
                    This.state.htmls.push(
                        <li key={i}><a href={'detail.html?id=' + item.id} target="_blank">{item.title}</a><span>{item.date}</span></li>
                    );
                });
                This.setState(This.state);
            },
            countKey: "data_count",
            pageNum: 10,
            preTxt: "<<",
            nextTxt: ">>"
        });
    },

    render: function () {
        return (
            <div className="main-wrapper slide-wrapper m-auto">
                <div className="tab-title">当代要闻</div>
                <div className="content-wrapper">
                    <dl className="list-img-txt fc">
                        <dt><img src="./img/@@.jpg" height="76" alt="@@"/></dt>
                        <dd>
                            <a href="javascript:void (0)">纪念建党九十四周年 践行"三严三实"专题</a>
                        </dd>
                        <dd>...</dd>
                    </dl>
                    <ul className="list-news">{this.state.htmls}</ul>
                    <div className="page ptb"/>
                </div>
            </div>
        )
    }
});

module.exports = List;