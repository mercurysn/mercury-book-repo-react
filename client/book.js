const axios = require('axios')

function getBooks() {
  axios
  .get('https://s3.amazonaws.com/mercury-book-repo/BookWithDescription.json')
  .then (body => {
    console.log('aaa');
    return body;
  });
};

module.exports = {
  getBooks
}