# upload2picbed
to upload image to the picbed

# how to install
`npm i upload2picbed`

# how to use

```javascript
//to use it on your server
const fs = require('fs');
const upload = require('upload2picbed');

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

catbox() 
```
```javascript
//To get result data, no use async, await
const upload = require('upload2picbed');
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

uploadResult.then(data => {
  //show the data
  console.log(data.data);
})
```