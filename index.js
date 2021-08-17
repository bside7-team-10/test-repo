const axios = require('axios');

const main = async () => {
    const resp = await axios.get('https://google.com');
    console.log(resp.data);
}


main();