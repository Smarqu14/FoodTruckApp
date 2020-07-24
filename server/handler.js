module.exports = {
  genericQueryHandler: (res) => (err, results, fields) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(results.rows);
    }
  },
};
