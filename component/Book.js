import Link from 'next/link';
import styled from 'styled-components';

const fontSize = props => props.extrasmall ? '10px' : '12px';
const fontSizeLarge = '15px';
const width = props => props.large ? '180px' : props.small ? '110px' : props.extrasmall ? '55px' : '80px';
const height = props => props.large ? '280px' : props.small ? '160px' : props.extrasmall ? '80px' : '120px';
const titleMargin = props => props.extrasmall ? '10px' : '20px';

const BookFrame = styled.div`
  display: flex;
  padding: 0px;
  margin: ${titleMargin};
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.div`
  display: flex;
  font-size: ${fontSize};
  font-size: ${props => props.large ? fontSizeLarge : fontSize};
  flex-wrap: wrap;
  width: ${width} ;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 5px;
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
  width: ${width};
  height: ${height};
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
  width: ${width};
  height: ${height};
`;

const Book = (props) => (
<BookFrame suppressClassNameWarning large={props.large} small={props.small} extrasmall={props.extrasmall} className="book-frame">
  <BookImage title={props.book ? props.book.Name : ''} suppressClassNameWarning large={props.large} small={props.small} extrasmall={props.extrasmall}>
    <Link href='/books/book'>
    <a>
      <CoverImage suppressClassNameWarning src={props.coverUrl} large={props.large} small={props.small} extrasmall={props.extrasmall} />
      <BookTexture suppressClassNameWarning />
    </a>
    </Link>
  </BookImage>
  <Title suppressClassNameWarning large={props.large} small={props.small} extrasmall={props.extrasmall}>{props.bookTitle}</Title>
  <Author suppressClassNameWarning>
    {props.author}
  </Author>
</BookFrame>
);

export default Book;
