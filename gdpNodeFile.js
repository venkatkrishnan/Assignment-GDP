var heading = new Array();
var gdpIndia = [];
var gdpContinent = [];
var gdpBarChart = [];

var continents = {
  /* AFRICA */
  'Algeria' : 'AFRICA',
  'Angola' : 'AFRICA',
  'Benin' : 'AFRICA',
  'Botswana' : 'AFRICA',
  'Burkina' : 'AFRICA',
  'Burundi' : 'AFRICA',
  'Cameroon' : 'AFRICA',
  'Cape Verde' : 'AFRICA',
  'Central African Republic' : 'AFRICA',
  'Chad' : 'AFRICA',
  'Comoros' : 'AFRICA',
  'Congo' : 'AFRICA',
  'Democratic Republic of' : 'AFRICA',
  'Djibouti' : 'AFRICA',
  'Egypt' : 'AFRICA',
  'Equatorial Guinea' : 'AFRICA',
  'Eritrea' : 'AFRICA',
  'Ethiopia' : 'AFRICA',
  'Gabon' : 'AFRICA',
  'Gambia' : 'AFRICA',
  'Ghana' : 'AFRICA',
  'Guinea' : 'AFRICA',
  'Guinea-Bissau' : 'AFRICA',
  'Ivory Coast' : 'AFRICA',
  'Kenya' : 'AFRICA',
  'Lesotho' : 'AFRICA',
  'Liberia' : 'AFRICA',
  'Libya' : 'AFRICA',
  'Madagascar' : 'AFRICA',
  'Malawi' : 'AFRICA',
  'Mali' : 'AFRICA',
  'Mauritania' : 'AFRICA',
  'Mauritius' : 'AFRICA',
  'Morocco' : 'AFRICA',
  'Mozambique' : 'AFRICA',
  'Namibia' : 'AFRICA',
  'Niger' : 'AFRICA',
  'Nigeria' : 'AFRICA',
  'Rwanda' : 'AFRICA',
  'Sao Tome and Principe' : 'AFRICA',
  'Senegal' : 'AFRICA',
  'Seychelles' : 'AFRICA',
  'Sierra Leone' : 'AFRICA',
  'Somalia' : 'AFRICA',
  'South Africa' : 'AFRICA',
  'South Sudan' : 'AFRICA',
  'Sudan' : 'AFRICA',
  'Swaziland' : 'AFRICA',
  'Tanzania' : 'AFRICA',
  'Togo' : 'AFRICA',
  'Tunisia' : 'AFRICA',
  'Uganda' : 'AFRICA',
  'Zambia' : 'AFRICA',
  'Zimbabwe' : 'AFRICA',

  /* ASIA */
  'Afghanistan' : 'ASIA',
  'Bahrain' : 'ASIA',
  'Bangladesh' : 'ASIA',
  'Bhutan' : 'ASIA',
  'Brunei' : 'ASIA',
  'Burma (Myanmar)' : 'ASIA',
  'Cambodia' : 'ASIA',
  'China' : 'ASIA',
  'East Timor' : 'ASIA',
  'India' : 'ASIA',
  'Indonesia' : 'ASIA',
  'Iran' : 'ASIA',
  'Iraq' : 'ASIA',
  'Israel' : 'ASIA',
  'Japan' : 'ASIA',
  'Jordan' : 'ASIA',
  'Kazakhstan' : 'ASIA',
  'North Korea' : 'ASIA',
  'South Korea' : 'ASIA',
  'Kuwait' : 'ASIA',
  'Kyrgyzstan' : 'ASIA',
  'Laos' : 'ASIA',
  'Lebanon' : 'ASIA',
  'Malaysia' : 'ASIA',
  'Maldives' : 'ASIA',
  'Mongolia' : 'ASIA',
  'Nepal' : 'ASIA',
  'Oman' : 'ASIA',
  'Pakistan' : 'ASIA',
  'Philippines' : 'ASIA',
  'Qatar' : 'ASIA',
  'Russian Federation' : 'ASIA',
  'Saudi Arabia' : 'ASIA',
  'Singapore' : 'ASIA',
  'Sri Lanka' : 'ASIA',
  'Syria' : 'ASIA',
  'Tajikistan' : 'ASIA',
  'Thailand' : 'ASIA',
  'Turkey' : 'ASIA',
  'Turkmenistan' : 'ASIA',
  'United Arab Emirates' : 'ASIA',
  'Uzbekistan' : 'ASIA',
  'Vietnam' : 'ASIA',
  'Yemen' : 'ASIA',

  /* EUROPE */
  'Albania' : 'EUROPE',
  'Andorra' : 'EUROPE',
  'Armenia' : 'EUROPE',
  'Austria' : 'EUROPE',
  'Azerbaijan' : 'EUROPE',
  'Belarus' : 'EUROPE',
  'Belgium' : 'EUROPE',
  'Bosnia and Herzegovina' : 'EUROPE',
  'Bulgaria' : 'EUROPE',
  'Croatia' : 'EUROPE',
  'Cyprus' : 'EUROPE',
  'Czech Republic' : 'EUROPE',
  'Denmark' : 'EUROPE',
  'Estonia' : 'EUROPE',
  'Finland' : 'EUROPE',
  'France' : 'EUROPE',
  'Georgia' : 'EUROPE',
  'Germany' : 'EUROPE',
  'Greece' : 'EUROPE',
  'Hungary' : 'EUROPE',
  'Iceland' : 'EUROPE',
  'Ireland' : 'EUROPE',
  'Italy' : 'EUROPE',
  'Latvia' : 'EUROPE',
  'Liechtenstein' : 'EUROPE',
  'Lithuania' : 'EUROPE',
  'Luxembourg' : 'EUROPE',
  'Macedonia' : 'EUROPE',
  'Malta' : 'EUROPE',
  'Moldova' : 'EUROPE',
  'Monaco' : 'EUROPE',
  'Montenegro' : 'EUROPE',
  'Netherlands' : 'EUROPE',
  'Norway' : 'EUROPE',
  'Poland' : 'EUROPE',
  'Portugal' : 'EUROPE',
  'Romania' : 'EUROPE',
  'San Marino' : 'EUROPE',
  'Serbia' : 'EUROPE',
  'Slovakia' : 'EUROPE',
  'Slovenia' : 'EUROPE',
  'Spain' : 'EUROPE',
  'Sweden' : 'EUROPE',
  'Switzerland' : 'EUROPE',
  'Ukraine' : 'EUROPE',
  'United Kingdom' : 'EUROPE',
  'Vatican City' : 'EUROPE',

  /* N_AMERICA */
  'Antigua and Barbuda' : 'N_AMERICA',
  'Bahamas' : 'N_AMERICA',
  'Barbados' : 'N_AMERICA',
  'Belize' : 'N_AMERICA',
  'Canada' : 'N_AMERICA',
  'Costa Rica' : 'N_AMERICA',
  'Cuba' : 'N_AMERICA',
  'Dominica' : 'N_AMERICA',
  'Dominican Republic' : 'N_AMERICA',
  'El Salvador' : 'N_AMERICA',
  'Grenada' : 'N_AMERICA',
  'Guatemala' : 'N_AMERICA',
  'Haiti' : 'N_AMERICA',
  'Honduras' : 'N_AMERICA',
  'Jamaica' : 'N_AMERICA',
  'Mexico' : 'N_AMERICA',
  'Nicaragua' : 'N_AMERICA',
  'Panama' : 'N_AMERICA',
  'Saint Kitts and Nevis' : 'N_AMERICA',
  'Saint Lucia' : 'N_AMERICA',
  'Saint Vincent and the Grenadines' : 'N_AMERICA',
  'Trinidad and Tobago' : 'N_AMERICA',
  'United States' : 'N_AMERICA',

  /* AUSTRALIA */
  'Australia' : 'AUSTRALIA',
  'Fiji' : 'AUSTRALIA',
  'Kiribati' : 'AUSTRALIA',
  'Marshall Islands' : 'AUSTRALIA',
  'Micronesia' : 'AUSTRALIA',
  'Nauru' : 'AUSTRALIA',
  'New Zealand' : 'AUSTRALIA',
  'Palau' : 'AUSTRALIA',
  'Papua New Guinea' : 'AUSTRALIA',
  'Samoa' : 'AUSTRALIA',
  'Solomon Islands' : 'AUSTRALIA',
  'Tonga' : 'AUSTRALIA',
  'Tuvalu' : 'AUSTRALIA',
  'Vanuatu' : 'AUSTRALIA',

  /* S_AMERICA */
  'Argentina' : 'S_AMERICA',
  'Bolivia' : 'S_AMERICA',
  'Brazil' : 'S_AMERICA',
  'Chile' : 'S_AMERICA',
  'Colombia' : 'S_AMERICA',
  'Ecuador' : 'S_AMERICA',
  'Guyana' : 'S_AMERICA',
  'Paraguay' : 'S_AMERICA',
  'Peru' : 'S_AMERICA',
  'Suriname' : 'S_AMERICA',
  'Uruguay' : 'S_AMERICA',
  'Venezuela' : 'S_AMERICA'
};

