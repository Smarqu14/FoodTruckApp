const model = require('./model.js');

module.exports = {
  getImages: (req, res) => {
    model.findAllImages(res);
  },
};
