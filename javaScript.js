
$("a.navLink").mouseover(function(){
    var $img = $(this).children();
    var $src = $img.attr('src').split(".png");        
    var $newSrc = $src[0] + "E" + ".png";
    $img.attr('src', $newSrc);
})
$("a.navLink").mouseout(function(){
    var $img = $(this).children();
    var $src = $img.attr('src').slice(0,-5);
    var $newSrc = $src + ".png";    
    $img.attr('src', $newSrc);
})


$("a.fLink").mouseover(function(){
    var $p = $(this).children();
    $p.css('color', 'cyan');     
    
})
$("a.fLink").mouseout(function(){
    var $p = $(this).children();    
    $p.css('color', 'white');     
})

