$(document).ready(function() {
    //event click
    $('#click').click(function() {
        alert("Saya belajar niiii");
    })

    //event doubleclick
    $('#dblclick').dblclick(function() {
        $(this).css('background-color', 'salmon');
        alert("Saya belajar niiii bwanggggggg");
    });

    //event mouse leave
    $('.mouse').mouseleave(function() {
        $(this).css('background-color', 'skyblue');
    });

    //event mouse enter
    $('.mouse').mouseenter(function() {
        $(this).css('background-color', 'salmon');
    });

    //event keydown
    $('#keydown').keydown(function () {
        $('#pesan_keydown').text($(this).val());
    });

    //event keyup
    $('#keyup').keyup(function () {
        $('#pesan_keyup').text($(this).val());
    });
});