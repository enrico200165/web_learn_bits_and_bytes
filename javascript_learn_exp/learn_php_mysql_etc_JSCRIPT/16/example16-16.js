//<script>
// Alphabetical sort
sports = ["Football", "Tennis", "Baseball", "Hockey"]
sports.sort()
document.write(sports + "<br />")

// Reverse alphabetical sort
sports = ["Football", "Tennis", "Baseball", "Hockey"]
sports.sort().reverse()
document.write(sports + "<br />")

// Ascending numerical sort
numbers = [7, 23, 6, 74]
numbers.sort(function(a,b){return a - b})
document.write(numbers + "<br />")

// Descending numerical sort
numbers = [7, 23, 6, 74]
numbers.sort(function(a,b){return b - a})
document.write(numbers + "<br />")
//</script>
