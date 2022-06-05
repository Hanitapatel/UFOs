// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);
    let elementValue = changedElement.property("value");
    console.log(elementValue);

    let filterId = changedElement.attr("id");
    console.log(filterId);

    if (elementValue) {
      filters[filterId] = elementValue;
    }
    else {
      delete filters[filterId];
    }

    // another way to do this
    // let date = d3.select("#datetime").property("value");
    // let city = d3.select("#city").property("value");
    // let state = d3.select("#state").property("value");
    // let country = d3.select("#country").property("value");
    // let shape = d3.select("#shape").property("value");

    // 4b. Save the value that was changed as a variable.
    // let filteredData = tableData;

    // 4c. Save the id of the filter that was changed as a variable.
    // if (date) {filteredData = filteredData.filter(row => row.datetime === date);
    // };

    // if (city) {filteredData = filteredData.filter(row => row.city === city);
    // };

    // if (state) {filteredData = filteredData.filter(row => row.state === state);
    // };

    // if (country) {filteredData = filteredData.filter(row => row.country === country);
    // };

    // if (shape) {filteredData = filteredData.filter(row => row.shape === shape);
    // };
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
 
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
        // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
    console.log(filteredData)

    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    console.log("********")
    for(const eachFilter in filters){
      console.log("eachFilter - " + eachFilter)
      console.log("filters[eachFilter] - " + filters[eachFilter])
      if (eachFilter=="datetime"){
        filteredData = filteredData.filter(row => row.datetime === filters[eachFilter]);
      }
      if (eachFilter=="city"){
        filteredData = filteredData.filter(row => row.city === filters[eachFilter]);
      }
      if (eachFilter=="state"){
        filteredData = filteredData.filter(row => row.state === filters[eachFilter]);
      }
      if (eachFilter=="country"){
        filteredData = filteredData.filter(row => row.country === filters[eachFilter]);
      }
      if (eachFilter=="shape"){
        filteredData = filteredData.filter(row => row.shape === filters[eachFilter]);
      }


      console.log(filteredData)

    }
//  console.log(filteredData)
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);

  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);

  // d3.selectAll("#datetime").on("change", updateFilters);
  // d3.selectAll("#city").on("change", updateFilters);
  // d3.selectAll("#state").on("change", updateFilters);
  // d3.selectAll("#country").on("change", updateFilters);
  // d3.selectAll("#shape").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
