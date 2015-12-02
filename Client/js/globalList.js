$(document).ready(function()
{
	$.ajax({ 
	    type: 'GET', 
	    url: 'http://ilankleiman.com/projects/StockMarketSimulator2/Server/global_list.pl', 
	    data: { 'get_param' : 'value' }, 
	    success: function(data) 
	    { 
	    	if(data.indexOf('<!DOCTYPE HTML>') === -1)
	    	{
				var datax = data;
				parse_it(datax);
	    	}
	    	else
	    	{
	    		window.location.href = 'http://ilankleiman.com/projects/StockMarketSimulator2/Server/login/login.pl';
	    	}
	    }
	});

	function parse_it(data)
	{
		var arr = JSON.parse(data);
	    var i;
	    var out = "<table border='1px'><tr style='display:none;'><td>Stock</td><td style='display:none;'>Name</td><td>Cost</td><td style='display:none;'>Bought</td><td style='display:none;'>Sold</td><td>Change</td></tr>";

	    for(i = 0; i < arr.length; i++) 
	    {
			var styleS = "style=''";
			try 
			{
				var j = parseInt(i) + 1;
				var itemJ = arr[j].Symbol;
			}
			catch(err) 
			{
			    if(err)
			    {
			    	var styleS = "style='display:none;'";
			    }
			}
			var currentChange = arr[i].Change;

			if(currentChange.indexOf('-') === -1)
			{
				var styleChange = "style='background-color:green;'";
				var newCurrentChange = "+ " + currentChange;
			}
			else
			{
				var styleChange = "style='background-color:red;'";
				var newCurrentChange = currentChange.replace("-", "- ");
			}

	        out += "<tr " + styleS + "><td>" + 
	        "[" + arr[i].Symbol + "]" +
	        "</td><td style='display:none;'>" +
	        arr[i].Name +
	        "</td><td>" +
	        arr[i].Price +
	        "</td><td style='display:none;'>" +
	        arr[i].Bought +
	        "</td><td style='display:none;'>" +
	        arr[i].Sold +
	        "</td><td " + styleChange + ">" +
	        newCurrentChange +
	        "</td><td><button type='button' class='buyStock' id='" + arr[i].Symbol + "'>Buy</button>" +
	        "</td></tr>";
	    }
	    out += "</table>";

	    document.getElementById("id01").innerHTML = out;
	}
});