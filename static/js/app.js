function buildTable(data){
	// Clear out the table by building it as empty string.
	tbody.html("");

	// Loop through each object in the data and appened a row and cells for each value
	data.forEach((dataRow) => {

		// appened a row to the table body
		let row = tbody.append("tr");

		// Loop through each field in the dataRow and add each value as a table cell (td)
		Object.values(dataRow).forEach((val) => {
			let cell = row.append("td");
			cell.text(val);
		});
	});
}