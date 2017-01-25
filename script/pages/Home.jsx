var React = require('react');
var $ = require('jquery');

require('../jquery/common.js');

var Header = require('../componets/Header.jsx');
var Footer = require('../componets/Footer.jsx');
var HomeLeft = require('./Home/HomeLeft.jsx');
var HomeWrap = require('./Home/HomeWrap.jsx');

var Home = React.createClass({
    loadedTodo: function (imgs, fn, callback) {
    var i = 0;
    $.each(imgs, function (k, item) {
        var img = new Image();
        img.onload = function () {
            i++;
            $.isFunction(fn) && fn(Math.round(i / imgs.length * 100) + "%");
            if (i == imgs.length) {
                $.isFunction(callback) && callback();
            }
        };
        img.src = item;
    })
    },

    componentDidMount: function () {
        //底部动画
        $(".i-footer").activeAnimate();
        //中间动画
        $(".loading").activeAnimate();
        var basePath = "./";
        var imgs = [
            basePath + "/img/loadding.png",
            basePath + "/img/text-cn.png",
            basePath + "/img/text-en.png",
            basePath + "/img/flag-bg.jpg",
            basePath + "/img/step2-bg.jpg",
            basePath + "/img/text-our.png",
            basePath + "/img/box.png",
            basePath + "/img/box-hover.png"
        ];
        var $aw = $(".animate-wrapper");

        this.loadedTodo(imgs, function (percent) {//图片加载时
            console.log(percent);
            $(".loading").addClass("active").find("span").text(percent);
        }, function () {//加载后
            console.log('加载完成');
            $(".loading").fadeOut(500);
            //显示旗帜
            $aw.find(".step1").animate({
                opacity: 1
            }, 1000, function () { //通过回调执行
                $aw.find(".step1").fadeOut();//旗帜消失
                $aw.find(".step2").animate({
                    opacity: 1
                }, 1000, function () { //通过回调执行立方体动画
                    $aw.find(".cube-box").animate({
                        opacity: 1
                    }, 1000, function () {
                        $aw.find(".cube-box").addClass("active");
                        $aw.find(".text").addClass("active");
                        setTimeout(function () {
                            $aw.find(".step2").fadeOut(300);
                            $aw.find(".cute-box").addClass("active-end");
                            $(".leftNav").addClass("active");
                            $(".side-1").hover(function () { //鼠标移进
                                $(".text1").addClass("active");
                            }, function () { //鼠标移出
                                $(".text1").removeClass("active");
                            });
                            $(".side-6").hover(function () {
                                $(".text6").addClass("active");
                            }, function () {
                                $(".text6").removeClass("active");
                            });
                            $(".side-4").hover(function () {
                                $(".text4").addClass("active");
                            }, function () {
                                $(".text4").removeClass("active");
                            });
                        }, 3000)
                    })
                })
            })
        })
    },

    render: function () {
        return (
            <div>
                <Header/>
                <section className="i-content m-auto">
                    <HomeLeft/>
                    <HomeWrap/>
                </section>
                <Footer animate="true"/>
            </div>
        )
    }
});

module.exports = Home;