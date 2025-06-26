import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(-40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const DARK_BLUE = '#002147';
const SUBNAV_GRAY_TEXT = '#555';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  animation: ${slideIn} 0.4s cubic-bezier(0.4,0,0.2,1);
  font-family: var(--andover-font-serif);
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MenuImagePanel = styled.div`
  width: 30vw;
  height: 100vh;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuContent = styled.div`
  flex: 1;
  background: var(--andover-blue);
  color: ${DARK_BLUE};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 4.5rem 2rem 2rem 2rem;
  min-width: 500px;

  @media (max-width: 768px) {
    min-width: unset;
    padding: 2rem;
  }
`;

const CloseRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.5rem;
`;

const CaretIcon = styled.span`
  display: inline-block;
  font-size: 1.1rem;
  margin-left: 0.3em;
  vertical-align: middle;

  svg {
    width: 1.2rem;
    height: auto;
    vertical-align: middle;
    stroke: ${SUBNAV_GRAY_TEXT};
    transform: translateY(-1px);
  }
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: ${DARK_BLUE};
  font-size: 1.2rem;
  font-family: var(--andover-font-sans);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;

  ${CaretIcon} {
    margin-right: 0.5rem;
  }
`;

const CloseArrow = styled.span`
  font-size: 1.2rem;
  margin-right: 0.3rem;
`;

const SearchRow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  flex: 1;
`;

const SearchIcon = styled.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
`;

const Search = styled.input`
  border: none;
  border-bottom: 1px solid ${DARK_BLUE};
  background: transparent;
  color: ${DARK_BLUE};
  font-size: 1.1rem;
  padding: 0.3rem 0.5rem;
  outline: none;
  width: 240px;

  &::placeholder { 
    color: ${DARK_BLUE}; 
    opacity: 0.8; 
  }
`;

const MainLinks = styled.div`
  margin: 6rem 0 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-left: 36px;
`;

const MainLink = styled(Link)`
  font-family: var(--andover-font-serif);
  font-size: 2.8rem;
  color: ${DARK_BLUE};
  margin-bottom: 2.5rem;
  text-decoration: none;
  font-weight: 400;
  letter-spacing: 0.01em;

  &:hover { 
    text-decoration: underline;
    color: ${DARK_BLUE};
  }
`;

const BottomLinks = styled.div`
  margin-top: auto;
  width: 100%;
  border-top: 1px dotted #fff8;
  padding-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  font-size: 1.2rem;
`;

const BottomCol = styled.div`
  flex: 1 1 200px;
  min-width: 200px;
`;

const BottomLink = styled(Link)`
  display: block;
  color: ${DARK_BLUE};
  margin-bottom: 1rem;
  text-decoration: none;
  font-weight: 400;

  &:hover { 
    text-decoration: underline;
    color: ${DARK_BLUE};
  }
`;

const BottomRouterLink = styled(Link)`
  display: block;
  color: ${DARK_BLUE};
  margin-bottom: 1rem;
  text-decoration: none;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
    color: ${DARK_BLUE};
  }
`;

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter">
    <polyline points="2 2 12 12 22 2"></polyline>
  </svg>
);

const MenuDrawer = ({ open, onClose }) => (
  <Overlay open={open}>
    <MenuImagePanel aria-hidden="true">
      <img src="/Home-page-Header-Image.png" alt="Decorative image for menu" />
    </MenuImagePanel>
    <MenuContent>
      <CloseRow>
        <CloseBtn onClick={onClose}>
          <CaretIcon><ArrowIcon /></CaretIcon>Close
        </CloseBtn>
        <SearchRow>
          <Search placeholder="What are you looking for?" />
        </SearchRow>
      </CloseRow>

      <MainLinks>
        <MainLink to="/" onClick={onClose}>Home</MainLink>
        <MainLink to="/about" onClick={onClose}>About</MainLink>
        <MainLink to="/programs" onClick={onClose}>Programs</MainLink>
        <MainLink to="/advocacy" onClick={onClose}>Advocacy</MainLink>   
        <MainLink to="/research" onClick={onClose}>Research</MainLink>
      </MainLinks>

      <BottomLinks>
        <BottomCol>
          <BottomLink to="/integrity" onClick={onClose}>Integrity</BottomLink>
          <BottomLink to="/take-action" onClick={onClose}>Take Action</BottomLink>
          <BottomLink to="/newsroom" onClick={onClose}>Newsroom</BottomLink>
        </BottomCol>
        <BottomCol>
          <BottomLink to="/donate" onClick={onClose}>Donate</BottomLink>
          <BottomLink to="/volunteer" onClick={onClose}>Volunteer</BottomLink>
          <BottomLink to="/donor-relations" onClick={onClose}>Partner</BottomLink>
        </BottomCol>
        <BottomCol>
          <BottomLink to="/donor-relations" onClick={onClose}>Donor Relations</BottomLink>
          <BottomLink to="/mandate" onClick={onClose}>Our Mission</BottomLink>
          <BottomLink to="/#Membership" onClick={onClose}>Membership Us</BottomLink>
        </BottomCol>
      </BottomLinks>
    </MenuContent>
  </Overlay>
);

export default MenuDrawer;
