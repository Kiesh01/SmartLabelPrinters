$(document).ready(function() {  
        var target = $(this.hash);  
        if (target.length == 0) target = $('[name="' + this.hash.substr(1) + '"]');  
        if (target.length == 0) target = $('html');  
        $('html, body').animate({ scrollTop: target.offset().top }, 700);  
        return false;  
});