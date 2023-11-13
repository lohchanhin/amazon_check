// Assuming your data for option a and b are stored in variables called "dataA" and "dataB"
const dataA = {};  // your data for option A
const dataB = [];  // your data for option B

const tableBodyA = document.getElementById("tableA").querySelector("tbody");
const tableBodyB = document.getElementById("tableB").querySelector("tbody");

// Populate table for option A
dataA.items.forEach(item => {
    const row = document.createElement("tr");
    
    // Extracting relevant properties and adding them to the table
    ["keyword", "registration_number", "status_label", "filing_date", "description", "owners"].forEach(key => {
        const cell = document.createElement("td");
        if (key === "owners") {
            cell.textContent = item[key][0].name;  // Assuming we are displaying only the first owner's name
        } else {
            cell.textContent = item[key];
        }
        row.appendChild(cell);
    });
    
    // Append the row to the table for option A
    tableBodyA.appendChild(row);
});

// Populate table for option B
dataB.forEach(item => {
    const row = document.createElement("tr");
    
    // Extracting relevant properties and adding them to the table
    ["keyword", "available"].forEach(key => {
        const cell = document.createElement("td");
        cell.textContent = item[key];
        row.appendChild(cell);
    });
    
    // Append the row to the table for option B
    tableBodyB.appendChild(row);
});

