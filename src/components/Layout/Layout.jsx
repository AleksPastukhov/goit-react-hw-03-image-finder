import { Container } from './Layout.styled';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <Container>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </Container>
  );
};

Layout.prototype = {
  children: PropTypes.node,
};
