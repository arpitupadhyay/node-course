const fs = require('fs');
const AWS = require('aws-sdk');

// Enter copied or downloaded access ID and secret key here
const ID = 'AKIAR5UZLY6OGEB24MXM​';
const SECRET = 'xKK6uw0y6VmjV4C6Dmy+wwdCPAU3/10ogkm4F1Kj​';

// The name of the bucket that you have created
const BUCKET_NAME = 'arpittestbucket';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: 'smiley.png', // File name you want to save as in S3
        Body: fileContent,
        ContentType:'image/png'
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

uploadFile('');
