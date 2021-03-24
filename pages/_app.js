/* eslint-disable react/react-in-jsx-scope */
import App, {Container} from 'next/app';
import Page from '../component/Page';
const axios = require('axios');

class MyApp extends App {
  static async getInitialProps({req}) {
    const yearStats = await axios.get('https://s3.amazonaws.com/mercury-book-repo/yearStats.json');
    const books = await axios.get('https://s3.amazonaws.com/mercury-book-repo/BookWithDescription.json');

    return {
      yearStats: yearStats.data,
      books: books.data,
    };
  }

  render() {
    const {Component} = this.props;

    return (
      <Container>
        <Page>
          <Component books={this.props.books} yearStats={this.props.yearStats} />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
