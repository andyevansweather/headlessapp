const express = require('express');
const router = express.Router();

const htmlPdf = require('html-pdf-chrome');
 
const html = '<p>Hello, world!</p>';
const options = {
  port: 9222, // port Chrome is listening on
};

/* GET users listing. */
router.get('/', function(req, res, next) {

  // Generating pdf
  htmlPdf.create(html, options)
    .then(pdf => pdf.toFile('test.pdf'))
    .catch(err => console.log(err));
  // htmlPdf.create(html, options).then((pdf) => pdf.toBase64());
  // htmlPdf.create(html, options).then((pdf) => pdf.toBuffer());


  res.send('tada pdf made!!');
});

module.exports = router;
