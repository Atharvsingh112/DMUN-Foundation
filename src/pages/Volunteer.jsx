import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PAGE_BACKGROUND_COLOR = '#E7F1FA';
const DARK_BLUE = '#002147';
const SUBNAV_GRAY_TEXT = '#555';
const SUBNAV_YELLOW_ICON = '#FFD700';

const VolunteerPageContainer = styled.div`
  background-color: ${PAGE_BACKGROUND_COLOR};
  color: ${DARK_BLUE};
  font-family: var(--andover-font-sans);
  min-height: 100vh; /* Ensure it takes full height */
  display: flex;
  flex-direction: column;
`;

const HeroWrapper = styled.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/Youth-Advocacy.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 2;
  }
`;

const HeroText = styled.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
`;

const SubnavSection = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${PAGE_BACKGROUND_COLOR};
  padding: 2.5rem 0;
  box-sizing: border-box;
`;

const SubnavContentWrapper = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SubnavHeading = styled.h2`
  font-family: var(--andover-font-serif);
  font-weight: bold;
  color: ${DARK_BLUE};
  font-size: 2.5rem;
  text-align: center;
  margin: 1rem 0;
  text-transform: uppercase;
`;

const SubnavLinksContainer = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  margin: 1.5rem 0;
`;

const SubnavLink = styled(Link)`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: ${SUBNAV_GRAY_TEXT};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5em;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${DARK_BLUE};
  }
`;

const CaretIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
  svg {
    width: 1rem;
    height: auto;
    stroke: ${SUBNAV_GRAY_TEXT};
    transition: stroke 0.2s ease-in-out;
  }
  ${SubnavLink}:hover & svg {
    stroke: ${DARK_BLUE};
  }
`;

const BuildingIconSVG = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const YellowIconGraphic = styled.div`
  width: 80px;
  height: 80px;
  color: ${SUBNAV_YELLOW_ICON};

  svg {
    width: 100%;
    height: 100%;
  }
`;

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="2 2 12 12 22 2"></polyline>
  </svg>
);

const EmptyContent = styled.div`
    flex-grow: 1; /* This will make sure the footer is pushed to the bottom */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const Volunteer = () => {
    return (
      <VolunteerPageContainer>
        <HeroWrapper>
            <HeroText>Volunteer With Us</HeroText>
        </HeroWrapper>

        <SubnavSection>
          <SubnavContentWrapper>
            <YellowIconGraphic><BuildingIconSVG /></YellowIconGraphic>
            <SubnavHeading>VOLUNTEER</SubnavHeading>
            <SubnavLinksContainer>
              <SubnavLink to="#">OPPORTUNITIES <CaretIcon><ArrowIcon/></CaretIcon></SubnavLink>
              <SubnavLink to="#">APPLY NOW <CaretIcon><ArrowIcon/></CaretIcon></SubnavLink>
              <SubnavLink to="#">FAQS <CaretIcon><ArrowIcon/></CaretIcon></SubnavLink>
              <SubnavLink to="/">BACK TO HOME <CaretIcon><ArrowIcon/></CaretIcon></SubnavLink>
            </SubnavLinksContainer>
          </SubnavContentWrapper>
        </SubnavSection>
        <EmptyContent />
      </VolunteerPageContainer>
    );
  };
  
  export default Volunteer; 