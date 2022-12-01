function hide_manage() {
  document.getElementById("manage-pop").style.visibility = "hidden";
}

function hide_post_form() {
  document.getElementById("post-form").style.visibility = "hidden";
  document.getElementById("boards-picker").style.visibility = "hidden";
  document.getElementById("add-equipment-name").style.visibility = "hidden"; 
}


async function equipment_requests(method, endpoint, path, params) {
  let url = "";
  let response;
  let post_params = {};

  try {
    switch (method) {
      case 'DELETE':
        url = endpoint +  `${path}/`;
        response = await make_request(method, url);
        document.getElementById("manage-wrapper").innerHTML = `${path} - ${params.name} deleted.`;
        break;
      case 'GET':
        // console.log(params);
        if (path){
          url = endpoint +  `${path}/`;
        }else {
          url = endpoint;
        }
        response = await make_request(method, url);
        document.getElementById("manage-wrapper").innerHTML = response;
        break;
      case 'POST':
        // console.log(params);
        if (params.element === 'Equipment'){
          post_params = {
            user: params.user,
            name: params.name
          }
        }else if(params.element === 'Device'){
          console.log('equipment post');
          post_params = {
            equipment: params.equipment,
            board: params.board
          }
        }else if(params.element === 'Gauge'){
          console.log('equipment post');
          post_params = {
            device: params.equipment,
            sensor: params.board
          }
        }
        console.log(post_params);
        url = endpoint;
        document.getElementById("post-form").style.visibility = "hidden"; 
        document.getElementById("boards-picker").style.visibility = "hidden"; 
        response = await make_request(method, url, post_params);
        document.getElementById("manage-wrapper").innerHTML = `${params.element}` + " added.";
    }
  
    document.getElementById("manage-pop").style.visibility = "visible";
  }catch (err){
    document.getElementById("manage-wrapper").innerHTML = err;
  }  
}

async function make_request (method, url, params){
  console.log('-----------------request--------------');
  console.log(url);
  console.log(params);
  console.log('--------------------------------------');
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
    http_request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    if (method === 'POST'){
      http_request.send(JSON.stringify(params));
    }else{
      http_request.send();
    }
  });
}

async function post_form(element, url, device){
  let response;
  // console.log(device);
  document.getElementById("post-form").style.visibility = "visible";  
  document.getElementById("post-form-name").textContent = element;  
  document.getElementById("post-form-url").textContent = url;      
  document.getElementById("post-form-equipment").textContent = device; 
  document.getElementById("add-equipment-name").style.visibility = "visible"; 
  if (element === 'Device') { 
    response = await make_request('GET', 'http://localhost:8020/api/boards/');
    response = JSON.parse(response);

    boards = document.getElementById("boards-picker");

    for (let i = 0; i < response.length; i++){
      option = document.createElement('option');
      option.text = response[i].name;
      option.value  = response[i].id;
      boards.add(option);
    }
    boards.style.visibility = "visible";
    document.getElementById("add-equipment-name").style.visibility = "hidden"; 
    
  }
  if (element === 'Gauge') { 
    response = await make_request('GET', 'http://localhost:8020/api/sensors/');
    response = JSON.parse(response);

    boards = document.getElementById("boards-picker");

    for (let i = 0; i < response.length; i++){
      option = document.createElement('option');
      option.text = response[i].name;
      option.value  = response[i].id;
      boards.add(option);
    }
    boards.style.visibility = "visible";
    document.getElementById("add-equipment-name").style.visibility = "hidden"; 
    
  }
}