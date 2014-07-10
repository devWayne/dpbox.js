(function($) {

	$.fn.dpbox = function(options) {	
		options || (options = {});
		return new dpbox(this,$.extend(options,$.fn.dpbox.defaults));
	}

	function dpbox(_appendTo,args){
		this.wrapper = $('<div/>', {
			'class': 'dpbox'
		}).css({
			position: 'absolute',
			zIndex: '1000'
		});
		this.container = $('<div/>', {
			'class': 'dpbox-container'
		}).appendTo(this.wrapper);
		this.content = $('<div/>', {
			'class': 'dpbox-content'
		}).appendTo(this.wrapper);
		this.wrapper.appendTo(_appendTo);
	}

	$.fn.dpbox.defaults = {

	}

})(jQuery)