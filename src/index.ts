/*
 * @copyright Copyright (c) 2021 Christian Silfang (comcy) - All Rights Reserved.  
 */


const fs = require('fs');
const utf8 = require('utf8');
const base64 = require('base-64');

fs.readFile('logo.ascii', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const print = utf8.decode(base64.decode(data));
  console.log(print);
})
