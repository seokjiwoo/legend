(function ($) {

    "use strict";

    $.fn.gnb = function (option) {
        var gnbDefault = {
            menu: ".gnb > li"
        },
		o = $.extend({}, gnbDefault, option),
		Action = {
		    bindEvent: function () {
		        $("body").on("mouseenter", o.menu, this.bindEnter);
		        $("body").on("mouseleave", o.menu, this.bindLeave);
		    },
		    bindEnter: function () {
		        var tg = $(this);
		        var i = tg.index();
		        $(o.menu).eq(i).addClass("on");
		    },
		    bindLeave: function () {
		        var tg = $(this);
		        var i = tg.index();
		        $(o.menu).eq(i).removeClass("on");
		    }
		}
        Action.bindEvent();
    };

    $.fn.quickMenu = function (option) {
        var quickDefault = {
            menu: ".quickMenu"
        },
		o = $.extend({}, quickDefault, option),
		Action = {
		    bindEvent: function () {
		        $(window).on("scroll", function () {
		            Action.bindScroll();
		        });
		    },
		    bindScroll: function () {
		        var sct = $(window).scrollTop() + 138;
		        $(o.menu).stop().animate({ top: sct });
		    }
		}
        Action.bindEvent();
    };

    $.fn.twoBnr = function (option) {
        var twobnrDefault = {
            bnr: ".twoBnr",
            prevBtn: ".leftCon .bx-prev",
            nextBtn: ".leftCon .bx-next",
            count: 0
        },
		o = $.extend({}, twobnrDefault, option),
		len = $(o.bnr).find("> li").length - 1,
		Action = {
		    bindEvent: function () {
		        $("body").on("click", o.nextBtn, this.nextClick);
		        $("body").on("click", o.prevBtn, this.prevClick);
		    },
		    nextClick: function (e) {
		        e.preventDefault();
		        o.count++;
		        if (o.count > len) {
		            o.count = 0;
		        }
		        Action.bnrShow();
		    },
		    prevClick: function (e) {
		        e.preventDefault();
		        o.count--;
		        if (o.count < 0) {
		            o.count = len;
		        }
		        Action.bnrShow();
		    },
		    bnrShow: function () {
		        $(o.bnr).find("> li").removeClass("on");
		        $(o.bnr).find("> li").eq(o.count).addClass("on");
		    }
		}
        Action.bindEvent();
    };

    $.fn.graphShow = function (option) {
        var graphDefault = {
            list: ".scoreList ul li",
            graphDiv: ".graph",
            kboLink: ".kboLink"
            , onClick: null
        },
		o = $.extend({}, graphDefault, option),
		Action = {
		    bindEvent: function () {
		        $("body").on("click", o.list, this.bindClick);
		    },
		    bindClick: function () {
		        var tg = $(this);

		        if (tg.find("span.game").text() == '경기전' || tg.find("span.game").text().search('취소') > -1) {
		            return;
		        }

		        if (!tg.hasClass("on")) {
		            $(o.list).removeClass("on");
		            tg.addClass("on");
		            $(o.graphDiv).addClass("on")
		            $(o.kboLink).addClass("on");
		        } else {
		            tg.removeClass("on");
		            $(o.graphDiv).removeClass("on")
		            $(o.kboLink).removeClass("on");
		        }

		        if (o.onClick != null) {
		            o.onClick(tg);
		        }
		    }
		}
        Action.bindEvent();
    };

    $.fn.flowText = function (option) {
        var textDefault = {
            textList: ".myComment > ul > li",
            textwrap: ".myComment > ul"
        },
		o = $.extend({}, textDefault, option),
		Action = {
		    flowAnimate: function () {
		        //var nCount = 0;
		        var nCount = $(o.textwrap).width();
		        //var listWidth = $(o.textList).width() + 5
		        var listWidth = 5;

		        $(o.textwrap).children('li').each(function () {
		            listWidth += $(this).width();
		        });

		        setInterval(function () {
		            nCount--;
		            if (nCount <= -listWidth) {
		                //nCount = 0;
		                nCount = $(o.textwrap).width();
		                var copy = $(o.textwrap).find("> li").first().clone()
		                $(o.textwrap).find("> li").first().remove();
		                $(o.textwrap).append(copy);
		            }
		            $(o.textList).css({ left: nCount + "px" });
		        }, 50);
		    }
		}
        Action.flowAnimate();
    };

    $.fn.subTab = function (option) {
        var tabDefault = {
            tabMenu: ".subTab > li",
            tabCon: ".tabCon > div"
            , onClick: null
            //characterName : ".characterName"
        },
		o = $.extend({}, tabDefault, option),
		Action = {
		    bindEvent: function () {
		        $("body").on("click", o.tabMenu, this.bindClick);
		    },
		    bindClick: function (e) {
		        e.preventDefault();
		        var tg = $(this);
		        var i = tg.index();
		        $(o.tabMenu).removeClass("on");
		        $(o.tabMenu).eq(i).addClass("on");
		        $(o.tabCon).removeClass("on");
		        $(o.tabCon).eq(i).addClass("on");
		        $(o.tabMenu).parent().next().find("> li").removeClass("on");
		        $(o.tabMenu).parent().next().find("> li").eq(i).addClass("on");

		        if (o.onClick != null) {
		            o.onClick();
		        }

		        /*if(!$(".legendSection").is(o.characterName)){
		        $(o.characterName).find("> li").removeClass("on");
		        $(o.characterName).find("> li").eq(i).addClass("on");
		        }*/
		    }
		}
        Action.bindEvent();
    };

    $.fn.classOn = function (option) {
        var listDefault = {
            listMenu: ".subminTab > ul > li"
			, onClick: null
        },
		o = $.extend({}, listDefault, option),
		Action = {
		    bindEvent: function () {
		        $("body").on("click", o.listMenu, this.bindClick);
		    },
		    bindClick: function (e) {
		        e.preventDefault();
		        var tg = $(this);
		        var i = tg.index();
		        if (i > -1) {
		            $(o.listMenu).removeClass("on");
		            $(o.listMenu).eq(i).addClass("on");
		            if (o.onClick != null) {
		                o.onClick();
		            }
		        }

		    }
		}
        Action.bindEvent();
    };

    $.fn.classOnCk = function (option) {
        var listDefault = {
            listMenu: ".subminTab > ul > li"
			, onClick: null
        },
		o = $.extend({}, listDefault, option),
		Action = {
		    bindEvent: function () {
		        $("body").on("click", o.listMenu, this.bindClick);
		    },
		    bindClick: function (e) {
		        e.preventDefault();
		        var tg = $(this);
		        if (tg.find("input").attr("data-ck") == 1) {
		            return;
		        }
		        var i = tg.index();
		        if (i > -1) {
		            $(o.listMenu).removeClass("on");
		            $(o.listMenu).eq(i).addClass("on");
		            if (o.onClick != null) {
		                o.onClick();
		            }
		        }

		    }
		}
        Action.bindEvent();
    };

    $.fn.classOn2 = function (option) {
        var listDefault = {
            listMenu: ".team_radio > .trdo"
            , parents: ".liveGraph"
            , onClick: null
        },
          o = $.extend({}, listDefault, option),
          Action = {
              bindEvent: function () {
                  $("body").on("click", o.listMenu, this.bindClick);
              },
              bindClick: function () {
                  var tg = $(this);
                  var parentsTg = tg.parents(o.parents);
                  var i = tg.index();
                  var parentsi = parentsTg.index();
                  parentsTg.find(o.listMenu).removeClass("on");
                  parentsTg.find(o.listMenu).eq(i).addClass("on");
                  if (o.onClick != null) {
                      o.onClick(parentsTg.find(o.listMenu).eq(i));
                  }
              }
          }
        Action.bindEvent();
    };

    $.fn.classOn3 = function (option) {
        var listDefault = {
            listMenu: ".subminTab > ul > li"
			, onClick: null
        },
		o = $.extend({}, listDefault, option),
		Action = {
		    bindEvent: function () {
		        $("body").on("click", o.listMenu, this.bindClick);
		    },
		    bindClick: function (e) {
		        e.preventDefault();
		        var tg = $(this);
		        var i = tg.index();
		        if (i > -1) {
		            $(o.listMenu).removeClass("on");
		            $(o.listMenu).eq(i).addClass("on");
		            if (o.onClick != null) {
		                o.onClick(tg);
		            }
		        }

		    }
		}
        Action.bindEvent();
    };

    $.fn.toggleList = function (option) {
        var btnDefault = {
            btn: ".toggleBtn",
            listCon: ".recordList .add"
        },
		o = $.extend({}, btnDefault, option),
		Action = {
		    bindEvent: function () {
		        $("body").on("click", o.btn, this.bindClick);
		    },
		    bindClick: function (e) {
		        e.preventDefault();
		        if (!$(o.listCon).hasClass("on")) {
		            $(o.btn).addClass("on");
		            $(o.listCon).addClass("on");
		        } else {
		            $(o.btn).removeClass("on");
		            $(o.listCon).removeClass("on");
		        }
		    }
		}
        Action.bindEvent();
    };

    $.fn.wordsShow = function (option) {
        var wordsDefault = {
            wordsBtn: ".words",
            close: ".btnType22",
            scrollbox: ".wordsScroll",
            wlist: ".wordsList > ul > li",
            wlistChild: ".wordsList > ul > li > ul > li"
        },
		o = $.extend({}, wordsDefault, option),
		Action = {
		    blindEvent: function () {
		        $("body").on("click", o.wordsBtn, this.bindClick);
		        $("body").on("click", o.close, this.closeClick);
		        $("body").on("click", o.wlist, this.wlistClick);
		        $("body").on("click", o.wlistChild, this.notBubbling);
		    },
		    bindClick: function (e) {
		        e.preventDefault();
		        if (!$(o.scrollbox).hasClass("on")) {
		            $(o.scrollbox).addClass("on");
		        }
		    },
		    closeClick: function (e) {
		        e.preventDefault();
		        if ($(o.scrollbox).hasClass("on")) {
		            $(o.scrollbox).removeClass("on");
		        }
		    },
		    wlistClick: function (e) {
		        e.preventDefault();
		        var tg = $(this);
		        if (!tg.hasClass("on")) {
		            tg.addClass("on");
		        } else {
		            tg.removeClass("on");
		        };
		    },
		    notBubbling: function (e) {
		        e.stopPropagation(); // 클릭이벤트 전파방지
		    }
		}
        Action.blindEvent();
    };

    $.fn.imageAdd = function (option) {
        var imageDefault = {
            btn: ".btnType27",
            file: ".addimg",
            fileList: ".iamgefileList"
        },
		o = $.extend({}, imageDefault, option),
		Action = {
		    bindEvent: function () {
		        $("body").on("click", o.btn, this.bindClick);
		        $("body").on("change", o.file, this.fileChange);
		    },
		    bindClick: function (e) {
		        e.preventDefault();
		        var copy = "<li class='imageAdd'><input type='text' title='파일명' readonly='readonly' class='w204 imgName' /><input type='file' class='addimg' /><span class='btnType28'>찾아보기</span><a href='#'' class='btnType27 blind'>이미지추가</a></li>"
		        $(o.fileList).append(copy);
		    },
		    fileChange: function () {
		        var fileValue = $(this).val();
		        $(this).prev().val(fileValue);
		    }
		}
        Action.bindEvent();
    };

    $.fn.layerPop = function (option) {
        var popDefault = {
            layer: ".layer-popup",
            btn: ".layer-pop-btn",
            close: ".layer-close"
        },
		o = $.extend({}, popDefault, option),
		Action = {
		    bindEvent: function () {
		        $("body").on("click", o.btn, this.bindOpen);
		        $("body").on("click", o.close, this.bindClose);
		    },
		    bindOpen: function (e) {
		        e.preventDefault();
		        var self = Action;
		        var data = $(this).attr("data-name");
		        if ($(o.layer).length > 0) {
		            $(".wrapper").append($("<div class='dimmed'></div"));
		            $("#" + data).stop().fadeIn(200);
		        }
		        self.bindCheck();
		    },
		    bindClose: function (e) {
		        e.preventDefault();
		        if ($(o.layer).is(":visible")) {
		            $(".dimmed").remove();
		            $(o.layer).stop().fadeOut(200);
		        }
		    },
		    bindCheck: function () {
		        $(o.layer).each(function () {
		            var mleft = Math.round($(this).outerWidth() / 2),
					mtop = Math.round(($(window).height() / 2 - $(this).outerHeight() / 2) + $(window).scrollTop());
		            $(this).css({
		                "margin-left": -mleft,
		                "top": mtop
		            })
		        });
		    }
		}
        Action.bindEvent();
    };

    $.fn.characterPop = function (option) {
        var popDefault = {
            layer: ".character_layerpop",
            btn: ".btnType35",
            close: ".btnType33"
        },
        o = $.extend({}, popDefault, option),
        Action = {
            bindEvent: function () {
                $("body").on("click", o.btn, this.bindClick);
                $("body").on("click", o.close, this.closeClick);
            },
            bindClick: function () {
                if ($(".character_layerpop").is() == false) {
                    $(".character_layerpop2").stop().fadeIn(200);
                }
                $(this).next().stop().fadeIn(200);
            },
            closeClick: function (e) {
                e.preventDefault();
                if ($(".character_layerpop").is() == false) {
                    $(".character_layerpop2").stop().fadeOut(200);
                }
                $(this).parents(o.layer).stop().fadeOut(200);
            }
        }
        Action.bindEvent();
    }

    /* 20150521 */
    $.fn.scorePop = function (option) {
        var popDefault = {
            layer: ".score_layerpop",
            btn: ".words2",
            close: ".btnType33"
        },
        o = $.extend({}, popDefault, option),
        Action = {
            bindEvent: function () {
                $("body").on("click", o.btn, this.bindClick);
                $("body").on("click", o.close, this.closeClick);
            },
            bindClick: function (e) {
                e.preventDefault();
                $(o.layer).stop().fadeIn(200);
            },
            closeClick: function (e) {
                e.preventDefault();
                $(this).parents(o.layer).stop().fadeOut(200);
            }
        }
        Action.bindEvent();
    }

    /*
    // daehyuk 20150413
    $.fn.opinionList = function (option) {
    var listDefault = {
    btn: ".btnType32"
    },
    o = $.extend({}, listDefault, option),
    Action = {
    bindEvent: function () {
    $("body").on("click", o.btn, this.bindClick);
    },
    bindClick: function (e) {
    e.preventDefault();
    var tg = $(this);
    if (!tg.hasClass("on")) {
    tg.addClass("on");
    tg.next().addClass("on");
    } else {
    tg.removeClass("on");
    tg.next().removeClass("on");
    }
    }
    }
    Action.bindEvent();
    }
    */

})(jQuery);

