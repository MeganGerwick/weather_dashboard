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
            var city = $('#searchInput').val();
            var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c4fde36534d3d2305351dc3bd351c12c";
            console.log(city);
            //Store searches in local storage
            localStorage.setItem('lastSearch', city);
            //Clear out input box
            $('#searchInput').val('')
            //Append search to 'searchhistory' table
            var tr = $('<h5>');
            tr.text(city);
            $('#search-History').append(tr);
            
            
        //AJAX call to weather api
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
    
        .then (function(response){
            console.log(response);
            var results = response.data; 
        })
        //Call function to display current day data
      
    
       
        //Call function to display next 5 days   
    })
    
    //Add Event listner to all search history items
        //Call function to display current day data
        //Call function to display next 5 days


