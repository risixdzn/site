$("#_portfolio").click(function portfolio(){
    $( "body" ).removeClass( "loaded" ).addClass( "non-event" );        
    setTimeout(function() { 
        window.location.href = '/portfolio.html';
    }, 800);    
});

$("#_home").click(function home(){
    $( "body" ).removeClass( "loaded" ).addClass( "non-event" );        
    setTimeout(function() { 
        window.location.href = '/index.html';
    }, 800);    
});

$("#_precos").click(function precos(){
    $( "body" ).removeClass( "loaded" ).addClass( "non-event" );        
    setTimeout(function() { 
        window.location.href = '/precos.html';
    }, 800);    
});

$("#_contato").click(function contato(){
    $( "body" ).removeClass( "loaded" ).addClass( "non-event" );        
    setTimeout(function() { 
        window.location.href = 'https://twitter.com/risixdzn';
    }, 800);    
});