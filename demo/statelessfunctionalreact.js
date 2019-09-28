const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreLightWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreLightWOFF}) format('woff'),
    url(${fontFamilies.CalibreLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
`;

const StyledIcon = styled(Icon)`
  svg {
    height: calc(${({ dimension }) => dimension || '24px'} + 3vw);
    width: calc(${({ dimension }) => dimension || '24px'} + 3vw);
  }
`;

// I use this syntax when my component fits on one line
const ListItem = props => <li className="list-item">{props.item.name}</li>;

// I use this when my component has no logic outside JSX
const List = ({ items }) => (
  <ul className="list">
    {items.map(item => (
      <ListItem item={item} />
    ))}
  </ul>
);

// I use this when the component needs logic outside JSX.
const Body = props => {
  let items = transformItems(props.rawItems);
  return (
    <div>
      <h1>{props.header}</h1>
      <List items={items} />
    </div>
  );
};

// This is equivalent to the last example
function Page(props, context) {
  return (
    <div>
      <Body header="My List" rawItems={props.rawItems} />
    </div>
  );
}
// propTypes and contextTypes are supported
Page.propTypes = {
  rawItems: React.PropTypes.array.isRequired
};
