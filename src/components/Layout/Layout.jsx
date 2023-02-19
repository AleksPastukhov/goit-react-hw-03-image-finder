import { Container } from './Layout.styled';
import PropTypes from 'prop-types';
import { SearchQueryField } from '../Searchbar/Searchbar';

export const Layout = ({ children, onSabmit, searchQuery, isBtnDisabled }) => {
  return (
    <Container>
      <SearchQueryField
        onSabmit={onSabmit}
        searchQuery={searchQuery}
        isBtnDisabled={isBtnDisabled}
      />
      <main>{children}</main>
      <footer>footer</footer>
    </Container>
  );
};

Layout.prototype = {
  children: PropTypes.node,
  onSabmit: PropTypes.func.isRequired,
};
