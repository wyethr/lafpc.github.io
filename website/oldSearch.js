window.store = [
	 {
		"name": "US Census QuickFacts",
		"locations": [
			"state", 
			"county", 
			"city", 
			"zip code"
		] ,
		"url": "https://www.census.gov/quickfacts/fact/table/losangelescitycalifornia/RHI125221",
		"format": [
			"table",
			"chart",
			"map",
			"dashboard"
		],
		"dataPoints": [
			"race/ethnicity",
			"sex",
			"age",
			"place of origin",
			"education",
			"income/poverty",
			"health"
		]
	}
	,
	{
		"name": "American Community Survey (ACS)",
		"locations": [
			"state",
			"county",
			"census tract",
			"zip code"
		],
		"url": "https://www.census.gov/acs/www/data/data-tables-and-tools/data-profiles/2020/",
		"format": [
			"table",
			"map"
		],
		"dataPoints": [
			"education",
			"income/poverty",
			"health"
		]
	}
	,
	{
		"name": "CalFresh Data Dashboard",
		"locations": [
			"state",
			"county"
		],
		"url": "https://www.cdss.ca.gov/inforesources/data-portal/research-and-data/calfresh-data-dashboard",
		"format": "graph",
		"dataPoints": [
			"CalFresh User",
			"CalFresh Data"
		],
	}
	,
	{
		"name": "CalFresh Data Tables",
		"locations": "all",
		"url": "https://www.cdss.ca.gov/inforesources/research-and-data/calfresh-data-tables",
		"format": "table",
		"dataPoints": [
			"race/ethnicity",
			"food insecurity"
		],
	}
	,
	{
		"name": "California Department of Food and Agriculture Certified Farmers Markets",
		"locations": "county",
		"url": "https://www.cdfa.ca.gov/is/docs/CurrentMrktsCounty.pdf",
		"format": "table",
		"dataPoints": [
			"race/ethnicity"
		],
	}
	,
	{
		"name": "Food Assistance Providers",
		"locations": "county",
		"url": "https://uscssi.maps.arcgis.com/apps/mapviewer/index.html?webmap=aa9c22761b94450180b916140cbd0f12",
		"format": "map",
		"dataPoints": [
			"farmers' markets",
			"income/poverty"
		],
	}
	,
	{
		"name": "USDA Food Atlas",
		"locations": [
			"state",
			"county"
		],
		"url": "https://www.ers.usda.gov/data-products/food-environment-atlas/go-to-the-atlas/",
		"format":"map",
		"dataPoints": [
			"income/poverty",
			"grocery stores",
			"restaurants",
			"farmers' markets",
			"food insecurity",
			"health"
		],
	}
	,
	{
		"name": "Food Finder Map",
		"locations": [
			"county",
			"city",
			"neighborhood",
			"address"
		],
		"url": "https://foodfinder.211la.org/-118.600153,33.825157,-117.868762,34.228188/project?layers=,34,20,18",
		"format":"map",
		"dataPoints": [
			"age",
			"farmers' markets",
			"grocery stores",
			"food insecurity",
			"food assistance"
		],
	}
	,
	{
		"name": "Los Angeles Grocery Store Locations",
		"locations": "city",
		"url": "https://data.lacity.org/Administration-Finance/Grocery-Stores/g986-7yf9",
		"format":"table",
		"dataPoints": [
			"grocery stores",
			"restaurants"
		],
	}
	,
	{
		"name": "Los Angeles Food Resources",
		"locations": "city",
		"url": "https://controllerdata.lacity.org/dataset/Food-Resources-in-California/v2mg-qsxf",
		"format":"table",
		"dataPoints": [
			"food assistance"
		],
	}
	,
	{
		"name": "Equity Explorer Map",
		"locations": [
			"county",
			"city",
			"supervisorial district",
			"neighborhood",
			"address"
		],
		"url": "https://experience.arcgis.com/experience/9d7a43397ea84ab98a534be5b5376fba/page/Home/?data_id=dataSource_1-HOLC_Neighborhood_Redlining_443%3A385&views=Thematic-Filters",
		"format":"map",
		"dataPoints": [
			"place of origin",
			"poverty/income",
			"education",
			"health"
		],
	}
	,
	{
		"name": "APRA Projects Map",
		"locations": [
			"county",
			"supervisorial district"
		],
		"url": "https://appcenter.gis.lacounty.gov/arpa-projects-map/",
		"format":"map",
		"dataPoints": [
			"food assistance",
			"income/poverty",
			"age",
			"grocery stores"
		],
	}
	,
	{
		"name": "Census Reporter",
		"locations": [
			"state",
			"county",
			"city",
			"congressional district",
			"census tract",
			"address"
		],
		"url": "https://censusreporter.org/profiles/16000US0644000-los-angeles-ca/",
		"format": [
			"map",
			"chart",
			"graph"
		],
		"dataPoints": [
			"race/ethnicity",
			"sex",
			"age"
		],
	}
	,
	{
		"name": "Neighborhood Data for Social Change",
		"locations": [
			"city",
			"census tract",
			"neighborhood"
		],
		"url": "https://map.myneighborhooddata.org/",
		"format":"map",
		"dataPoints": [
			"education",
			"income/poverty",
			"food insecurity",
			"health"
		],
	}
	,
	{
		"name": "USC Food Outlets",
		"locations": [
			"county",
			"census tract"
		],
		"url": "https://uscssi.maps.arcgis.com/apps/mapviewer/index.html?webmap=43a90661b5e04391a5a2e65eb3564a36",
		"format":"map",
		"dataPoints": [
			"food assistance"
		],
	}
	,
	{
		"name": "USC Food Desert and Assistance",
		"locations": [
			"census tract",
			"service planning area"
		],
		"url": "https://uscssi.maps.arcgis.com/apps/mapviewer/index.html?webmap=9cac401f6997440fb7af3fa771dfca28",
		"format":"map",
		"dataPoints": [
			"food deserts",
			"food assistance"
		],
	}
];