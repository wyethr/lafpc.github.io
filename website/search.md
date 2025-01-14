---
layout: default
title: Search
permalink: /search.html
---

<html>
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
</html>

<script>
  function getLength() {
    var length = window.store.length;
    document.getElementById("length").innerHTML = length;
  }
</script>

<body onload="getLength()"> </body>

<center> 
  <h2>About the Project</h2>

  This research directory was created in parternship with the Los Angeles Food Policy Council. Currently synthesizing <span id="length"></span> sources and datasets, it was made to help researchers and policymakers better understand food insecurity in the Los Angeles area.

  <p> </p>

  <i>Found some published research or data you think should be included? Help us improve our database by sending the link to {{ site.email }}.</i>

</center>

<p> </p>

<center>
  <form action="/lafpc/search.html" method="get">
    <!-- <label for="search-box">time</label> -->
    <input type="text" id="search-box" name="query">
    <input type="submit" value="Search">
  </form> 
</center>

<script>
	function filterSearchURL(values) {
		currentURL = ''.concat("/lafpc/search.html?query=",...values);
		window.location.href = currentURL;

		/* let i = 0;

		let currentURL = "search.html?query=";

		while (i < values.length) {
			currentURL = currentURL + values[i] + "+";
			i++;
		}

		window.location.href = currentURL; */ 
	}
</script>

