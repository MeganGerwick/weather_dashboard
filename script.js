
var city = $('#search').val();
varqueryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c4fde36534d3d2305351dc3bd351c12c";

//Function to display current day data
function currentDayData() {

}
//Function to display next 5 days
function next5Days() {
    
}
//Check local storage to display last city searched 


//Add click event to Search button
$('#search').on('click', function(event) {
    event.preventDefault();
    //Store searches in local storage

    //Append search to 'searchhistory' table

    ////AJAX call to weather api
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
    //Call function to display current day data
  

   
    //Call function to display next 5 days
    

})



