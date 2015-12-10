var heading = new Array();
var gdpIndia = [];
var gdpContinent = [];
var gdpBarChart = [];
var gdpPerCapitaBarChart = [];

var fs = require('fs');

var continents = JSON.parse(fs.readFileSync("../json/continents.json", "utf-8"));

var COUNTRIES= JSON.parse(fs.readFileSync("../json/countries.json", "utf-8"));

var rd = require('readline').createInterface({
    input: fs.createReadStream('../../csv/WDI_Data.csv')
});

var africa;
var asia;
var australia;
var n_america;
var s_america;
var europe;

var setContinentLists = {
  'AFRICA' : africa,
  'ASIA' : asia,
  'AUSTRALIA' : australia,
  'N_AMERICA' : n_america,
  'S_AMERICA' : s_america,
  'EUROPE' : europe
};

var gdp = new Array();
var gni = new Array();
var gdpPerCapita = new Array();
var gniPerCapita = new Array();

rd.on('line', function(line) {
    var arr = line.split(",");
    var lineLength = arr.length;

    //header
    if(heading == '') {
      for(var i=0; i<lineLength; i++) {
        heading.push(arr[i]);
        if(arr[i] === 'Country Name') {
          posCountryName = i;
        } else if(arr[i] === 'Indicator Name') {
          posIndicatorName = i;
        } else if(arr[i] === '2005') {
          pos2005 = i;
        }
      }
    } else {

      if(COUNTRIES.indexOf(arr[posCountryName]) > -1 ) {
        //problem statement 1
        switch(arr[posIndicatorName]) {
          case "GDP (constant 2005 US$)":
            gdp[arr[posCountryName]] = parseFloat(arr[pos2005]);
          break;
          case "GNI (constant 2005 US$)":
            gni[arr[posCountryName]] = parseFloat(arr[pos2005]);
          break;
          case "GDP per capita (constant 2005 US$)":
            gdpPerCapita[arr[posCountryName]] = parseFloat(arr[pos2005]);
          break;
          case "GNI per capita (constant 2005 US$)":
            gniPerCapita[arr[posCountryName]] = parseFloat(arr[pos2005]);
          break;
        }

        //problem statement 2
        if(arr[posCountryName] === "India" && arr[posIndicatorName] === "GDP growth (annual %)") {
          for(var i=4; i<arr.length; i++) {
            var json = {};
            json["year"] = heading[i];
            json["value"] = parseFloat(arr[i]);
            gdpIndia.push(json);
          }
        }

        //problem statement 3
        if(arr[posIndicatorName] === "GDP per capita (constant 2005 US$)") {
          setContinentLists[continents[arr[posCountryName]]] = continentSum(setContinentLists[continents[arr[posCountryName]]], arr);
        }
      }
    }
}).on('close', function() {

    //problem statement 1
    gdpBarChart=sortArray(gdp, gni, "gdp", "gni");
    gdpPerCapitaBarChart=sortArray(gdpPerCapita, gniPerCapita, "gdppercapita", "gnipercapita");
    write('../json/gdpBarChart.json', gdpBarChart);
    write('../json/gdpPerCapitaBarChart.json', gdpPerCapitaBarChart);

    //problem statement 2
    write('../json/gdpIndia.json', gdpIndia);

    //problem statement 3
    for(i in heading) {
      if(i > 3) {
        var json = {};
        json["year"] = heading[i];
        for(j in setContinentLists) {
          json[j] = setContinentLists[j][i];
        }
        gdpContinent.push(json);
      }
    }
    write('../json/gdpContinent.json', gdpContinent);
});

function sortArray(sortObj, fetchObj, key1, key2) {
  var sortedGdp = new Array();
  for (key in sortObj) {
      var temp = new Object();
      temp["key"] = key;
      temp["value"] = sortObj[key];
      sortedGdp.push(temp);
  }

  sortedGdp.sort(
    function(a, b) {
      return b.value - a.value;
    });

  var writeObj = [];
  for(var i=0; i<15; i++) {
    var jsonGdp = {};
    jsonGdp["country"] = sortedGdp[i].key;
    jsonGdp[key1] = sortedGdp[i].value;
    jsonGdp[key2] = fetchObj[sortedGdp[i].key];
    writeObj.push(jsonGdp);
  }
  return writeObj;
} //  end of sortArray

function continentSum(continentObj, arr) {
  if(continentObj == null) {
    continentObj = arr;
  } else {
    for(var i=4; i<arr.length; i++) {
      if(arr[i].length > 0) {
        continentObj[i] = parseFloat(continentObj[i]) + parseFloat(arr[i]);
      }
    }
  }
  return continentObj;
} //  end of continentSum

function write(fileName, fromArray) {
  var fromArray1 = JSON.stringify(fromArray);
  fs.writeFile(fileName, fromArray1, function (err) {
    if (err) return console.log(err);
    console.log('Completed ' + fileName);
  });
} //  end of write
