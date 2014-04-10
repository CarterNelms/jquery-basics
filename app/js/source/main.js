(function()
{
	'use strict';

	$(document).ready(initialize);

	function initialize()
	{
		$('#bttn1').click(doStuff1);
		$('#bttn2').click(doStuff2);
		$('#bttn3').click(doStuff3);
		$('#bttn4').click(doStuff4);
		$('#bttn5').click(doStuff5);
		$('#bttn6').click(doStuff6);
		$('#bttn7').click(doStuff7);
	}

	function doStuff1()
	{
		$('h1').css({'color':'red'});
		$('h2').css('color', '#34ff29');
		$('h3').text('Carter');
	}

	function doStuff2()
	{
		$('#bttn1').text('You should have clicked me');
	}

	function doStuff3()
	{
		$('body').addClass('alert');
	}

	function doStuff4()
	{
		$('body').removeClass('alert');
	}

	function doStuff5()
	{
		$('body').toggleClass('alert');
	}

	function doStuff6()
	{
		var x = $('#tb1').val().toUpperCase();
		$('h1').text(x);
	}

	function doStuff7()
	{
		var color = $('#tb1').val();
		$('h3').css('background-color', color);
	}

})();
