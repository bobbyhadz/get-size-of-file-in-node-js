// How to get the Size of a File in Node.js

import fs from 'fs';

// 👇️ If you use CommonJS require()
// const fs = require('fs')

try {
  const stats = fs.statSync('./my-file.txt');

  const fileSizeInBytes = stats.size;
  console.log('Size in bytes:', fileSizeInBytes);

  const fileSizeInMegaBytes = fileSizeInBytes / (1024 * 1024);
  console.log('Size in MegaBytes:', fileSizeInMegaBytes);
} catch (err) {
  console.log(err.message);
}
