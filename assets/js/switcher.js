jQuery(document).ready(function(){
    jQuery('#switch1').on('click', function(event) {        
        jQuery('#servers').toggle('show');
        jQuery('#home').toggle('hide');
    });
    jQuery('#switch2').on('click', function(event) {        
        jQuery('#servers').toggle('hide');
        jQuery('#home').toggle('show');
    }); 
});