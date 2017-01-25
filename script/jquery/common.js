/**
 * Created by cry on 2017/1/15.
 */
var $ = require('jquery');

//添加动画
$.fn.activeAnimate = function (opt) {
    var option = $.extend({
        dur: 500,
        className: "active"
    }, opt);
    return this.each(function () {
        var self = $(this);
        setTimeout(function () {
            self.addClass(option.className);
        }, option.dur);
    })
};


$(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' ? define(factory):
            (global.pagination = factory());
}(this, function (require, exports, module) {
        if (typeof $ == "undefined") {
            console.warn("jQuery is require～");
            return false;
        }
        var pagination = function (opt) {
            this.nowPage = 1;
            this.totalPage = 0;
            this.opt = {
                selector: ".g-pagination",
                dataUrl: "data.json",
                callbackfn: null,
                countKey: "data_count",
                pageNum: 5,
                preTxt: "上一页",
                nextTxt: "下一页"
            };
            $.extend(this.opt, opt);
            pagination.prototype.getData.call(this);
        };
        pagination.prototype.getData = function () {
            var opt = this.opt;
            var This = this;
            var param = $.extend(opt.data, {
                page: This.nowPage,
                pageSize: This.opt.pageNum
            });
            if (this.opt.dataUrl) {
                $.ajax({
                    url: this.opt.dataUrl,
                    data: param,
                    dataType: "JSON",
                    type: "GET"
                }).done(function (data) {
                    $.isFunction(opt.callbackfn) && opt.callbackfn(data);
                    This.totalPage = Math.ceil(data[opt.countKey] / This.opt.pageNum);
                    pagination.prototype.setHTML.call(This);
                    $(This.opt.selector).find("a").on("click", function () {
                        if ($(this).attr("class") == "cur") return false;
                        if ($(this).attr("class") == "p-pre") {
                            This.nowPage--;
                            //console.log(This.nowPage)
                            if (This.nowPage < 1) {
                                This.nowPage = 1;
                                return false;
                            }
                        } else if ($(this).attr("class") == "p-next") {
                            This.nowPage++;
                            //console.log(This.nowPage)
                            if (This.nowPage > This.totalPage) {
                                This.nowPage = This.totalPage;
                                return false;
                            }
                        } else {
                            This.nowPage = parseInt($(this).attr("data-page"));
                        }
                    })
                })
            }
        };
        pagination.prototype.setHTML = function () {
            var This = this;
            var page = [];
            for (var i = 0; i < This.totalPage; i++) {
                page.push('<span><a>' + (i + 1) + '</a></span>');
            }
            $(This.opt.selector).html('<a class="p-pre">' + This.opt.preTxt + '</a>' + page.join("") + '<a class="p-next">' + This.opt.nextTxt + '</a>' + '<span>每页显示10条记录(共计' + This.totalPage + '页)</span>')
        };
        return pagination;
    }
));