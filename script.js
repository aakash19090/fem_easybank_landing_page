function toggleNav(){
    $(".xs_header .menu_toggle_icon").click(function(){
        $(this).closest(".xs_header").toggleClass("show_nav");
        $(".xs_header .menu_toggle_icon .toggle_icon").toggleClass("hide");
    });
    
}

$(document).ready(function(){
    toggleNav();
});