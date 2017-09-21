
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

