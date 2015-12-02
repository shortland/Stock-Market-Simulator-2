$(document).ready(function()
{
	$("#id01").delegate(".buyStock", "click", function()
	{
		$.ajax({ 
		    type: 'POST', 
		    url: 'http://ilankleiman.com/projects/StockMarketSimulator2/Server/stockInfo.pl', 
		    data: {'symbol' : this.id}, 
		    success: function (data) 
		    {
		    	var arr = JSON.parse(data);
		    	alert(arr[0].Symbol);
		    	var context = "";
		    	// format data into "context" form
		    	// <p> cost: " + cost[] + "</p><input type='text' id=''/><button type='button' 
				$.getScript('js/defaultFunctions.js', function()
				{
					popupWindow(context);
				});
		    }
		});
	});
});