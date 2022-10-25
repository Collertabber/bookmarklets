const axios = require('axios');

async function doGetRequest() {

    const res = await axios.get('http://webcode.me', {

        proxy: {
            host: 'localhost',
            port: 3000
        }
    });

    document.getElementById("demo").innerHTML = res.data;
}


doGetRequest();
