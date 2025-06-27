import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const DARK_BLUE = '#002147'; // Adding the constant definition

// SVG for a downward arrow with adjusted stroke width and viewbox for better proportion control
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter">
    <polyline points="2 2 12 12 22 2"></polyline>
  </svg>
);

const HeaderBar = styled.header`
  background: var(--andover-blue);
  color: var(--andover-accent);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  left: 0;
  right: 0;
  position: fixed;
  top: 0;
  padding: 0 3vw;
  height: 70px;
  margin: 0;
  box-sizing: border-box;
  z-index: 9999 !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--andover-accent);
  display: flex;
  align-items: center;
  height: 100%;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;
const MenuButton = styled.button`
  background: none;
  border: none;
  color: ${DARK_BLUE};
  font-size: 1.1rem;
  font-family: var(--andover-font-sans);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  letter-spacing: 0.01em;
`;
const Caret = styled.span`
  /* font-size is not directly relevant for SVG sizing, but kept for container */
  font-size: 1.1rem; 
  margin-right: 0; /* Rely on parent gap for spacing */
  display: inline-block;

  svg {
    width: 1.2rem; /* Adjusted SVG width for overall size */
    height: auto;
    vertical-align: middle; /* Ensure aligned with text */
  }
`;
const Search = styled.input`
  border: none;
  border-bottom: 1px solid var(--andover-accent);
  background: transparent;
  color: var(--andover-accent);
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
  outline: none;
  width: 200px;
  &::placeholder { color: var(--andover-accent); opacity: 0.8; }
  /* Remove default browser search input decorations */
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
  &::-ms-clear {
    display: none;
  }
`;

const Header = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      navigate(`/newsroom?search=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  return (
    <>
      <HeaderBar>
        <StyledLink to="/">
          <Logo src="/dmun-white-logo.png" alt="DMUN Foundation Logo" />
        </StyledLink>
        <Right>
          <MenuButton aria-label="Open menu" onClick={onMenuClick}>
            <Caret><ArrowIcon /></Caret>Menu
          </MenuButton>
          <Search
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            placeholder="Search..."
          />
        </Right>
      </HeaderBar>
      {/* Removed conditional rendering of SubNav */}
      {/* {subNavLinks.length > 0 && (
        <SubNav>
          <SubNavLinks>
            {subNavLinks.map((link) => (
              <SubNavLink key={link.to} to={link.to}>
                {link.label}
              </SubNavLink>
            ))}
          </SubNavLinks>
        </SubNav>
      )} */}
    </>
  );
};

export default Header; 