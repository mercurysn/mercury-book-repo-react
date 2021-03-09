import App, { Container } from 'next/app';
import Page from '../component/Page';
const axios = require('axios')

class MyApp extends App {
  static async getInitialProps({ req }) {
    const res = await axios.get("https://s3.amazonaws.com/mercury-book-repo/BookWithDescription.json");
    return { result: res.data };
  }

  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Page>
          <Component books={this.props.result} />
        </Page>
      </Container>
    )
  }
}

export default MyApp;