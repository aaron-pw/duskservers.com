(function($){
    $.fn.disableTextSelection = function() {
        return this
        .attr('unselectable', 'on')
        .css('user-select', 'none')
        .on('selectstart dragstart', false);
    };
})(jQuery);