const fs = require('fs');
const dpeToDocxScreenplay = require('./index.js');

const programmeScriptExample = require('../../sample/dpe-programme-script.json');

const main = async (programmeScriptExample) => {
  const buffer = await dpeToDocxScreenplay(programmeScriptExample);
  console.log(buffer);
  fs.writeFileSync('./public/index.docx', buffer);
};

main(programmeScriptExample);
