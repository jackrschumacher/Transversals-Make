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

filter();
function filter() {
  filteredCityList = [];
  filteredConditionList = [];
  filteredIconList = [];
  filteredHighTemp = [];
  filteredLowTemp = [];
  for(var i = 0 ); i = forecastNumberList.length

}
