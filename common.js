$(document).ready(function() {
var $gnbM = $('.mobile_nav');
var $menuBtn = $('.mgnb_open_btn');
var $closeBtn = $('.mgnb_close_btn');
var $lanbBox = $('.language_box a');
$lanbBox.click(function  () {
if( $(".language_box ul").css('display') != "none" ) {
         $(".language_box ul").hide();
   } else {
       $(".language_box ul").show();
   }
});
$menuBtn.click(function  () {
       menuOpen();
       $closeBtn.addClass("active");
});
$closeBtn.click(function  () {
   menuClose();
   $closeBtn.removeClass("active");
});
/*mobile 메뉴열기   */
function menuOpen () {
$gnbM.addClass("open");
}
/*mobile  메뉴닫기 */
function menuClose () {
$gnbM.removeClass("open");
}
   });
