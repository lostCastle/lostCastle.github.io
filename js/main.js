// JavaScript Document
;$(function()
  {
    'use strict';
    
    var sidebar = $('#sidebar'),
        mask = $('.mask'),
        backButton = $('.back-top'),
        sidebar_trigger = $('#sidebar_trigger');
    
    function showSidebar()
    {
        mask.fadeIn();
        sidebar.css('right',0);
    }
    function hideSidebar()
    {
        mask.fadeOut();
        sidebar.css('right',-sidebar.width());
    }
    sidebar_trigger.on('click',showSidebar)
    mask.on('click',hideSidebar)
    backButton.on('click',function () {
        $('html,body').animate({
            scrollTop:0
        },800)
    })
    
    $(window).on('scroll',function () {
        if($(window).scrollTop() > $(window).height())
            backButton.fadeIn();
        else
            backButton.fadeOut();
    })
    
    $(window).trigger('scroll');
})