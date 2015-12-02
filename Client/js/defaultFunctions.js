function popupWindow(stuffToPutIn)
{
	if($("#content").find('#popupWindow').length)
	{
    	// nothing
	}
	else
	{
		$("#content").append("<div id='popupWindow'><div id='popupWindowClose'><span>X</span></div>" + stuffToPutIn + "</div>");
	}
	$("#popupWindow").show();
	$("#popupWindow").css({"width" : "80%", "height" : "90%", "top" : "5%", "left" : "10%", "position" : "fixed", "z-index" : "10", "background-color" : "black", "color" : "#FFFFFF", "border" : "1px solid red"});
	$("#popupWindowClose").css({"width" : "100%", "height" : "40px", "border-bottom" : "1px solid red", "text-align" : "center", "color" : "red", "cursor" : "pointer"});

	$("#content").delegate("#popupWindow", "click", function()
	{
		alert('closeme');
	});
}