function popupOpen() {
    var popUrl = "../records/live_pop.html"; //팝업창에 출력될 페이지 URL
    var popOption = "width=650, height=582, resizable=no, scrollbars=no, status=no;";    //팝업창 옵션(optoin)
    window.open(popUrl, "", popOption);
}

$(window).on("load", function () {
//    $('#bxslider02').bxSlider({
//        infiniteLoop: true,
//        hideControlOnEnd: true,
//        pager: true
//    });

    $(".gnb > li").gnb();
    /*
    $(".quickMenu").quickMenu();
    $(".twoBnr").twoBnr();
    $(".scoreList ul li").graphShow();
    $(".scoreList ul li").graphShow({
    list: ".scoreList2 ul li",
    graphDiv: ".centerBox2"
    });
    */
    // $(".myComment > ul > li") .flowText()
    $(".subTab li").subTab();

    $(".subTab li").subTab({
        tabMenu: ".characterList > li"
    });
    /*$(".subTab li").subTab({
    tabMenu: ".columnTab > li",
    tabCon: ".tabCon2 > div"
    });*/

    $(".subTab li").subTab({
        tabMenu: ".subTab4 > li"
    });

    $(".subminTab > ul > li").classOn();
    $(".subminTab > ul > li").classOn({
        listMenu: ".subTab3 > li"
    });
    $(".subminTab > ul > li").classOn({
        listMenu: ".subTab2 > li"
    });

    $(".subminTab > ul > li").classOn({
        listMenu: ".teamTab > ul > li"
    });

    $(".subminTab > ul > li").classOnCk({
        listMenu: "#rankInputList01 > li"
    });
    $(".subminTab > ul > li").classOnCk({
        listMenu: "#rankInputList02 > li"
    });

    /*$(".subminTab > ul > li").classOnCk({
    listMenu: ".liveboxWrap  > .liveBox"
    });*/

    $(".words").wordsShow();
    $(".toggleBtn").toggleList({
        btn: "#toggleBtn01",
        listCon: "#recordList01 .add"
    });
    $(".toggleBtn").toggleList({
        btn: "#toggleBtn02",
        listCon: "#recordList02 .add"
    });
    $(".imageAdd").imageAdd();

    $(".btnType35").characterPop();
    $(".btnType35").characterPop({
        layer: ".character_layerpop2",
        btn: ".btnType38"
    });

    //    $(".team_radio > .trdo").classOn2({
    //       listMenu : "#team_radio01 > .trdo"
    //    });
    //    $(".team_radio > .trdo").classOn2({
    //       listMenu : "#team_radio02 > .trdo"
    //    });

    /*
    // daehyuk 20150413
    $(".btnType32").opinionList();
    */
    // 음란물 신고 팝업

    /*
    // daehyuk 20150413
    $(".layer-pop-btn").layerPop({
    layer: ".layer-popup-st1",
    btn: ".btnType31"
    });
    */
    /*
    $(".tables04 > table > thead > tr > th > a").tooltip({
    position: {
    my: "left top-50",
    at: "left bottom",
    collision: "flipfit flip"
    }
    });
    */
});

