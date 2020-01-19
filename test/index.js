/*jshint esversion:6 */
$("body").on('click',()=>{
    //$('.uzu-pole').removeClass('uzu-pole-move');
    $('.uzu-pole').addClass('uzu-pole-clear');
    $('#loader-bg').fadeOut(1000);
    $('#loader').fadeOut(500);
    $('#main-contents').css('display', 'grid');
    $('.passing').addClass('move');
});