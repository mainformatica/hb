jQuery(document).ready(function(){"use strict";function e(){var e=$(window).height()-119;$(".slideResize").height(e)}function a(){var e=$(window).height()-159;$(".slideResize").height(e)}$(window).load(function(){$(".body-wrapper").each(function(){var e=$(".header"),a=e.children(".navbar-default"),t=(a.find(".navbar-header"),a.find(".navbar-collapse")),n={nav_top:t.css("margin-top")};$(window).scroll(function(){a.hasClass("bb-fixed-header")&&(0===$(this).scrollTop()||$(this).width()<750)?(a.removeClass("bb-fixed-header").appendTo(e),t.animate({"margin-top":n.nav_top},{duration:300,queue:!1,complete:function(){e.css("height","auto")}})):!a.hasClass("bb-fixed-header")&&$(this).width()>750&&$(this).scrollTop()>e.offset().top+e.height()-parseInt($("html").css("margin-top"),10)&&(e.css("height",e.height()),a.css({opacity:"0"}).addClass("bb-fixed-header"),a.appendTo($("body")).animate({opacity:1}),t.css({"margin-top":"0px"}))})}),$(window).trigger("resize"),$(window).trigger("scroll")}),$(".select-drop").selectbox(),$(".navbar a.dropdown-toggle").on("click",function(e){var a=$(this).parent().parent();if(!a.hasClass("nav")){var t=$(this).parent(),n=parseInt(a.css("height").replace("px",""),10)/2,o=parseInt(a.css("width").replace("px",""),10)-10;return t.hasClass("open")?t.removeClass("open"):t.addClass("open"),$(this).next().css("top",n+"px"),$(this).next().css("left",o+"px"),!1}}),$(".navbar").width()>1007&&($(".nav .dropdown").on("mouseover",function(){$(this).addClass("open")}),$(".nav .dropdown").on("mouseleave",function(){$(this).removeClass("open")}));var t=$(".main-slider .inner");t.length>0&&t.each(function(){var e=$(this).parent().data("loop"),a=$(this).parent().data("autoplay"),t=$(this).parent().data("interval")||3e3;$(this).owlCarousel({items:1,loop:e,margin:0,nav:!0,dots:!0,navText:[],autoplay:a,autoplayTimeout:t,autoplayHoverPause:!0,smartSpeed:700})}),$(".rtl .main-slider .inner").owlCarousel({rtl:!0}),e(),a(),$(window).width()<768?e():a(),$(window).resize(function(){a(),e()}),$(".owl-carousel.partnersLogoSlider").owlCarousel({loop:!0,margin:28,autoplay:!0,autoplayTimeout:6e3,autoplayHoverPause:!0,nav:!0,dots:!1,smartSpeed:500,responsive:{320:{slideBy:1,items:1},768:{slideBy:1,items:3},992:{slideBy:1,items:4}}}),$(".owl-carousel.partnersLogoSlider").owlCarousel({rtl:!0}),$("#myCarousel").carousel({interval:3e3,cycle:!0}),$(window).scroll(function(){$(this).scrollTop()>10?$(".backToTop").css("opacity",1):$(".backToTop").css("opacity",0)}),$('a[href="#pageTop"]').on("click",function(e){return e.preventDefault(),e.stopPropagation(),$("html, body").animate({scrollTop:0},1500),!1}),$('.scrolling  a[href*="#"]').on("click",function(e){e.preventDefault(),e.stopPropagation();var a=$(this).attr("href");$(a).velocity("scroll",{duration:800,offset:-150,easing:"easeOutExpo",mobileHA:!1})}),$(".datepicker").datepicker({startDate:"dateToday",autoclose:!0}),$("#simple_timer").syotimer({year:2018,month:5,day:9,hour:20,minute:30});var n=$("#price-amount-1"),o=$("#price-amount-2");$("#price-range").slider({range:!0,min:12,max:300,values:[12,300],slide:function(e,a){n.val("$"+a.values[0]),o.val("$"+a.values[1])}}),n.val("$"+$("#price-range").slider("values",0)),o.val("$"+$("#price-range").slider("values",1)),$("#productSlider, #thubmnailTeamSlider").on("touchstart",function(e){var a=e.originalEvent.touches[0].pageX;$(this).one("touchmove",function(e){var t=e.originalEvent.touches[0].pageX;Math.floor(a-t)<-5?$("#productSlider, #thubmnailTeamSlider").carousel("prev"):Math.floor(a-t)>5&&$("#productSlider, #thubmnailTeamSlider").carousel("next")}),$(".carousel").on("touchend",function(){$(this).off("touchmove")})}),$("#thubmnailTeamSlider").carousel({interval:3e3}),$("#thubmnailTeamSlider .item").each(function(){for(var e=$(this),a=1;a<4;a++)e=e.next(),e.length||(e=$(this).siblings(":first")),e.children(":first-child").clone().addClass("cloneditem-"+a).appendTo($(this))}),$("#singleServiceTab a").on("click",function(e){e.preventDefault(),$(this).tab("show"),$(".nav-stacked li a i").addClass("fa-angle-down").removeClass("fa-angle-up"),$(this).find("i").toggleClass("fa-angle-up fa-angle-down")}),$(".nav-stacked li a").on("click",function(){$(".tabList").removeClass("active openTab"),$(this).parent(".tabList").addClass("active openTab")}),$(".nav-stacked li .dropdown-menu li a").on("click",function(e){$(".tabList").removeClass("active openTab"),$(this).closest(".nav-stacked li.tabList").addClass("active openTab")}),$(".content-collapse li").on("click",function(){$(this).toggleClass("active").siblings().removeClass("active")})}),$("#angelContactForm").submit(function(e){var a=$(this).serializeArray(),t=$(this).attr("action"),n=$("#contact-submit-btn");n.val("Sending..."),$("#angelContactForm :input").prop("disabled",!0),$.ajax({url:t,type:"POST",dataType:"json",data:a,success:function(e){$("#alert").removeClass("alert alert-success"),$("#alert").removeClass("alert alert-danger"),"true"===e.status?($("#alert").addClass("alert alert-success"),$("#angelContactForm :input").prop("disabled",!1),$("#angelContactForm")[0].reset(),n.val("Send")):($("#alert").addClass("alert alert-danger"),$("#angelContactForm :input").prop("disabled",!1),n.val("Send")),$("#alert").html(e.message).slideDown(),window.setTimeout(function(){$("#alert").alert("close")},3e3)}}),e.preventDefault()}),$("#angelContactForm").submit(function(e){var a=$(this).serializeArray(),t=$(this).attr("action"),n=$("#contact-submit-btn");n.val("Sending..."),$("#angelContactForm :input").prop("disabled",!0),$.ajax({url:t,type:"POST",dataType:"json",data:a,success:function(e){$("#alert").removeClass("alert alert-success"),$("#alert").removeClass("alert alert-danger"),"true"===e.status?($("#alert").addClass("alert alert-success"),$("#angelContactForm :input").prop("disabled",!1),$("#angelContactForm")[0].reset(),n.val("Send")):($("#alert").addClass("alert alert-danger"),$("#angelContactForm :input").prop("disabled",!1),n.val("Send")),$("#alert").html(e.message).slideDown(),window.setTimeout(function(){$("#alert").alert("close")},3e3)}}),e.preventDefault()}),$("#appoinmentModalForm").submit(function(e){var a=$(this).serializeArray(),t=$(this).attr("action"),n=$("#appointment-submit-btn");n.val("Sending..."),$("#appoinmentModalForm :input").prop("disabled",!0),$.ajax({url:t,type:"POST",dataType:"json",data:a,success:function(e){$("#appointment-alert").removeClass("alert alert-success"),$("#appointment-alert").removeClass("alert alert-danger"),"true"===e.status?($("#appointment-alert").addClass("alert alert-success"),$("#appoinmentModalForm :input").prop("disabled",!1),$("#appoinmentModalForm")[0].reset(),n.val("Send")):($("#appointment-alert").addClass("alert alert-danger"),$("#appoinmentModalForm :input").prop("disabled",!1),n.val("Send")),$("#appointment-alert").html(e.message).slideDown(),window.setTimeout(function(){$("#appointment-alert").alert("close")},3e3)}}),e.preventDefault()});(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-71155940-9','auto');ga('require','GTM-MZ6QXS2');ga('send','pageview');(function(w,i,d,g,e,t,s){w[d]=w[d]||[];t=i.createElement(g);t.async=1;t.src=e;s=i.getElementsByTagName(g)[0];s.parentNode.insertBefore(t,s);})(window,document,'_gscq','script','//widgets.getsitecontrol.com/46851/script.js');