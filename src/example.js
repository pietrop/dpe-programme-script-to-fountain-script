const fs = require('fs');
const programmeScriptExample = require('../sample/dpe-programme-script.json');
/**
 * DPE to Fountain HTML
 */
const dpeToFountain = require('./index.js');
const html = dpeToFountain(programmeScriptExample);
console.log(html);

fs.writeFileSync('./public/index.html', html);
/**
 *
 */
const makeFountainFromDpeProgrammeScript = require('./index.js').makeFountainFromDpeProgrammeScript;
const fountainText = makeFountainFromDpeProgrammeScript(programmeScriptExample);
fs.writeFileSync('./public/index.fountain', fountainText);

/**
 *
 */
const fountainToHtml = require('./index.js').fountainToHtml;
const htmlPage = fountainToHtml(fountainText);
fs.writeFileSync('./public/index.html', htmlPage);
