//<script>
fixNames("the", "DALLAS", "CowBoys");
print("Finito");

function fixNames()
{
	var s = ""

	for (j = 0 ; j < fixNames.arguments.length ; ++j)
		s += fixNames.arguments[j].charAt(0).toUpperCase() +
			 fixNames.arguments[j].substr(1).toLowerCase() + " "
	
	return s.substr(0, s.length-1)
}
//</script>