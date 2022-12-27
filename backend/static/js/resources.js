tables();

async function tables () {
    response = await make_request('GET', '/api/boards/');
    response = JSON.parse(response);
    // console.log(response);
    boards_table = document.getElementById("boards-table");

    for (let i = 0; i < response.length; i++){
        row = document.createElement('div');
        row.setAttribute('class', 'table-row');
        let cells = [
            document.createElement('label'),
            document.createElement('label'),
            document.createElement('img'),
        ];
        cells[0].innerHTML = response[i].name;
        cells[0].setAttribute('class', 'table-boards-name');
        cells[1].innerHTML = response[i].specs;
        cells[1].setAttribute('class', 'table-boards-specs');
        cells[2].src = response[i].image.slice(16);
        cells[2].setAttribute('class', 'table-img');
        row.appendChild(cells[0]);
        row.appendChild(cells[1]);
        row.appendChild(cells[2]);
        boards_table.appendChild(row);
      }

      
    response = await make_request('GET', '/api/sensors/');
    response = JSON.parse(response);
    // console.log(response);
    sensors_table = document.getElementById("sensors-table");

    for (let i = 0; i < response.length; i++){
        row = document.createElement('div');
        row.setAttribute('class', 'table-row');
        let cells = [
            document.createElement('label'),
            document.createElement('label'),
        ];
        cells[0].innerHTML = response[i].name;
        cells[0].setAttribute('class', 'log-wrapper');
        cells[1].innerHTML = response[i].magnitud;
        cells[1].setAttribute('class', 'log-wrapper');
        row.appendChild(cells[0]);
        row.appendChild(cells[1]);
        sensors_table.appendChild(row);
      }
}

function show_boards_form(){
    document.getElementById("boards-post-form").style.visibility = "visible";
}
function show_sensors_form(){
    document.getElementById("sensors-post-form").style.visibility = "visible";
}