#!/usr/bin/env node
var fs = require('fs');

printHTML( readHTML('./index.html') );

function readHTML(filename)
{
  var indexBuff = fs.readFileSync(filename);
  var indexStr = indexBuff.toString();
  return indexStr;
}

function printHTML(HTMLstr)
{
    console.log(HTMLstr);
}
