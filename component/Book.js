import Link from 'next/link';
import styled from 'styled-components';

const fontSize = '12px';

const BookFrame = styled.div`
  display: flex;
  padding: 0px;
  margin: 20px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
`;

const Title = styled.div`
  display: flex;
  font-size: ${fontSize};
  flex-wrap: wrap;
  background-color: yellow;
  width: ${props => props.large ? '180px' : '110px'};
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`;

const Author = styled.div`
  margin-top: 0px;
  text-align: center;
  font-size: ${fontSize};
`;

const postMetaStyle = {
  display: 'none',
};

const BookImage = styled.div`
  -webkit-box-shadow: 0 2px 7.68px .32px rgba(0, 0, 0, 0.4),0 12px 26px 0 rgba(0, 0, 0, 0.4);
  box-shadow: 0 2px 7.68px .32px rgba(0, 0, 0, 0.4),0 12px 26px 0 rgba(0, 0, 0, 0.4);
  position: relative;
  background-color: #FFF;
  width: ${props => props.large ? '180px' : '110px'};
  height: ${props => props.large ? '280px' : '160px'};
  a {
    color: #3A5875;
    text-decoration: none;
    line-height: inherit;
    font-weight: inherit;
  }
`;

const BookTexture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  -webkit-box-shadow: inset 4px -5px 4px -4px rgba(0, 0, 0, 0.3),inset 0 1px 0 0 rgba(0, 0, 0, 0.2),inset 0 2px 0 0 rgba(255, 255, 255, 0.2);
  box-shadow: inset 4px -5px 4px -4px rgba(0, 0, 0, 0.3),inset 0 1px 0 0 rgba(0, 0, 0, 0.2),inset 0 2px 0 0 rgba(255, 255, 255, 0.2);
  background: gradient(linear,left top,left bottom,color-stop(0%,rgba(255, 255, 255, 0.2)),color-stop(50%,rgba(255, 255, 255, 0)),color-stop(100%,rgba(255, 255, 255, 0)));
  background: -webkit-linear-gradient(top,rgba(255, 255, 255, 0.2) 0,rgba(255, 255, 255, 0) 50%,rgba(255, 255, 255, 0) 100%);
  background: gradient(linear,top left,bottom left,from(rgba(255,255,255,.2)),color-stop(50%,rgba(255,255,255,0)),to(rgba(255,255,255,0)));
  background: linear-gradient(to bottom,rgba(255, 255, 255, 0.2) 0,rgba(255, 255, 255, 0) 50%,rgba(255, 255, 255, 0) 100%);
`;

const CoverImage = styled.img`
  border: 0;
  vertical-align: top;
  font-size: 0;
  position: relative;
  z-index: 1;
  width: ${props => props.large ? '180px' : '110px'};
  height: ${props => props.large ? '280px' : '160px'};
`;

const Book = (props) => (
<BookFrame suppressClassNameWarning large={props.large} className="book-frame">
  <BookImage suppressClassNameWarning large={props.large}>
    <Link href='/books/book'>
    <a>
      <CoverImage suppressClassNameWarning src={props.coverUrl} large={props.large} />
      <BookTexture suppressClassNameWarning />
    </a>
    </Link>
  </BookImage>
  <Title suppressClassNameWarning>{props.bookTitle}</Title>
  <Author suppressClassNameWarning>
    {props.author}
  </Author>
</BookFrame>
);

export default Book;
