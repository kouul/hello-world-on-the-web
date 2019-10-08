$('document').ready(function() {
    var helloworld_text = new Typed('#helloworld_text', {
        strings: ['Hello World'],
        stringElement: '.header-text',
        typeSpeed: 50,
        backDelay: 1000,
        showCursor: true,
        loop: true,
        loopCount: Infinity
    })
    var randomtext = new Typed('#randomtext', {
        strings: ['My name is Jonh', 'My name is John', 'Welcome!'],
        stringElement: '.header-text',
        typeSpeed: 50,
        showCursor: true,
    })
}); 