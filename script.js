let ip=document.querySelector('#ip-address');
fetch('https://api.ipify.org/?format=json')
    .then(response => {
        return response.json();
    })
    .then(json => {
        ip.value = json.ip;
    })    
    .catch(err => {
        ip.value = 'Unable to fetch IP';
    });
