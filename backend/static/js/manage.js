function hide_manage() {
  document.getElementById("manage-pop").style.visibility = "hidden";
}

function hide_post_form() {
  document.getElementById("post-form").style.visibility = "hidden";
  document.getElementById("boards-picker").style.visibility = "hidden";
  document.getElementById("add-equipment-name").style.visibility = "hidden"; 
}

function hide_boards_post_form() {
  document.getElementById("boards-post-form").style.visibility = "hidden";
}

function hide_sensors_post_form() {
  document.getElementById("sensors-post-form").style.visibility = "hidden";
}


async function equipment_requests(method, endpoint, path, params) {
  let url = `http://${window.location.host}` + endpoint;
  let response;
  // let post_params = {};
  const post_params = new FormData()

  try {
    switch (method) {
      case 'DELETE':
        if (window.confirm("Do you really want to delete it?")) {
          url = endpoint +  `${path}/`;
          response = await make_request(method, url);
          document.getElementById("manage-wrapper").innerHTML = `${path} - ${params.name} deleted.`;
          setTimeout(() => {  window.location.reload(); }, 2000);
          break;
        }else {
          document.getElementById("manage-pop").style.visibility = "visible";
          break;
        }
      case 'GET':
        // console.log(params);
        if (path){
          url = endpoint +  `${path}/`;
        }else {
          url = endpoint;
        }
        response = await make_request(method, url);
        document.getElementById("manage-wrapper").innerHTML = response;
        document.getElementById("manage-pop").style.visibility = "visible";
        break;
      case 'POST':
        console.log(params);
        if (params.element === 'Equipment'){
          post_params.append('user', params.user);
          post_params.append('name', params.name);
          hide_post_form();
        }else if(params.element === 'Device'){
          // console.log('equipment post');
          post_params.append('equipment', params.equipment);
          post_params.append('board', params.board);
          hide_post_form();
        }else if(params.element === 'Gauge'){
          // console.log('equipment post');
          post_params.append('device', params.equipment);
          post_params.append('sensor', params.board);
          hide_post_form();
        }else if(params.element === 'Board'){
          post_params.append('name', params.name);
          post_params.append('specs', params.specs);
          post_params.append('image', document.querySelector('[name=board-image]').files.item(0));
          console.log(post_params.get('name'));
          console.log(post_params.get('specs'));
          console.log(post_params.get('image'));
          hide_boards_post_form();
        }else if(params.element === 'Sensor'){
          post_params = {
            name: params.name,
            magnitud: params.magnitud,
          }
        }
        url = endpoint;
        response = await make_request(method, url, post_params);
        document.getElementById("manage-wrapper").innerHTML = `${params.element}` + " added.";
        setTimeout(() => {  window.location.reload(); }, 2000);
        document.getElementById("manage-pop").style.visibility = "visible";
        break;
    }  
  }catch (err){
    document.getElementById("manage-pop").style.visibility = "visible";
    document.getElementById("manage-wrapper").innerHTML = err;
  }  
}

async function make_request (method, endpoint, params){
  let url = `http://${window.location.host}` + endpoint
  // console.log('-----------------request--------------');
  // console.log(url);
  console.log(endpoint);
  // console.log(params);
  // console.log('--------------------------------------');
  let http_request = new XMLHttpRequest();
  return new Promise(function(resolve, reject) {
    http_request.onload = () => {
      // console.log(http_request.readyState);
      if (http_request.readyState == 4 && http_request.status >= 200 && http_request.status < 300) {
            resolve(http_request.responseText);
      }else {
        reject("Error, status code = " + http_request.status);
    }
  }
    http_request.open(method, url, true);
    // http_request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    if (method === 'POST'){
      // http_request.send(JSON.stringify(params));
      http_request.send(params);
    }else{
      http_request.send();
    }
  });
}

async function post_form(element, endpoint, device){
  let url = `http://${window.location.host}` + endpoint
  let response;
  // console.log(device);
  document.getElementById("post-form").style.visibility = "visible";  
  document.getElementById("post-form-name").textContent = element;  
  document.getElementById("post-form-url").textContent = endpoint;      
  document.getElementById("post-form-equipment").textContent = device; 
  document.getElementById("add-equipment-name").style.visibility = "visible"; 
  if (element === 'Device') { 
    response = await make_request('GET', '/api/boards/');
    response = JSON.parse(response);
    populate_picker('boards-picker', response);
    document.getElementById("add-equipment-name").style.visibility = "hidden"; 
    
  }
  if (element === 'Gauge') { 
    response = await make_request('GET', '/api/sensors/');
    response = JSON.parse(response);
    populate_picker('boards-picker', response);
    document.getElementById("add-equipment-name").style.visibility = "hidden"; 
    
  }
}

function populate_picker(picker, elements){
  boards = document.getElementById(picker);
  boards.innerHTML = null;

  for (let i = 0; i < elements.length; i++){
    option = document.createElement('option');
    option.text = elements[i].name;
    option.value  = elements[i].id;
    boards.add(option);
  }
  boards.style.visibility = "visible";
}

function post_data(url, data){
  data = {
    element: data.element,
    name: document.getElementById('add-equipment-name').value, 
    user: data.user,
    equipment: document.getElementById('post-form-equipment').textContent,
    // board: document.getElementById('boards-picker').selectedOptions[0].value
  };
  if (data.element != 'Equipment'){
    data.board = document.getElementById('boards-picker').selectedOptions[0].value;
  }
  
  equipment_requests(
    'POST',
    url,
    null,
    data
  )
}