const upload = require('./index');
const fs = require('fs');

async function catbox() {
    let uploadResult = await upload(
        'https://catbox.moe/user/api.php', {
            'fileToUpload': fs.createReadStream('./1.png'),
            'reqtype': 'fileupload',
            'userhash': '',
        }, {
            'accept': 'application/json',
            'referer': 'https://catbox.moe/'
        }
    );
    //response struct: https://files.catbox.moe/xxxxx.png
    //the url is https://files.catbox.moe/xxxxx.png
    console.log(uploadResult.data)
}

// url https://telegra.ph
async function telegraph() {
    let uploadResult = await upload(
        'https://telegra.ph/upload', {
            'file': fs.createReadStream('./1.png')
        }
    );
    //response struct: [ { src: '/file/xxxxx.png' } ]
    //the url is https://telegra.ph/file/xxxx.png
    console.log(uploadResult.data)
}

//url https://imgurl.org/
async function imgurl() {
    let uploadResult = await upload(
        'https://imgurl.org/upload/ftp', {
            'file': fs.createReadStream('./1.png')
        }
    );
    //response struct: 
    //     {
    //     code: 200,
    //     id: 114650,
    //     imgid: 'xxxxxxxxx',
    //     relative_path: '/imgs/2020/01/xxxxxxxxx.png',
    //     url: 'https://ftp.bmp.ovh/imgs/2020/01/xxxxxxxxx.png',
    //     thumbnail_url: 'https://ftp.bmp.ovh/imgs/2020/01/xxxxxxxxx_thumb.png',
    //     width: 1000,
    //     height: 966,
    //     delete: 'https://imgurl.org/delete/xxxxxxxxx'
    //   }
    //the url is https://ftp.bmp.ovh/imgs/2020/01/xxxxxxxxx.png
    console.log(uploadResult.data)
}

// catbox();
// telegraph();
imgurl();