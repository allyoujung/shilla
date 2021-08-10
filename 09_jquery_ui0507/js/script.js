$( "#s-location" ).selectmenu();

/* autocomplete */
var availableTags = [
      "HTML",
      "css",
      "javascript",
      "jQuery",
	  "java",
	  "C++"
    ];
    $( "#category" ).autocomplete({
      source: availableTags
    });
	
	/* spinner */
	var spinner = $( "#experience" ).spinner(
	{
		min:0,
		step:2,
		max:10
	}
	);
	$( "#datepicker" ).datepicker({
	minDate:new Date(),
	maxDate:"+2w" //2주
});
$( "#datepicker" ).datepicker( "setDate", new Date() ); //날짜 표시
$( "fieldset input" ).checkboxradio({
  icon: false
});
 $( "input[type=submit]" ).button();