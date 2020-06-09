const db = require('../db/index.js');
const { genericQueryHandler } = require('./handler');

module.exports = {
  findAllImages: (res) => {
    db.query('SELECT image_url FROM images', genericQueryHandler(res));
  },
};
