const express = require('express');
const router = express.Router();

const htmlPdf = require('html-pdf-chrome');
 
const html = '<p>Hello, world!</p>';
const url = 'https://github.com/westy92/html-pdf-chrome';

const options = {
  port: 9222, // port Chrome is listening on
};

/* GET users listing. */
router.get('/', function(req, res, next) {

  // Generating pdf
  htmlPdf.create(url, options)
    .then(pdf => pdf.toFile('public/pdfs/new.pdf'))
    .catch(err => console.log(err));

  res.send('tada pdf made!!');
});

module.exports = router;
