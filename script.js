$(document).ready(function() {
	$('.blue-this').each(function(index, element){
		var nth = $(element).dara('nth');
		var color = $(element).data('color');
		var text = $(element).text();
		var textArray = text.split(' ');
		for (var i = nth; i < textArray.length; i += nth) {
			textArray[i] = '<span class="' + color + '">' + textArray[i] + '</span>';
		}
		var textConcat = textArray.join(' ');
		$(element).html(textConcat);
	})
});
