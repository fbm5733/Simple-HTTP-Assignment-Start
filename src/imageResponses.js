const fs = require('fs');

const dankMeme = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getDankMemes = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(dankMeme);
  response.end();
};

module.exports.getDankMemes = getDankMemes;