<div class="row">
  <div class="column">
    <fieldset>
      <legend>Filter by format</legend>
      <div>
        <label class="form-control">
          <input type="checkbox" id="graph" name="format" value="graph" />
          Graph
        </label>
      </div>
      <div>
        <label class="form-control">
          <input type="checkbox" id="map" name="format" value="map" />
          Map
        </label>
      </div>
      <div>
        <label class="form-control">
          <input type="checkbox" id="study" name="format" value="study" />
          Report/Study
        </label>
      </div>
      <div>
        <label class="form-control">
          <input type="checkbox" id="table" name="format" value="table" />
          Table
        </label>
      </div>
      <!-- <div>
        <button class = "filterSearch" id="formatSearch" name="formatSearch"> Search</button>
      </div>
      <script>
        const formatCB = document.querySelector('#formatSearch');
        formatSearch.addEventListener("click", (event) => {
          let checkboxes = document.querySelectorAll("input[name='format']:checked");
          let values = [];
          checkboxes.forEach((checkbox) => {
            values.push(checkbox.value + "+");
          });

          filterSearchURL(values);
        })
      </script> -->
    </fieldset>
    <p> </p>
    <fieldset>
      <legend>Filter by location</legend>
      <div>
        <input type="checkbox" id="address" name="location" value="address" />
        <label for="address">Address</label>
      </div>
      <div>
        <input type="checkbox" id="censusTract" name="location" value="censusTract" />
        <label for="censusTract">Census Tract</label>
      </div>
      <div>
        <input type="checkbox" id="city" name="location" value="city" />
        <label for="city">City</label>
      </div>
      <div>
        <input type="checkbox" id="congressionalDistrict" name="location" value="congressionalDistrict" />
        <label for="congressionalDistrict">Congressional District</label>
      </div>
      <div>
        <input type="checkbox" id="councilDistrict" name="location" value="councilDistrict" />
        <label for="councilDistrict">Council District</label>
      </div>
      <div>
        <input type="checkbox" id="county" name="location" value="county" />
        <label for="county">County</label>
      </div>
      <div>
        <input type="checkbox" id="metro" name="location" value="metro" />
        <label for="metro">Metro</label>
      </div>
      <div>
        <input type="checkbox" id="neighborhood" name="location" value="neighborhood" />
        <label for="neighborhood">Neighborhood</label>
      </div>
      <div>
        <input type="checkbox" id="schoolDistrict" name="location" value="schoolDistrict" />
        <label for="schoolDistrict">School District</label>
      </div>
      <div>
        <input type="checkbox" id="servicePlanningArea" name="location" value="servicePlanningArea" />
        <label for="servicePlanningArea">Service Planning Area</label>
      </div>
      <div>
        <input type="checkbox" id="supervisorialDistrict" name="location" value="supervisorialDistrict" />
        <label for="supervisorialDistrict">Supervisorial District</label>
      </div>
      <div>
        <input type="checkbox" id="state" name="location" value="state" />
        <label for="state">State</label>
      </div>
      <div>
        <input type="checkbox" id="zip" name="location" value="zip" />
        <label for="zip">Zip Code</label>
      </div>
      <!-- <div>
        <button class = "filterSearch" id="locationSearch" name="locationSearch"> Search</button>
      </div>
      <script>
        const locationCB = document.querySelector('#locationSearch');
        locationSearch.addEventListener("click", (event) => {
          let checkboxes = document.querySelectorAll("input[name='location']:checked");
          let values = [];
          checkboxes.forEach((checkbox) => {
            values.push(checkbox.value + "+");
          });

          filterSearchURL(values);
        })
      </script> -->
    </fieldset>
    <p> </p>
    <div>
      <button class="filterSearch" id="filterSearch" name="filterSearch"> Filter Search Results</button>
    </div>
    <script>
      const filterSearchCB = document.querySelector("#filterSearch");
      filterSearch.addEventListener("click", (event) => {
        let locationCheckboxes = document.querySelectorAll("input[name='location']:checked");
        let formatCheckboxes = document.querySelectorAll("input[name='format']:checked");
        let dataPointsCheckboxes = document.querySelectorAll("input[name='dataPoints']:checked");

        let values = [];

        locationCheckboxes.forEach((checkbox) => {
          values.push(checkbox.value + "+");
        });
        formatCheckboxes.forEach((checkbox) => {
          values.push(checkbox.value + "+");
        });
        dataPointsCheckboxes.forEach((checkbox) => {
          values.push(checkbox.value + "+");
        });

        filterSearchURL(values);
      })
    </script>
  </div>
  <div class="column">
    <fieldset>
      <legend>Filter by data points</legend>
      <div>
        <input type="checkbox" id="age" name="dataPoints" value="age" />
        <label for="age">Age</label>
      </div>
      <div>
        <input type="checkbox" id="COVID" name="dataPoints" value="COVID" />
        <label for="COVID">COVID</label>
      </div>
      <div>
        <input type="checkbox" id="crime/arrests" name="dataPoints" value="crime/arrests" />
        <label for="crime/arrests">Crime/Arrests</label>
      </div>
      <div>
        <input type="checkbox" id="disability" name="dataPoints" value="disability" />
        <label for="disability">Disability Status</label>
      </div>
      <div>
        <input type="checkbox" id="drug" name="dataPoints" value="drug" />
        <label for="drug">Drug Usage</label>
      </div>
      <div>
        <input type="checkbox" id="education" name="dataPoints" value="education" />
        <label for="education">Education</label>
      </div>
      <div>
        <input type="checkbox" id="farmersMarkets" name="dataPoints" value="farmersMarkets" />
        <label for="farmersMarkets">Farmers' Markets</label>
      </div>
      <div>
        <input type="checkbox" id="foodAssistance" name="dataPoints" value="foodAssistance" />
        <label for="foodAssistance">Food Assistance</label>
      </div>
      <div>
        <input type="checkbox" id="foodInsecurity" name="dataPoints" value="foodInsecurity" />
        <label for="foodInsecurity">Food Insecurity and Access</label>
      </div>
      <div>
        <input type="checkbox" id="groceryStores" name="dataPoints" value="groceryStores" />
        <label for="groceryStores">Grocery Stores</label>
      </div>
      <div>
        <input type="checkbox" id="health" name="dataPoints" value="health" />
        <label for="health">Health Care</label>
      </div>
      <div>
        <input type="checkbox" id="housing" name="dataPoints" value="housing" />
        <label for="housing">Housing</label>
      </div>
      <div>
        <input type="checkbox" id="income/poverty" name="dataPoints" value="income/poverty" />
        <label for="income/poverty">Income/Poverty</label>
      </div>
      <div>
        <input type="checkbox" id="language" name="dataPoints" value="language" />
        <label for="language">Language</label>
      </div>
      <div>
        <input type="checkbox" id="maritalStatus" name="dataPoints" value="maritalStatus" />
        <label for="maritalStatus">Marital Status</label>
      </div>
      <div>
        <input type="checkbox" id="placeOfOrigin" name="dataPoints" value="placeOfOrigin" />
        <label for="placeOfOrigin">Immigrant Status/Place of Origin</label>
      </div>
      <div>
        <input type="checkbox" id="race/ethnicity" name="dataPoints" value="race/ethnicity" />
        <label for="race/ethnicity">Race/Ethnicity</label>
      </div>
      <div>
        <input type="checkbox" id="recommendations" name="dataPoints" value="recommendations" />
        <label for="recommendations">Policy Recommendations</label>
      </div>
      <div>
        <input type="checkbox" id="restaurants" name="dataPoints" value="restaurants" />
        <label for="restaurants">Restaurants</label>
      </div>
      <div>
        <input type="checkbox" id="sex" name="dataPoints" value="sex" />
        <label for="sex">Sex</label>
      </div>
      <div>
        <input type="checkbox" id="SNAP" name="dataPoints" value="SNAP" />
        <label for="SNAP">SNAP Data, Access, and Participation</label>
      </div>
      <div>
        <input type="checkbox" id="tech" name="dataPoints" value="tech" />
        <label for="tech">Technology/Internet Access</label>
      </div>
      <div>
        <input type="checkbox" id="transportation" name="dataPoints" value="transportation" />
        <label for="transportation">Transportation</label>
      </div>
      <div>
        <input type="checkbox" id="veteran" name="dataPoints" value="veteran" />
        <label for="veteran">Veteran Status</label>
      </div>
      <div>
        <input type="checkbox" id="WIC" name="dataPoints" value="WIC" />
        <label for="WIC">WIC Data, Access, and Particiaption</label>
      </div>
      <!-- <div>
        <button class = "filterSearch" id="dataPointsSearch" name="dataPointsSearch"> Search</button>
      </div>
      <script>
        const dataPointsCB = document.querySelector('#dataPointsSearch');
        dataPointsSearch.addEventListener("click", (event) => {
          let checkboxes = document.querySelectorAll("input[name='dataPoints']:checked");
          let values = [];
          checkboxes.forEach((checkbox) => {
            values.push(checkbox.value + "+");
          });

          filterSearchURL(values);
        })
      </script> -->
    </fieldset>
  </div>
</div>

<ul id="search-results"></ul>

<script src="oldSearch.js">
	/* window.store= {
		/* {% for post in site.posts %}
			"{{post.url | slugify}}": {
				"title": "{{ post.title | xml_escape}}",
				"author": "{{ post.author | xml_escape}}",
				"category": "{{ post.category | xml_escape }}",
				"content": {{ post.content | strip_html | strip_newlines | jsonify }},
				"url": "{{ post.url | xml_escape }}"
			}
			{% unless forloop.last %}, {% endunless %}
			{% endfor %} 
	}; */
</script>

<script src="js/lunr.min.js"></script>
<script src="js/search.js"></script>
