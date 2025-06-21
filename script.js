let ipInput = document.querySelector('#ip-address');
let copyBtn = document.querySelector('#copy-ip');
let locationField = document.querySelector('#location');

fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(json => {
        ipInput.value = json.ip;
        copyBtn.disabled = false;
    })
    .catch(() => {
        ipInput.value = 'Unable to fetch IP';
    });

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(ipInput.value).catch(() => {
        /* ignore copy errors */
    });
});

fetch('https://ipapi.co/json')
    .then(response => response.json())
    .then(data => {
        locationField.textContent = `${data.city}, ${data.country_name}`;
    })
    .catch(() => {
        locationField.textContent = 'Unable to fetch location';
    });
