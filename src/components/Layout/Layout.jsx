import { Container } from './Layout.styled';
import PropTypes from 'prop-types';
import { SearchQueryField } from '../Searchbar/Searchbar';

export const Layout = ({ children, onSabmit }) => {
  return (
    <Container>
      <SearchQueryField onSabmit={onSabmit} />
      <main>{children}</main>
      <footer>footer</footer>
    </Container>
  );
};

Layout.prototype = {
  children: PropTypes.node,
  onSabmit: PropTypes.func.isRequired,
};
