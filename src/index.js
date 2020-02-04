const express = require('express');
const app = express();
const multer = require('multer');

app.get('/', function (req, res) {
  res.send('This is uploader!');
});

app.use(express.static('src/public'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "src/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

app.use(multer({storage: storageConfig}).any());

app.post('/upload', function (req, res, next) {
   console.log('Try upload incoming data');
    const fileData = req.files;
   if (!fileData) {
        console.log('Failed');
        res.send('File upload failed!');
   } else {
        console.log('success');
        res.send('File upload success!');
   }
});

app.listen(3000, function () {
  console.log('Uploader listening on port 3000!');
});
