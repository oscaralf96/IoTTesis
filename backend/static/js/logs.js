var device = window.location.pathname.split("/")[3];
var items = [], ul;

// creates list element
ul = document.createElement('ul')
ul.setAttribute('id', 'list' );

const chatSocket = new WebSocket(
    'ws://'
    + "localhost:8001" //window.location.host
    + '/ws/logs/'
    + device
    + '/'
);

chatSocket.onmessage = function(e) {
    const data = JSON.parse(e.data).data;
    console.log(data);

    items.push(data);

    if(!document.getElementById("list")) {
        // document.getElementById('logs-list-container').appendChild(ul);
        }

        updateLogsList();
};

// update list items
function updateLogsList() {

    // clear list
    logsList = document.getElementById('logs-list-container');
    logsList.innerHTML = "";
    
    items.forEach(function(item) {
    var logsWrapper = document.createElement('div');
    logsWrapper.setAttribute('class', 'log-wrapper');
    
    var divGauge = document.createElement('div');
    divGauge.setAttribute('class', 'log-item gauge');
    var gauge = document.createElement('label');
    gauge.innerHTML += item.board;
    divGauge.appendChild(gauge);
    logsWrapper.appendChild(divGauge);
        
    var divValue = document.createElement('div');
    divValue.setAttribute('class', 'log-item value');
    var value = document.createElement('label');
    value.innerHTML += item.value;
    divValue.appendChild(value);
    logsWrapper.appendChild(divValue);
        
    var divDatestamp = document.createElement('div');
    divDatestamp.setAttribute('class', 'log-item datestamp');
    var datestamp = document.createElement('label');
    datestamp.innerHTML += item.datestamp;
    divDatestamp.appendChild(datestamp);
    logsWrapper.appendChild(divDatestamp);
    
    logsList.appendChild(logsWrapper);
    });
}


chatSocket.onclose = function(e) {
    console.error('Socket closed unexpectedly');
};