var fs = require('fs');

var rd = require('readline').createInterface({
    input: fs.createReadStream('WDI_Data.csv')
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

var countries = new Array();

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

      //problem statement 1
      for(i in continents) {
        if(i === arr[posCountryName]) {
          if(countries.indexOf(arr[posCountryName]) < 0) {
            countries.push(arr[posCountryName]);
          }

          if(arr[posIndicatorName]==="GDP (constant 2005 US$)") {
            gdp.push(parseFloat(arr[pos2005]));
          } else if(arr[posIndicatorName]==="GNI (constant 2005 US$)") {
            gni.push(parseFloat(arr[pos2005]));
          } else if(arr[posIndicatorName]==="GDP per capita (constant 2005 US$)") {
            gdpPerCapita.push(parseFloat(arr[pos2005]));
          } else if(arr[posIndicatorName]==="GNI per capita (constant 2005 US$)") {
            gniPerCapita.push(parseFloat(arr[pos2005]));
          }

          break;
        }
      }

      //problem statement 2
      var json = {};
      if(arr[posCountryName] === "India" && arr[posIndicatorName] === "GDP growth (annual %)") {
        for(var i=4; i<arr.length; i++) {
          json[heading[i]] = parseFloat(arr[i]);
        }
        gdpIndia.push(json);
      }

      //problem statement 3
      if(arr[posIndicatorName] === "GDP per capita (constant 2005 US$)") {
        setContinentLists[continents[arr[posCountryName]]] = continentSum(setContinentLists[continents[arr[posCountryName]]], arr);
      }
    }
}).on('close', function() {

    //problem statement 1
    for(var i=0; i<gdp.length; i++) {
      for(var j=0; j<gdp.length-i-1; j++) {
        if(gdp[j]<gdp[j+1]) {
          var swap = gdp[j];
          gdp[j]=gdp[j+1];
          gdp[j+1]=swap;

          swap = gni[j];
          gni[j]=gni[j+1];
          gni[j+1]=swap;

          swap = gdpPerCapita[j];
          gdpPerCapita[j]=gdpPerCapita[j+1];
          gdpPerCapita[j+1]=swap;

          swap = gniPerCapita[j];
          gniPerCapita[j]=gniPerCapita[j+1];
          gniPerCapita[j+1]=swap;

          var ch = countries[j];
          countries[j]=countries[j+1];
          countries[j+1]=ch;
        }
      }
    }

    var jsonGdp =  {};
    var jsonGni = {};
    var jsonGdpPerCapita = {};
    var jsonGniPerCapita = {};
    for(var i=0; i<gdp.length && i<15; i++) {
      jsonGdp[countries[i]] = gdp[i];
      jsonGni[countries[i]] = gni[i];
      jsonGdpPerCapita[countries[i]] = gdpPerCapita[i];
      jsonGniPerCapita[countries[i]] = gniPerCapita[i];
    }
    gdpBarChart.push(jsonGdp);
    gdpBarChart.push(jsonGni);
    gdpBarChart.push(jsonGdpPerCapita);
    gdpBarChart.push(jsonGniPerCapita);

    write('json/gdpBarChart.json', gdpBarChart);

    //problem statement 2
    write('json/gdpIndia.json', gdpIndia);

    //problem statement 3
    for(i in setContinentLists)
      setHeaderForContinent(setContinentLists[i], i);
    write('json/gdpContinent.json', gdpContinent);
});

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
}

function setHeaderForContinent(continent, continentName) {

  if(continentName == 'undefined') {
    return;
  }
  
  var json = {};
  json["Continent Name"] = continentName;

  for(var i=4; i<continent.length; i++) {
    json[heading[i]] = continent[i];
  }
  gdpContinent.push(json);
}

function write(fileName, fromArray) {

  var fromArray1 = JSON.stringify(fromArray);
  fs.writeFile(fileName, fromArray1, function (err) {
    if (err) return console.log(err);
    console.log('Completed ' + fileName);
  });
}
