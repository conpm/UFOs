# UFOs
## Overview of Project
The purpose of this analysis was to create an easy to use tool which is able to search through UFO sighting data in order to filter the data by specific criteria.  The criteria which were used as filters were date, city, state, country, and ufo shape.  After the javascript webapp was created which could perform the analysis, the tool was then added to Github Pages so that the tool can be easily utilized by the end user without the need for them to search through or understand the code within the repository.
## Results
First a table was created with input fields for the user to fill with their desired filters.
![filters](https://github.com/conpm/UFOs/blob/main/resources/filters.PNG)

These filters function to filter the data by each criteria.
- Date

![date](https://github.com/conpm/UFOs/blob/main/resources/date.PNG)
- City

![city](https://github.com/conpm/UFOs/blob/main/resources/city.PNG)
- State

![state](https://github.com/conpm/UFOs/blob/main/resources/state.PNG)
- Country

![country](https://github.com/conpm/UFOs/blob/main/resources/country.PNG)
- UFO Shape

![shape](https://github.com/conpm/UFOs/blob/main/resources/shape.PNG)
- Additionally the filters can be used together to further filter the data

![multiple_criteria](https://github.com/conpm/UFOs/blob/main/resources/multiple_criteria.PNG)

When someone visits the webpage the table will be unfiltered, and within each filter field there will be example text to show the user the format to enter the information in.  The table will then be filtered as they input different criteria into the fields.  Therefore, This tool should be very user friendly as it is clearly labeled, and the table will be automatically filtered each time a new filter criteria is input into the fields.

## Summary
Overall, this webapp seems to be functional and useful to end users.  One drawback of the design that might limit its capability is that there is currently no filters for UFO duration or for comments.  I think that adding a filter for these criteria would be useful for the tool, however due to the nonuniform nature of the data in those categories it could be difficult, and the data would therefore need to be cleaned in order for it to be easily filtered along those datapoints.  Another addition which I think could make this analysis tool more useful would be the ability to filter the data within a range of dates, rather than just on one specific date.  This could allow comparison betweenm sightings which happened around the same time, but not neccesarily on the same exact day.
