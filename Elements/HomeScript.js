$(document).ready(function()
{

    var slideCount = $('#slider .slideImages .LineImage').lenth
    var slideWidth = $('#slider .slideImages .LineImage').width()
    var slideHeight = $('#slider .slideImages .LineImage').height()
    var totalWidth = slideCount * slideWidth


    $('#slider').css({width: slideWidth, height: slideHeight})
    $('#slider .slideImages').css({width: totalWidth, marginLeft: -slideWidth})
    $('#slider .slideImages .LineImage:last-child').prependTo('#slider .slideImages')

    
    $('#before').click(function()
    {
        $('#slider .slideImages').animate({
            left: +slideWidth
        }, 1000, function()
        {
            $('#slider .slideImages .LineImage:last-child').prependTo('#slider .slideImages')
            $('#slider .slideImages').css('left', '0')
        })
    })

    $('#next').click(function()
    {
        $('#slider .slideImages').animate({
            left: -slideWidth
        }, 1000, function()
        {
            $('#slider .slideImages .LineImage:first-child').appendTo('#slider .slideImages')
            $('#slider .slideImages').css('left', '0')
        })
    })

})