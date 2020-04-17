// #region  Imports
import { content, navBar } from '@config';
import { media, mixins, theme } from '@styles';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
// #endregion

// #region  Styling
const { colors, fontSizes, fonts } = theme;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  z-index: 1;
  outline: 0;
  transition: ${theme.transition};
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${({ menuOpen }) => (menuOpen ? 'visible' : 'hidden')};
  display: none;
  ${media.tablet`display: block;`};
`;
const Sidebar = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  padding: 50px;
  width: 50vw;
  height: 100%;
  right: 0;
  margin-left: auto;
  font-family: ${fonts.SFMono};
  box-shadow: -10px 0px 30px -15px ${colors.backgroundDarken};
  ${media.thone`padding: 25px;`};
  ${media.tiny`padding: 10px;`};
`;
const NavLinks = styled.nav`
  ${mixins.flexBetween};
  width: 100%;
  flex-direction: column;
  text-align: center;
`;
const NavList = styled.ol`
  width: 100%;
`;
const NavListItem = styled.li`
  margin: 0 auto 20px;
  font-size: ${fontSizes.large};
  counter-increment: item 1;
  ${media.thone`
    margin: 0 auto 10px;
    font-size: ${fontSizes.medium};
  `};
  ${media.tiny`font-size: ${fontSizes.smallish};`};
  &:before {
    display: block;
    content: '0' counter(item) '.';
    color: ${colors.primary};
    font-size: ${fontSizes.small};
    margin-bottom: 5px;
  }
`;
const NavLink = styled(Link)`
  ${mixins.link};
  padding: 3px 20px 20px;
  width: 100%;
`;
// #endregion

const Menu = ({ menuOpen, toggleMenu }) => {
  const handleMenuClick = e => {
    const target = e.target;
    const isLink = target.hasAttribute('href');
    const isNotMenu = target.classList && target.classList[0].includes('MenuContainer');

    (isLink || isNotMenu) && toggleMenu();
  };

  return (
    <MenuContainer
      menuOpen={menuOpen}
      onClick={handleMenuClick}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}
    >
      <Sidebar>
        <NavLinks>
          <NavList>
            {navBar.map(name => (
              <NavListItem key={name}>
                <NavLink to={`/#${content[name].id}`}>{name}</NavLink>
              </NavListItem>
            ))}
          </NavList>
        </NavLinks>
      </Sidebar>
    </MenuContainer>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default Menu;
