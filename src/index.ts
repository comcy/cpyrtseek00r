/*
 * @copyright Copyright (c) 2021 Christian Silfang (comcy) - All Rights Reserved.  
 */

  
#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));

const input: string = argv.i; // -i: input parameter 
const output: string = argv.o; // -o: output parameter
const type: string = argv.t; // -t: file type parameter
