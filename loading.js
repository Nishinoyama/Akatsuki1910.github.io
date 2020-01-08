$('head').append(
	'<style type="text/css">#fade{display:block;}#loader{display:none;}</style>'
);

var pageH;
var pic_h=384;
var pic_w=384;
pageH = window.innerHeight;
pageW = window.innerWidth;

$("#loader").css("top", pageH/2-pic_h/2+"px");
$("#loader").css("left", pageW/2-pic_w/2+"px");
$("#fade").css("height", pageH);

$(function(){ // 全ての読み込み完了後に呼ばれる関数
	var time = 3000;
var fadeout = 300;
var fad_in=0;
	$("#loader").fadeIn(fad_in).delay(time-fadeout).fadeOut(fadeout);
	$("#fade").delay(time+fad_in).fadeOut(fadeout+300);
});
