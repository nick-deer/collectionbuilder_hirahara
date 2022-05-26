import fetch from "node-fetch";

const fs = require('fs');

fetch('http://content.libraries.wsu.edu/digital/bl/dmwebservices/index.php?q=dmGetCollectionArchivalInfo/hiraharag/json')
  .then(response => response.json())
  .then(data => fs.writeFile('testApiGetter.json', data, { flag: 'w+' }, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  }));
