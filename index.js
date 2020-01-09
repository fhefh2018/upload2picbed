const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');
const UserAgent = require('user-agents');
const objectAssign = require('object-assign');
/**
 * @param {string} url upload url
 * @param {object} formData upload form data
 * @param {object} header the request header(Accept, Accept-Encoding, Cookie, User-Agent and so on)
 * @returns {object} result the response result
 */
function upload2picbed(url, formData, header = {}) {
    let result;
    let form = new FormData();
    const userAgent = new UserAgent();
    let myHeaders = {
        'user-agent': userAgent.toString()
    }

    objectAssign(myHeaders, header)

    for (let item in formData) {
        form.append(item, formData[item]);
    }

    result = axios.post(
        url,
        form, {
            headers: {
                ...form.getHeaders(),
                ...myHeaders
            }
        });

    return result;
}

module.exports = upload2picbed