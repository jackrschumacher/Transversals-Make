// Initilize list variables with data from the data set
var cityList = getColumn("Daily Weather", "City");
var forecastNumberList = getColumn("Daily Weather", "Forecast Number");
var conditionList = getColumn("Daily Weather", "Condition Description");
var iconList = getColumn("Daily Weather", "Icon");
var highTempList = getColumn("Daily Weather", "High Temperature");
var lowTempList = getColumn("Daily Weather", "Low Temperature");
var rand = randomNumber(0,610);

//Initilize filtered list variables

var filteredCityList = [];
var filteredConditionList = [];
var filteredIconList = [];
var filteredHighTemp = [];
var filteredLowTemp = [];

onEvent("forecastButton", "click", function( ) {

filteredCityList = [];
filteredConditionList = [];
filteredIconList = [];
filteredHighTemp = [];
filteredLowTemp = [];
for(var i = 0; i <= forecastNumberList.length; i++){
    if(forecastNumberList[i] == 2){
      appendItem(filteredCityList, cityList[i]);
      appendItem(filteredConditionList, conditionList[i]);
      appendItem(filteredIconList, iconList);
      appendItem(filteredHighTemp, highTempList);
      appendItem(filteredLowTemp, lowTempList);
      }
    }
    
    
      
    

  
});

