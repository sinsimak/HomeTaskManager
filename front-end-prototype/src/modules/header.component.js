import $ from 'jquery';

$('<h1></h1>')
    .text('Hello world from JQuery')
    .css({
        textAlign: 'center',
        color: 'blue'
    })
    .appendTo($('header'));
