const request = new XMLHttpRequest();
request.open("GET", "https://api.spacexdata.com/v5/launches/latest");
request.send();
request.onload = () => {
    if(request.status === 200) {
        console.log(JSON.parse(request.response));
    }
    else {
        console.log(`error ${request.status} ${request.statusText}`)
    }
}