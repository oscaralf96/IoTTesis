var device = window.location.pathname.split("/")[3];
var items = [], ul;

// creates list element
ul = document.createElement('ul')
ul.setAttribute('id', 'list' );

const chatSocket = new WebSocket(
    'ws://'
    + window.location.host
    + '/ws/logs/'
    + device
    + '/'
);

chatSocket.onmessage = function(e) {
    const data = JSON.parse(e.data).data;
    console.log(data);

    items.push(data);

    if(!document.getElementById("list")) {
        document.getElementById('logs-list-container').appendChild(ul);
        }

        updateLogsList();
};

// update list items
function updateLogsList() {

    // clear list
    ul.innerHTML = "";
    
    items.forEach(function(item) {
    
    // build list item text
    var itemText = document.createElement('span');
        itemText.setAttribute('class', 'to-do-list__list-item-text');
        itemText.innerHTML += item.value;
    
    // build list item
    var li = document.createElement('li');
        li.setAttribute('class', 'to-do-list__list-item');
        li.appendChild(itemText);

    // add list item to list
    ul.appendChild(li);
    });
}


chatSocket.onclose = function(e) {
    console.error('Chat socket closed unexpectedly');
};