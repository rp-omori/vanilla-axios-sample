const axios = require("axios");

const BASE_URL = 'https://hogehoge~~~~~~';

const init = async () => {
    const getAPIData = await axios
        .get(`${BASE_URL}/v1/coordinate`)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}
init();