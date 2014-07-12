(function($) {

	function dpbox(_appendTo, options) {

		this.wrapper = $(_appendTo).addClass('dpbox').css('display','none');

		this.title = $('<div/>', {
			'class': 'dpbox-title'
		}).appendTo(this.wrapper);

		this.container = $('<div/>', {
			'class': 'dpbox-container'
		}).appendTo(this.wrapper);

		this.content = $('<div/>', {
			'class': 'dpbox-content'
		}).css({
			width: options.width,
			height: options.height
		}).appendTo(this.container);

		this.setTitle(options.title);
		this.setContent(options.content);
		//this.show(this.wrapper);
	}

	dpbox.prototype.setContent = function(content) {
		if (content == null && !this.wrapper) return;
		this.content.html(content);
	}

	dpbox.prototype.setTitle = function(title) {
		if (title == null && !this.wrapper) return;
		this.title.html(title);
	}


	dpbox.prototype.open = function() {
		var top = ($(window).height() - $(this.wrapper).height()) / 2;
		var left = ($(window).width() - $(this.wrapper).width()) / 2;
		var scrollTop = $(document).scrollTop();
		var scrollLeft = $(document).scrollLeft();
		$(this.wrapper).css({
			position: 'absolute',
			'top': top + scrollTop,
			'left': left + scrollLeft
		}).show();
	}

	$.fn.dpbox = function(options) {
		options || (options = {});
		return new dpbox(this, $.extend(options, $.fn.dpbox.defaults));
	}

	$.fn.dpbox.defaults = {
		width: 'auto',
		height: 'auto'
	}

})(jQuery)