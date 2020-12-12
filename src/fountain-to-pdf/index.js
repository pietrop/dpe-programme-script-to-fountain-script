/**
 * https://github.com/brudil/timothy
 */
const fs = require('fs');
const { parse } = require('./parser');
const { generatePDF } = require('./pdf');

// export { parse, generatePDF };

const inputFilename = './public/index.fountain';
const outputFilename = './public/test.pdf';

const startTime = Date.now();
const scriptFile = fs.readFileSync(inputFilename, 'utf-8');

const scriptAst = parse(scriptFile);
generatePDF(fs.createWriteStream(outputFilename), scriptAst, {
  //   renderNotes: program.withNotes,
  //   editSpace: program.editSpace,
  //   sansSerif: program.sansSeri,
  renderNotes: true,
  editSpace: true,
  sansSerif: false,
});
