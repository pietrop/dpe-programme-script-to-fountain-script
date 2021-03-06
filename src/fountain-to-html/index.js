// const fountain = require('@thombruce/fountain.js');
const fountain = require('../modified-fountain');
function fountainToHtml(fountainText) {
  const output = fountain.parse(fountainText);
  const htmlBody = `<div id="script" class="us-letter">
      <div class="page title-page">${output.html.title_page}</div>
      <div
        class="page">${output.html.script}
      </div>
    </div>`;

  const commentsRegex = /<!--(.*?)-->/g;

  const matches = htmlBody.replace(commentsRegex);
  console.log(matches);
  return `<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>The HTML5 Herald</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">
  <style>
  /* originally from https://github.com/BadIdeaFactory/scriptchat/blob/master/src/components/Script.css */
  body {
  background-color: #f7f7f7;
}

#script {
  margin: 25px auto 0 auto;
  width: 850px;
}

#script .page {
  background: #fff;
  border: 1px solid #d2d2d2;
  border-radius: 2px;
  color: #222;
  cursor: text;
  font: Courier, 'Courier New', monospace;
  letter-spacing: 0 !important;
  font-family: 'Courier Final Draft', Courier, Courier New, monospace;
  line-height: 107.5%;
  margin-bottom: 35px;
  position: relative;
  text-align: left;
  width: 100%;
  z-index: 200;
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

@media only print {
  #script .page {
    border: 0;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
}

@media only screen and (min-width: 0px), only print {
  #script .page {
    font-size: 12px;
    padding: 72px 72px 72px 108px;
  }

  #script .page h1,
  #script .page h2,
  #script .page h3,
  #script .page h4,
  #script .page p {
    font-size: 12px;
    font-weight: normal;
  }

  /* US Paper */
  #script.us-letter {
    width: 612px;
  } /* us letter - 72 dpi - 612px x 792px - margins: 1" 1" 1" 1.5" */

  #script.us-letter .page {
    min-height: 792px;
  } /* min height temporary until proper paging is implemented */

  #script.us-letter .page.title-page {
    height: 792px;
  } /* temp for title page until paging is implemented */

  /* A4 Paper */
  #script.a4 {
    width: 595px;
  } /* us letter - 72 dpi - 595px x 842px - margins: 1" 1" 1" 1.5" */

  #script.a4 .page {
    height: 842px;
  }
}

@media only screen and (min-width: 1200px) {
  #script .page {
    font-size: 16px;
    padding: 100px 100px 100px 150px;
  }

  #script .page h1,
  #script .page h2,
  #script .page h3,
  #script .page h4,
  #script .page p {
    font-size: 17px;
    font-weight: normal;
  }

  /* US Paper */
  #script.us-letter {
    width: 850px;
  } /* us letter - 100 dpi - 850px x 1100px - margins: 1" 1" 1" 1.5" */

  #script.us-letter .page {
    min-height: 1100px;
  } /* min height temporary until proper paging is implemented */

  #script.us-letter .page.title-page {
    height: 1100px;
  } /* temp for title page until paging is implemented */

  #script.a4 {
    width: 827px;
  } /* us letter - 72 dpi - 827px x 1169px - margins: 1" 1" 1" 1.5" */

  #script.a4 .page {
    height: 1169px;
  }
}

/* title page */
#script .title-page h1 {
  margin-top: 50%;
  margin-bottom: 34px;
  text-align: center;
  width: 90.5%;
}
#script .title-page p.credit {
  text-align: center;
  width: 90.5%;
}
#script .title-page p.author,
#script .title-page p.authors {
  margin-bottom: 32px;
  margin-top: 0;
  text-align: center;
  width: 90.5%;
}
#script .title-page p.source {
  margin-bottom: 32px;
  text-align: center;
  width: 90.5%;
}
#script .title-page p.notes {
  bottom: 350px;
  position: absolute;
  right: 0;
  text-align: right;
}

#script .title-page p.date,
#script .title-page p.draft-date {
  bottom: 250px;
  position: absolute;
  right: 0;
  text-align: right;
}

#script .title-page p.contact {
  bottom: 100px;
  position: absolute;
  right: 0;
  text-align: right;
}

#script .title-page p.copyright {
  bottom: 100px;
  position: absolute;
  text-align: left;
}

@media only screen and (min-width: 0px), only print {
  #script .title-page p.notes {
    bottom: 252px;
    right: 72px;
  }

  #script .title-page p.date,
  #script .title-page p.draft-date {
    bottom: 180px;
    right: 72px;
  }

  #script .title-page p.contact {
    bottom: 72px;
    right: 72px;
  }

  #script .title-page p.copyright {
    bottom: 72px;
  }
}

@media only screen and (min-width: 1200px) {
  #script .title-page p.notes {
    bottom: 350px;
    right: 100px;
  }

  #script .title-page p.date,
  #script .title-page p.draft-date {
    bottom: 250px;
    right: 100px;
  }
  #script .title-page p.contact {
    bottom: 100px;
    right: 100px;
  }
  #script .title-page p.copyright {
    bottom: 100px;
  }
}

/* script */
#script .page h2 {
  text-align: right;
}
#script .page h2.left-aligned {
  text-align: left;
}
#script .page h3 {
  position: relative;
}
#script .page h3:before {
  color: #bbb;
  content: attr(id);
  font-weight: bold;
  left: -45px;
  position: absolute;
}
#script .page h3:after {
  color: #bbb;
  content: attr(id);
  font-weight: bold;
  right: -45px;
  position: absolute;
}

#script .page div.dialogue {
  margin-left: auto;
  margin-right: auto;
  width: 68%;
}
#script .page div.dialogue h4 {
  margin-bottom: 0;
  margin-left: 23%;
}
#script .page div.dialogue p.parenthetical {
  margin-bottom: 0;
  margin-top: 0;
  margin-left: 11%;
}
#script .page div.dialogue p {
  margin-bottom: 0;
  margin-top: 0;
}

#script .page div.dual-dialogue {
  margin: 2em 0 0.9em 2%;
  width: 95%;
}
#script .page div.dual-dialogue div.dialogue {
  display: inline-block;
  margin: 0;
  width: 45%;
}
#script .page div.dual-dialogue div.dialogue h4 {
  margin-top: 0;
}
#script .page div.dual-dialogue div.dialogue.right {
  float: right;
}

#script .page p.centered {
  text-align: center;
  width: 92.5%;
}

#script .page p.section {
  color: #bbb;
  margin-left: -30px;
}
#script .page p.synopsis {
  color: #bbb;
  margin-left: -20px;
}

#script .page span.italic {
  font-style: italic;
}
#script .page span.bold {
  font-weight: bold;
}
#script .page span.underline {
  text-decoration: underline;
}

.comment {
    color: #cccccc;
    font-style: italic;
    margin: 16px 0;
    white-space: pre-wrap;
}
  </style>
  

</head>

<body>
  ${htmlBody}
</body>
</html>`;
}
module.exports = fountainToHtml;
