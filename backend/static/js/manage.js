function hide_manage() {
  document.getElementById("manage-pop").style.visibility = "hidden";
}


async function equipment_requests(method, endpoint, path, params) {
  let url = "";

  switch (method) {
    case 'DELETE':
      url = endpoint +  `${path}/`; break;
    case 'GET':
      console.log(path);
      if (path){
        url = endpoint +  `${path}/`;
      }else {
        url = endpoint;
      }
      if (params.name){
        console.log(params.name);
      }else{
        console.log("no params");
      }
      break;
    case 'POST':
      url = endpoint;
      console.log(params)
  }

  console.log(url);
  
  try {
    let response = await make_request(method, url);
    // console.log(response);
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
    if (params){
      console.log(params)
      http_request.send(params);
    }else{
      http_request.send();
    }
  });
}