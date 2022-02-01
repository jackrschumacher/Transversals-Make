// Initilize list variables with data from the data set
var cityList = getColumn("Daily Weather", "City");
var forecastNumberList = getColumn("Daily Weather", "Forecast Number");
var conditionList = getColumn("Daily Weather", "Condition Description");
var iconList = getColumn("Daily Weather", "Icon");
var highTempList = getColumn("Daily Weather", "High Temperature");
var lowTempList = getColumn("Daily Weather", "Low Temperature");
var rand = 0;

//Initilize filtered list variables

var filteredCityList = [];
var filteredConditionList = [];
var filteredIconList = [];
var filteredHighTemp = [];
var filteredLowTemp = [];
filter(); //Call filter Function

function filter(){ //Filter Function- Called only once when program initiilized.
  for(var i = 0; i <= forecastNumberList.length; i++){ //Loops through the data set forecast numbers while the index values is less than the length of the list
    if(forecastNumberList[i] == 2){ //Filters the list based on if the index value of forecastNumbersList is equal to 2
      
      appendItem(filteredCityList, cityList[i]); //Append an Item to Filtered lists based on the value of the original list[i]
      appendItem(filteredConditionList, conditionList[i]);
      appendItem(filteredIconList, iconList[i]);
      appendItem(filteredHighTemp, highTempList[i]);
      appendItem(filteredLowTemp, lowTempList[i]);
    }
  }
}

onEvent("forecastButton", "click", function( ) { //When Forecast Button is clicked


  rand = randomNumber(0,122); //Set Random values between Zero and 122 (number of tommorow Forecasts in the data set)
  setProperty("cityOutput", "text", filteredCityList[rand]); //Set labels on the screen to filtered lists
  setProperty("highTempOutput", "text", filteredHighTemp[rand]);
  setProperty("lowTempOutput", "text", filteredLowTemp[rand]);
  setProperty("conditionOutput", "text", filteredConditionList[rand]);
  setProperty("iconOutput", "image", filteredIconList[rand]);
      
    
    
    
    
    
});

