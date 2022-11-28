
function manage(id){
    document.getElementById("manage-pop").style.visibility = "visible";
    // alert(id)
    http_request = new XMLHttpRequest();
    http_request.overrideMimeType('text/xml');
  
    const endpoint = 'http://localhost:8020/manage/equipment/' + `${id}/`;
  
    console.log(endpoint);
  
    http_request.onreadystatechange = () => {
  
      if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            // console.log(http_request.responseText)
            document.getElementById("manage-wrapper").innerHTML = http_request.responseText;
        } else {
          console.log('Hubo problemas con la petición.');
        }
      }
    };
    http_request.open('GET', endpoint, true);
    http_request.send();
}

function hide_manage() {
    document.getElementById("manage-pop").style.visibility = "hidden";
}

function request(method, id) {
    const endpoint = 'http://localhost:8020/api/gauges/' + `${id}/`;

    http_request = new XMLHttpRequest();

    console.log(endpoint);
  
    http_request.onreadystatechange = () => {
  
      if (http_request.readyState == 4) {
        // console.log(http_request.status)
        if (http_request.status == 204) {
            console.log(http_request.responseText)
            document.getElementById("manage-wrapper").innerHTML = "<br>Succesfully deleted<br>";
        } else {
          console.log('Hubo problemas con la petición.');
        }
      }
    };
    http_request.open(method, endpoint, true);
    http_request.send();
}