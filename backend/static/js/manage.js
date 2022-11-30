function hide_manage() {
  document.getElementById("manage-pop").style.visibility = "hidden";
}


async function equipment_requests(method, endpoint, path, params) {
  let url = "";

  switch (method) {
    case 'DELETE':
      url = endpoint +  `${path}/`; break;
    case 'GET':
      // console.log(path);
      if (path){
        url = endpoint +  `${path}/`;
      }else {
        url = endpoint;
      }
      if (params.name){
        // console.log(params.name);
      }else{
        console.log("no params");
      }
      break;
    case 'POST':
      url = endpoint;
  }

  console.log(url);
  let response;
  try {
    if (method === 'POST'){
      response = await make_request(method, url, params);
    }else{
      response = await make_request(method, url);
    }
    document.getElementById("manage-wrapper").innerHTML = response;
    document.getElementById("manage-pop").style.visibility = "visible";
  }catch (err){
    console.log(err)
  }  
}

async function make_request (method, url, params){
  let http_request = new XMLHttpRequest();
  return new Promise(function(resolve, reject) {
    http_request.onload = () => {
      if (http_request.readyState == 4) {
        if (http_request.status >= 200 && http_request.status < 300) {
            resolve(http_request.responseText);
          } 
      }else {
        reject("Error, status code = " + http_request.status)
    }
  }
    http_request.open(method, url, true);
    http_request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    if (method === 'POST'){
      console.log(JSON.stringify(params))
      http_request.send(JSON.stringify(params));
    }else{
      http_request.send();
    }
  });
}