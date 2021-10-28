$(document).ready(function () {
  var myData = [
    {
        "id": "birdsong-brewing-co-charlotte",
        "name": "Birdsong Brewing Co.",
        "brewery_type": "micro",
        "street": "1016 N Davidson St",
        "address_2": null,
        "address_3": null,
        "city": "Charlotte",
        "state": "North Carolina",
        "county_province": null,
        "postal_code": "28206-3371",
        "country": "United States",
        "longitude": "-80.82704272",
        "latitude": "35.23060753",
        "phone": "7043321810",
        "website_url": "http://www.birdsongbrewing.com",
        "updated_at": "2018-08-24T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "blue-blaze-brewing-charlotte",
        "name": "Blue Blaze Brewing",
        "brewery_type": "micro",
        "street": "528 S Turner Ave",
        "address_2": null,
        "address_3": null,
        "city": "Charlotte",
        "state": "North Carolina",
        "county_province": null,
        "postal_code": "28208-4259",
        "country": "United States",
        "longitude": "-80.86710843",
        "latitude": "35.24138809",
        "phone": "9808592586",
        "website_url": "http://www.blueblazebrewing.com",
        "updated_at": "2018-08-24T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "bold-missy-brewery-charlotte",
        "name": "Bold Missy Brewery",
        "brewery_type": "brewpub",
        "street": "610 Anderson St",
        "address_2": null,
        "address_3": null,
        "city": "Charlotte",
        "state": "North Carolina",
        "county_province": null,
        "postal_code": "28205-1208",
        "country": "United States",
        "longitude": "-80.796429",
        "latitude": "35.24960852",
        "phone": "9802994184",
        "website_url": "http://www.boldmissybrewery.com",
        "updated_at": "2018-08-24T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "brewers-charlotte",
        "name": "Brewers",
        "brewery_type": "planning",
        "street": null,
        "address_2": null,
        "address_3": null,
        "city": "Charlotte",
        "state": "North Carolina",
        "county_province": null,
        "postal_code": "28217",
        "country": "United States",
        "longitude": null,
        "latitude": null,
        "phone": null,
        "website_url": null,
        "updated_at": "2018-08-11T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "catawba-brewing-co-charlotte-charlotte",
        "name": "Catawba Brewing Co - Charlotte",
        "brewery_type": "micro",
        "street": "933 Louise Ave Ste 105",
        "address_2": null,
        "address_3": null,
        "city": "Charlotte",
        "state": "North Carolina",
        "county_province": null,
        "postal_code": "28204-2299",
        "country": "United States",
        "longitude": null,
        "latitude": null,
        "phone": "9804986145",
        "website_url": null,
        "updated_at": "2018-08-11T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "champion-brewing-company-charlottesville",
        "name": "Champion Brewing Company",
        "brewery_type": "micro",
        "street": "324 6th St SE",
        "address_2": null,
        "address_3": null,
        "city": "Charlottesville",
        "state": "Virginia",
        "county_province": null,
        "postal_code": "22902-5655",
        "country": "United States",
        "longitude": "-78.4784691",
        "latitude": "38.0277402",
        "phone": "4342952739",
        "website_url": "http://www.championbrewingcompany.com",
        "updated_at": "2018-07-24T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "divine-barrel-brewing-charlotte",
        "name": "Divine Barrel Brewing",
        "brewery_type": "micro",
        "street": "3701 N Davidson St Ste 203",
        "address_2": null,
        "address_3": null,
        "city": "Charlotte",
        "state": "North Carolina",
        "county_province": null,
        "postal_code": "28205-1303",
        "country": "United States",
        "longitude": null,
        "latitude": null,
        "phone": "9802371803",
        "website_url": "http://www.divinebarrel.com",
        "updated_at": "2018-08-11T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "eaton-pub-grille-brewery-charlotte-brewing-co-charlotte",
        "name": "Eaton Pub & Grille Brewery / Charlotte Brewing Co",
        "brewery_type": "brewpub",
        "street": "214 S Cochran Ave",
        "address_2": null,
        "address_3": null,
        "city": "Charlotte",
        "state": "Michigan",
        "county_province": null,
        "postal_code": "48813-1551",
        "country": "United States",
        "longitude": "-84.83579",
        "latitude": "42.549391",
        "phone": "5175438882",
        "website_url": "http://www.eatonpub.com",
        "updated_at": "2018-08-24T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "free-range-brewing-charlotte",
        "name": "Free Range Brewing",
        "brewery_type": "micro",
        "street": "2320 N Davidson St Unit D",
        "address_2": null,
        "address_3": null,
        "city": "Charlotte",
        "state": "North Carolina",
        "county_province": null,
        "postal_code": "28205-1832",
        "country": "United States",
        "longitude": null,
        "latitude": null,
        "phone": "9802019096",
        "website_url": "http://www.freerangebrewing.com",
        "updated_at": "2018-08-11T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "hardywood-park-craft-brewery-charlottesville-charlottesville",
        "name": "Hardywood Park Craft Brewery-Charlottesville",
        "brewery_type": "micro",
        "street": "1000 W Main St",
        "address_2": null,
        "address_3": null,
        "city": "Charlottesville",
        "state": "Virginia",
        "county_province": null,
        "postal_code": "22903-3277",
        "country": "United States",
        "longitude": "-78.49505511",
        "latitude": "38.03257623",
        "phone": "4342343386",
        "website_url": null,
        "updated_at": "2018-07-24T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "heist-brewery-charlotte",
        "name": "Heist Brewery",
        "brewery_type": "brewpub",
        "street": "2909 N Davidson St",
        "address_2": null,
        "address_3": null,
        "city": "Charlotte",
        "state": "North Carolina",
        "county_province": null,
        "postal_code": "28205-1190",
        "country": "United States",
        "longitude": "-80.80904551",
        "latitude": "35.2451928",
        "phone": "7043758260",
        "website_url": "http://www.heistbrewery.com",
        "updated_at": "2018-08-24T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "hyde-brewing-charlotte",
        "name": "Hyde Brewing",
        "brewery_type": "brewpub",
        "street": "2911 Griffith St",
        "address_2": null,
        "address_3": null,
        "city": "Charlotte",
        "state": "North Carolina",
        "county_province": null,
        "postal_code": "28203-5429",
        "country": "United States",
        "longitude": "-80.86910602",
        "latitude": "35.20083417",
        "phone": "7046095363",
        "website_url": "http://hydebrewing.com/",
        "updated_at": "2018-08-24T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "kind-beer-distributing-charlotte",
        "name": "Kind Beer Distributing",
        "brewery_type": "contract",
        "street": "6014 McDaniel Ln Ste C",
        "address_2": null,
        "address_3": null,
        "city": "Charlotte",
        "state": "North Carolina",
        "county_province": null,
        "postal_code": "28213-7351",
        "country": "United States",
        "longitude": null,
        "latitude": null,
        "phone": "9105154140",
        "website_url": "http://www.kindbeers.com",
        "updated_at": "2018-08-11T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "legion-brewing-company-charlotte",
        "name": "Legion Brewing Company",
        "brewery_type": "brewpub",
        "street": "1906 Commonwealth Ave",
        "address_2": null,
        "address_3": null,
        "city": "Charlotte",
        "state": "North Carolina",
        "county_province": null,
        "postal_code": "28205-5020",
        "country": "United States",
        "longitude": "-80.81322316",
        "latitude": "35.21870073",
        "phone": "8444675683",
        "website_url": "http://www.legionbrewing.com",
        "updated_at": "2018-08-24T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "lenny-boy-brewing-co-charlotte",
        "name": "Lenny Boy Brewing Co",
        "brewery_type": "micro",
        "street": "3000 S Tryon St",
        "address_2": null,
        "address_3": null,
        "city": "Charlotte",
        "state": "North Carolina",
        "county_province": null,
        "postal_code": "28217-1342",
        "country": "United States",
        "longitude": "-80.87362412",
        "latitude": "35.20146285",
        "phone": "9805851728",
        "website_url": "http://www.discoverlennyboy.com",
        "updated_at": "2018-08-24T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "new-realm-brewing-charlotte",
        "name": "New Realm Brewing",
        "brewery_type": "planning",
        "street": null,
        "address_2": null,
        "address_3": null,
        "city": "Charlotte",
        "state": "North Carolina",
        "county_province": null,
        "postal_code": "28203",
        "country": "United States",
        "longitude": null,
        "latitude": null,
        "phone": null,
        "website_url": null,
        "updated_at": "2018-08-11T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "noda-brewing-co-ne-charlotte",
        "name": "NoDa Brewing Co - NE",
        "brewery_type": "regional",
        "street": "2921 N Tryon St",
        "address_2": null,
        "address_3": null,
        "city": "Charlotte",
        "state": "North Carolina",
        "county_province": null,
        "postal_code": "28206-2762",
        "country": "United States",
        "longitude": "-80.7190968",
        "latitude": "35.3342735",
        "phone": "7044511394",
        "website_url": "http://www.nodabrewing.com",
        "updated_at": "2018-08-24T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "noda-brewing-co-og-charlotte",
        "name": "NoDa Brewing Co - OG",
        "brewery_type": "micro",
        "street": "2229 N Davidson St",
        "address_2": null,
        "address_3": null,
        "city": "Charlotte",
        "state": "North Carolina",
        "county_province": null,
        "postal_code": "28205-1829",
        "country": "United States",
        "longitude": "-80.81513271",
        "latitude": "35.23971743",
        "phone": "7044511394",
        "website_url": null,
        "updated_at": "2018-08-24T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "pilot-brewing-charlotte",
        "name": "Pilot Brewing",
        "brewery_type": "planning",
        "street": null,
        "address_2": null,
        "address_3": null,
        "city": "Charlotte",
        "state": "North Carolina",
        "county_province": null,
        "postal_code": "28205",
        "country": "United States",
        "longitude": null,
        "latitude": null,
        "phone": null,
        "website_url": null,
        "updated_at": "2018-08-11T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    },
    {
        "id": "random-row-brewing-co-charlottesville",
        "name": "Random Row Brewing Co.",
        "brewery_type": "micro",
        "street": "608 Preston Ave",
        "address_2": null,
        "address_3": null,
        "city": "Charlottesville",
        "state": "Virginia",
        "county_province": null,
        "postal_code": "22903-4566",
        "country": "United States",
        "longitude": "-78.48712033",
        "latitude": "38.03470505",
        "phone": "4342848466",
        "website_url": "http://www.randomrow.com",
        "updated_at": "2018-07-24T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
    }
];

  function CreateTableFromJSON() {
    var col = [];
  
    for (var i = 0; i < myData.length; i++) {
      for (var key in myData[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }
  
    var table = document.createElement("table");
    table.setAttribute("border", "1");
    var tr = table.insertRow(-1);
  
    for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th");      
      th.innerHTML = col[i];
      tr.appendChild(th);
    }

    for (var i = 0; i < myData.length; i++) {
      tr = table.insertRow(-1);
      for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = myData[i][col[j]];
      }
    }

    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
  }

  CreateTableFromJSON()
});