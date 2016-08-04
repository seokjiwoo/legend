(function($) {

	"use strict";

	$.fn.menuOver = function( option ){
		var gnbDefault = {
			menu : ".gnb li"
		},
		o = $.extend({}, gnbDefault, option),
		Action ={
			bindEvent : function(){
				$("body").on("mouseenter", o.menu, this.bindEnter);
			},
			bindEnter : function(){
				var i = $(this).index();
				$(o.menu).removeClass("on");
				$(o.menu).eq(i).addClass("on");
			}
		}
		Action.bindEvent();
	}

	 $.fn.layerPop = function (option) {
        var popDefault = {
            layer: ".layer_popup",
            btn: ".layer_pop_btn",
            close: ".layer_close"
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

}) (jQuery);


$(window).on("load", function(){
	$(".gnb li").menuOver();
	$(".layer_pop_btn").layerPop();
	$(".btnType32").opinionList();

	$( "#datepicker" ).datepicker({ 
		dateFormat:'yy'+'.'+'mm'+'.'+'dd',
		monthNames: ["January 1월","February 2월","March 3월","April 4월","May 5월","June 6월","July 7월","August 8월","September 9월","October 10월","November 11월","December 12월"],
		dayNamesMin: ["일","월","화","수","목","금","토"],
		onSelect : function(selectedDate){
			$("#date").val(selectedDate);
		}
	});

	$( "#datepicker1" ).datepicker({ 
		dateFormat:'yy'+'.'+'mm'+'.'+'dd',
		monthNames: ["January 1월","February 2월","March 3월","April 4월","May 5월","June 6월","July 7월","August 8월","September 9월","October 10월","November 11월","December 12월"],
		dayNamesMin: ["일","월","화","수","목","금","토"],
		onSelect : function(selectedDate){
			$("#date1").val(selectedDate);
		}
	});

});