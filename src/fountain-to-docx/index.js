// const fountain = require('@thombruce/fountain.js');
const fs = require('fs');
const docx = require('docx');
const { Document, Packer, Paragraph, TextRun, PageBreak, HeadingLevel, AlignmentType, UnderlineType } = docx;
const fountain = require('../modified-fountain');
function fountainToDocx({ title, events }) {
  const doc = new Document({
    title,
    styles: {
      paragraphStyles: [
        {
          id: 'Heading2',
          name: 'Heading 2',
          basedOn: 'Normal',
          next: 'Normal',
          quickFormat: true,
          run: {
            // size: 26,
            // bold: true,
            // color: 'red',
            // {
            //     type: UnderlineType.DOUBLE,
            //     color: "FF0000",
            // },
          },
          paragraph: {
            indent: {
              left: 1920,
              right: 1920,
            },
          },
        },
        {
          id: 'Heading3',
          name: 'Heading 3',
          basedOn: 'Normal',
          next: 'Normal',
          quickFormat: true,
          run: {
            // size: 26,
            // bold: true,
            // color: '999999',
            // color: 'red',
            // {
            //     type: UnderlineType.DOUBLE,
            //     color: "FF0000",
            // },
          },
          paragraph: {
            indent: {
              left: 0,
            },
          },
        },
      ],
    },
  });

  const content = {
    properties: {},
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: {
          before: 200,
        },
        children: [
          new TextRun({
            text: title,
            font: 'Courier',
            allCaps: false,
            alignment: AlignmentType.CENTER,
          }),
          new PageBreak(),
        ],
      }),
    ],
  };

  const data = events
    .filter((event) => {
      return event.type !== 'insert-point';
    })
    .map((event) => {
      switch (event.type) {
        case 'title':
          const title = new Paragraph({
            heading: HeadingLevel.HEADING_3,
            break: true,
            children: [
              new TextRun({
                text: `\n${event.text}\n`,
                font: 'Courier',
                allCaps: true,
                break: true,
              }),
            ],
          });
          content.children.push(title);
          break;
        case 'paper-cut':
          const { speaker, words } = event;
          const text = words
            .map((word) => {
              return word.text;
            })
            .join('');
          const papercut = new Paragraph({
            heading: HeadingLevel.HEADING_2,
            break: true,
            // bottom: {
            //   color: 'auto',
            //   space: 1,
            //   value: 'single',
            //   size: 6,
            // },
            children: [
              new TextRun({
                text: `\t\t\t\t\t\t\t\t\t\t${speaker}\n`,
                font: 'Courier',
                allCaps: true,
                break: true,
              }),
              new TextRun({
                text: `${text}\n`,
                font: 'Courier',
                allCaps: false,
                break: true,
              }),
            ],
          });

          // papercut.leftTabStop(3);
          content.children.push(papercut);
          break;
        case 'voice-over':
          const voiceOver = new Paragraph({
            heading: HeadingLevel.HEADING_3,
            break: true,
            children: [
              new TextRun({
                text: `${event.text}\n`,
                font: 'Courier',
                allCaps: false,
                break: true,
              }),
            ],
          });
          content.children.push(voiceOver);
          break;
        case 'note':
          const note = new Paragraph({
            reference: 'notes',
            heading: HeadingLevel.HEADING_3,
            break: true,
            children: [
              new TextRun({
                text: `${event.text}\n`,
                font: 'Courier',
                allCaps: false,
                italics: true,
                break: true,
                reference: 'notes',
                highlight: 'yellow',
                // smallCaps: true,
                // underline: {
                //   type: UnderlineType.DOUBLE,
                //   color: '990011',
                // },
              }),
            ],
          });
          content.children.push(note);
          break;
        default:
          // code block
          break;
      }
    });

  // content.children.push([...data]);
  doc.addSection(content);

  // const b64string = await Packer.toBase64String(doc);

  Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync('./public/index.docx', buffer);
  });
}
module.exports = fountainToDocx;
