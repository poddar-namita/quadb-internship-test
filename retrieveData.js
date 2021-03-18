async function updateTable(root) {
    const table = root.querySelector(".main-table");
    const response = await fetch(root.dataset.url);
    const data = await response.json();
    var array = [];
    for (var i in data) {
        array.push([i, data[i]]);
    }

    //clear table
    table.querySelector("tbody").innerHTML = "";

    //iterate through the object
    for (var i = 0; i < 10; i++) {
        table.querySelector("tbody").insertAdjacentHTML(
            "beforeend",
            `<tr>
                    <td>${i + 1}</td>
                    <td>${array[i][1].name}</td>
                    <td>&#8377; ${array[i][1].last}</td>
                    <td>&#8377; ${array[i][1].buy} / &#8377; ${
                array[i][1].sell
            }</td>
                    <td>${array[i][1].volume}</td>
                    <td>${array[i][1].base_unit}</td>
                    </tr>`
        );
    }
}

for (const root of document.querySelectorAll(".dynamic-table[data-url]")) {
    const table = document.createElement("table");
    table.classList.add("main-table");
    table.innerHTML = `
            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>Last</th>
                    <th>Buy / Sell Price</th>
                    <th>volume</th>
                    <th>base_unit</th>
                </tr>
            </thead>
            <tbody>
                <tr> 
                    <td> 
                        hello World 
                    <td> 
                </tr>
            </tbody>`;
    root.append(table);
    updateTable(root);
}
