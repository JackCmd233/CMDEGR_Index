function retote(a) {
    if ($(a).hasClass("btn-rotate1")) {
        $(a).removeClass("btn-rotate1");
        $(a).addClass("btn-rotate2")
    } else {
        $(a).addClass("btn-rotate1");
        $(a).removeClass("btn-rotate2")
    }
}

function tab() {
    var a = document.querySelector(".main-tit");
    var d = a.getElementsByTagName("li");
    var c = document.querySelectorAll(".page");
    for (var b = 0; b < d.length; b++) {
        d[b].index = b;
        d[b].onclick = function () {
            for (var e = 0; e < d.length; e++) {
                d[e].className = " "
            }
            this.className = "cur";
            for (var e = 0; e < c.length; e++) {
                c[e].className = "page"
            }
            c[this.index].className = "page now"
        }
    }
}

$(function () {
    var bodyHeight = $("body").height();
    $("#modal-3").css("height", bodyHeight);
    $("#modal-3").css("min-height", "100%");
    $(".baidu_lan").searchSuggest({
        url: "http://unionsug.baidu.com/su?p=3&t=" + (new Date()).getTime() + "&wd=",
        jsonp: "cb",
        json: {data: [{id: "0", word: "baidu", description: ""}], defaults: "http://gitnavi.com"},
        width: 242,
        topoffset: 12,
        style: "line",
        cssFile: "search-suggest.css",
        processData: function (json) {
            if (!json || json.s.length == 0) {
                return false
            }
            var jsonStr = "{'data':[";
            for (var i = json.s.length - 1; i >= 0; i--) {
                jsonStr += "{'id':'" + i + "','word':'" + json.s[i] + "', 'description': ''},"
            }
            jsonStr += "],'defaults':'baidu'}";
            return json = (new Function("return " + jsonStr))()
        },
        getData: function (word, parent, callback) {
            if (!word) {
                return
            }
            $.ajax({
                type: "GET",
                url: "http://unionsug.baidu.com/su?p=3&t=" + (new Date()).getTime() + "&wd=" + encodeURIComponent(word) + "&cb=?",
                dataType: "json",
                timeout: 3000,
                success: function (data) {
                    callback(parent, data)
                },
                error: function (data) {
                    callback(parent, data)
                }
            })
        }
    });
    $(".baidu_lanbig").searchSuggest({
        url: "http://unionsug.baidu.com/su?p=3&t=" + (new Date()).getTime() + "&wd=",
        jsonp: "cb",
        json: {data: [{id: "0", word: "baidu", description: ""}], defaults: "http://gitnavi.com"},
        width: 1028,
        topoffset: 13,
        style: "line",
        cssFile: "search-suggest.css",
        processData: function (json) {
            if (!json || json.s.length == 0) {
                return false
            }
            var jsonStr = "{'data':[";
            for (var i = json.s.length - 1; i >= 0; i--) {
                jsonStr += "{'id':'" + i + "','word':'" + json.s[i] + "', 'description': ''},"
            }
            jsonStr += "],'defaults':'baidu'}";
            return json = (new Function("return " + jsonStr))()
        },
        getData: function (word, parent, callback) {
            if (!word) {
                return
            }
            $.ajax({
                type: "GET",
                url: "http://unionsug.baidu.com/su?p=3&t=" + (new Date()).getTime() + "&wd=" + encodeURIComponent(word) + "&cb=?",
                dataType: "json",
                timeout: 3000,
                success: function (data) {
                    callback(parent, data)
                },
                error: function (data) {
                    callback(parent, data)
                }
            })
        }
    });
    tab();
    $(".down-btn").click(function () {
        $(this).next().toggleClass("btn-toggle-on");
        retote(this)
    });
    $(".page-row").dblclick(function () {
        $(this).toggleClass("btn-toggle-on");
        var thisBtn = $(this).siblings(".down-btn");
        retote(thisBtn)
    });
    $(".hamburger").click(function () {
        if ($(this).hasClass("is-active")) {
            $(this).removeClass("is-active");
            $(".user").removeClass("hamburger-bgimage");
            $(".down").hide()
        } else {
            $(this).addClass("is-active");
            $(".user").addClass("hamburger-bgimage");
            $(".down").show()
        }
    });
    $(".hoverTooltip").each(function () {
        $(this).qtip({
            position: {
                my: "center center",
                at: "top center",
                target: true,
                container: true,
                viewport: true,
                adjust: {x: 0, y: -25, mouse: true, resize: true, method: "flip flip"}
            },
            show: {
                target: false,
                event: "mouseenter",
                effect: true,
                delay: 2000,
                solo: false,
                ready: false,
                modal: {on: false, effect: true, blur: true, escape: true}
            },
            hide: {
                target: false,
                event: "mouseleave",
                effect: false,
                delay: 300,
                fixed: true,
                inactive: false,
                leave: false,
                distance: false
            },
            style: {
                classes: "qtip-youtube",
                widget: false,
                width: false,
                height: false,
                tip: {corner: true, mimic: true, width: 2000, height: 20, border: true, offset: 5}
            }
        })
    });
    $(".headerHoverTooltip").each(function () {
        $(this).qtip({
            position: {
                my: "center center",
                at: "top center",
                target: true,
                container: true,
                viewport: true,
                adjust: {x: 0, y: -25, mouse: true, resize: true, method: "flip flip"}
            },
            show: {
                target: false,
                event: "mouseenter",
                effect: true,
                delay: 50,
                solo: false,
                ready: false,
                modal: {on: false, effect: true, blur: true, escape: true}
            },
            hide: {
                target: false,
                event: "mouseleave",
                effect: false,
                delay: 50,
                fixed: true,
                inactive: false,
                leave: false,
                distance: false
            },
            style: {
                classes: "qtip-youtube",
                widget: false,
                width: false,
                height: false,
                tip: {corner: true, mimic: true, width: 2000, height: 20, border: true, offset: 5}
            }
        })
    });
    $(".footerHoverTooltip").each(function () {
        $(this).qtip({
            position: {
                my: "center center",
                at: "top left",
                target: true,
                container: true,
                viewport: true,
                adjust: {x: 0, y: -25, mouse: true, resize: true, method: "flip flip"}
            },
            show: {
                target: false,
                event: "mouseenter",
                effect: true,
                delay: 50,
                solo: false,
                ready: false,
                modal: {on: false, effect: true, blur: true, escape: true}
            },
            hide: {
                target: false,
                event: "mouseleave",
                effect: false,
                delay: 50,
                fixed: true,
                inactive: false,
                leave: false,
                distance: false
            },
            style: {
                classes: "qtip-youtube",
                widget: false,
                width: false,
                height: false,
                tip: {corner: true, mimic: true, width: 2000, height: 20, border: true, offset: 5}
            }
        })
    });
    $(document).on("click", ".starBtn", function () {
        var thisObject = $(this);
        var dataTypeValue = thisObject.attr("data-type");
        var dataIdValue = thisObject.attr("data-id");
        if (null == dataTypeValue || dataTypeValue == "" || null == dataIdValue || dataIdValue == "") {
            return false
        }
        var requestUrl = webParam.webRoot + "/admin/navCollectUrlController/frontCollect";
        if (dataTypeValue == "0") {
            requestUrl = webParam.webRoot + "/admin/navCollectModuleController/frontCollect"
        } else {
            if (dataTypeValue == "1") {
                requestUrl = webParam.webRoot + "/admin/navCollectColumnController/frontCollect"
            }
        }
        $.ajax({
            type: "GET",
            url: requestUrl,
            data: {objectId: dataIdValue},
            dataType: "json",
            success: function (data) {
                if (data.flag) {
                    thisObject.addClass("tooltips-icon-hover")
                }
            },
            error: function (XMLHttpRequest, textStatus) {
                if (textStatus == "parsererror") {
                    alert("登陆超时，请重新登陆！");
                    return false
                }
                var resultObject;
                try {
                    resultObject = eval("(" + XMLHttpRequest.responseText + ")")
                } catch (err) {
                    alert("发生系统异常，请稍后重试");
                    return false
                }
                alert(resultObject.message)
            }
        })
    });
    $("#forkBtn").click(function () {
        if (confirm("您确定要 Fork 该导航的所有数据吗？fork 后你现有的导航数据将全部删除")) {
            var thisObject = $(this);
            var dataNavIdValue = thisObject.attr("data-nav-id");
            if (null == dataNavIdValue || dataNavIdValue == "") {
                return false
            }
            $.ajax({
                type: "POST",
                url: webParam.webRoot + "/admin/navBaseInfoController/frontFork",
                data: {forkNavBaseInfoId: dataNavIdValue},
                dataType: "json",
                success: function (data) {
                    alert(data.message);
                    if (data.flag) {
                        window.location.reload()
                    }
                },
                error: function (XMLHttpRequest, textStatus) {
                    if (textStatus == "parsererror") {
                        alert("登陆超时，请重新登陆！");
                        return false
                    }
                    var resultObject;
                    try {
                        resultObject = eval("(" + XMLHttpRequest.responseText + ")")
                    } catch (err) {
                        alert("发生系统异常，请稍后重试");
                        return false
                    }
                    alert(resultObject.message)
                }
            })
        }
    });
    $(".card-line-title:odd").click(function () {
        $(this).toggleClass("card-animation")
    });
    $(".card-line-title:even").click(function () {
        $(this).toggleClass("card-animation1")
    });
    var page2 = $(".cardbox-page2");
    var page1 = $(".cardbox-page1");
    $(".card-btn2").click(function () {
        if (page2.hasClass("top101")) {
            page2.css("top", "101%").animate({top: "0%"}, 500);
            page1.css("top", "0%").animate({top: "101%"}, 500);
            page1.addClass("top0");
            page2.removeClass("top101")
        } else {
            page2.css("top", "0%").animate({top: "101%"}, 500);
            page1.css("top", "101%").animate({top: "0%"}, 500);
            page1.removeClass("top0");
            page2.addClass("top101")
        }
    });
    $(".md-trigger").focus(function () {
        $(".md-content").addClass("oon");
        $(".md-close").click(function () {
            $(".md-content").removeClass("oon")
        })
    });
    $(".full-search").click(function () {
        advancedSearchDoubleSearch()
    });
    $(".full-input").bind("keypress", function (event) {
        if (event.keyCode == "13") {
            advancedSearchDoubleSearch()
        }
    });
    $(".md-close").click(function () {
        $(".full-input").val("");
        var card_line = $(".card-line-title");
        card_line.each(function () {
            if (card_line.hasClass("card-animation1")) {
                card_line.removeClass("card-animation1")
            } else {
                if (card_line.hasClass("card-animation")) {
                    card_line.removeClass("card-animation")
                }
            }
        })
    });
    $("#advancedSearchBtn").click(function () {
        $(".main").css("display", "none");
        if (screen.height <= 768) {
            $("#modal-3").css("height", "150%")
        }
    });
    $(".md-close").click(function () {
        $(".main").css("display", "block")
    });
    $(".card").mouseenter(function () {
        if ($(this).has(".hidden-Card").length == 1) {
            $(this).addClass("extraSelectDiv");
            $(this).find(".hidden-Card").slideDown(90).addClass("extraSelectDiv")
        } else {
            return false
        }
    });
    $(".card").mouseleave(function () {
        $(this).removeClass("extraSelectDiv");
        $(this).find(".hidden-Card").css({display: "none"}).removeClass("extraSelectDiv")
    });
    var flag = true;
    $(".card-btn2").on("click", function () {
        if (flag == true) {
            $(".fa-position").css("top", "50%").animate({top: "130%"}, 500);
            $(".fa-position-hidden").css("top", "-50%").animate({top: "50%"}, 500);
            flag = false
        } else {
            $(".fa-position").css("top", "130%").animate({top: "50%"}, 500);
            $(".fa-position-hidden").css("top", "50%").animate({top: "-50%"}, 500);
            flag = true
        }
    });
    $(".card-line-title").on("dblclick", function () {
        var requestUrl = $(this).attr("dblClick-url");
        setTimeout(function () {
            window.open(requestUrl, "_blank")
        }, 50)
    })
});

function advancedSearchDoubleSearch() {
    var a = $(".full-input").val();
    if (null == a || "" == $.trim(a)) {
        return false
    }
    if ($(".card-animation,.card-animation1").length == 0) {
        var b = "https://www.baidu.com/baidu?wd=" + a;
        window.open(b, "_blank");
        return false
    }
    $(".card-animation,.card-animation1").each(function () {
        var c = $(this).attr("data-url");
        c = c.replace("GitNavi", a);
        setTimeout(function () {
            window.open(c, "_blank")
        }, 50)
    })
};