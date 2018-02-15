const express = require('express');
const router = express.Router();

const htmlPdf = require('html-pdf-chrome');
 
const html = '<p>Hello, world!</p>';
const url = 'https://docs.docker.com/docker-for-windows/';

const options = {
  port: 9222, // port Chrome is listening on
};

/* GET users listing. */
router.post('/', function(req, res, next) {

  console.log('and what was the request???');
  console.log(req.body);

  let selectedUrl = req.body.url;

  // Generating pdf
  htmlPdf.create(selectedUrl, options)
    .then(pdf => {
      pdf.toFile('public/pdfs/new.pdf');
      res.send('tada pdf made!!');
    })
    .catch(err => {
      console.log(err);
      res.send('something went wrong');
    });
});

module.exports = router;
