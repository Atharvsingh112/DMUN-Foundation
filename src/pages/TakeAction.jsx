// Force re-render
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const ABBOT_BLUE = '#44b8f3';
const DARK_BLUE = '#002147';
const LIGHT_BLUE = '#97e1e6';

// New color for the main page background
const PAGE_BACKGROUND_COLOR = '#E7F1FA';

// New colors for subnavigation section
const SUBNAV_GRAY_TEXT = '#555'; // Slightly darker gray for text
const SUBNAV_YELLOW_ICON = '#FFD700'; // A golden yellow for the icon

const AboutHeroWrapper = styled.section`
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
const AboutHeroText = styled.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
  padding-left: 3vw;
  padding-right: 3vw;
`;

// Styled component for the bordered content wrapper
const BorderedContentWrapper = styled.div`
  border-left: 24px solid ${ABBOT_BLUE};
  border-right: 25px solid ${ABBOT_BLUE};
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
`;

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 2.5rem 0 0 0;
  align-items: flex-start;
  padding-left: 15vw;
  padding-right: 15vw;
  border: none; /* Ensure no border on Main */
  background-color: ${PAGE_BACKGROUND_COLOR}; /* Set background to match page color */

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 5vw;
    padding-right: 5vw;
    gap: 1.5rem;
  }
`;
const Left = styled.section`
  flex: 2 1 480px;
  min-width: 340px;
  font-size: 1.18rem;
  color: ${DARK_BLUE};
  font-family: var(--andover-font-sans);
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on Left */
`;
const Right = styled.aside`
  flex: 1 1 320px;
  min-width: 260px;
  background: var(--andover-accent);
  border-radius: 1rem;
  padding: 2.5rem 1.5rem;
  box-shadow: 0 2px 8px #0001;
  height: fit-content;
  font-family: var(--andover-font-serif);
  color: ${DARK_BLUE};
  margin-left: 0;
  border: none; /* Ensure no border on Right */
`;
const Section = styled.section`
  margin-bottom: 2rem;
`;
const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 2.5rem 0 1.2rem 0;
  font-family: var(--andover-font-serif);
  color: ${DARK_BLUE};
  border: none; /* Ensure no border on SectionTitle */
`;
const Paragraph = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1rem;
`;
const Fact = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  font-family: var(--andover-font-serif);
  color: ${DARK_BLUE};
  border: none; /* Ensure no border on Fact */
`;

const FactTitle = styled.h3`
  font-family: var(--andover-font-serif);
  font-size: 1.3rem;
  color: ${DARK_BLUE};
  margin-bottom: 0.5rem;
`;

const FactDescription = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 0.95rem;
  color: #555;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;
const LeadershipSection = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${DARK_BLUE};
  color: ${LIGHT_BLUE} !important;
  padding: 4rem 0 2.5rem 0;
  animation: ${fadeIn} 0.8s cubic-bezier(0.4,0,0.2,1);
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on LeadershipSection */
`;
const LeadershipContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  border: none; /* Ensure no border on LeadershipContainer */
`;
const LeadershipTitleRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: none; /* Ensure no border on LeadershipTitleRow */
`;
const LeadershipTitle = styled.h2`
  font-family: var(--andover-font-serif);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.01em;
  color: ${LIGHT_BLUE} !important;
  margin: 0;
  text-align: center;
  border: none; /* Ensure no border on LeadershipTitle */
`;
const SeeMoreBtn = styled.a`
  font-size: 1.4rem;
  letter-spacing: 0.9px;
  padding: 2rem 4rem;
  border: 1px solid ${LIGHT_BLUE};
  text-transform: uppercase;
  cursor: pointer;
  background: 0;
  transition: background 0.3s ease;
  max-width: 25rem;
  white-space: normal;
  text-align: center;
  text-decoration: none;
  color: ${LIGHT_BLUE} !important;
  font-family: var(--andover-font-sans);
  font-style: normal;
  font-stretch: extra-condensed;
  border-radius: 0;
  display: inline-block;
  margin-top: 2rem;
  margin-left: 0;
  &:hover {
    background: ${LIGHT_BLUE};
    color: ${DARK_BLUE} !important;
  }
`;
const LeadershipSubtitle = styled.div`
  font-family: var(--andover-font-sans);
  font-size: 1.25rem;
  color: #bfc5c9 !important;
  margin-bottom: 3.5rem;
  max-width: 900px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border: none; /* Ensure no border on LeadershipSubtitle */
`;
const LeadershipCardsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3.5rem;
  margin-bottom: 2.5rem;
  animation: ${fadeIn} 1.2s cubic-bezier(0.4,0,0.2,1);
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  overflow-x: auto;
  border: none; /* Ensure no border on LeadershipCardsRow */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;
const LeadershipCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  background: transparent;
  color: ${LIGHT_BLUE} !important;
  box-sizing: border-box;
  text-align: center;
  border: none; /* Ensure no border on LeadershipCard */
`;
const LeaderImg = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #6c7a89 url('https://via.placeholder.com/120x120?text=Photo') center/cover no-repeat;
  margin-bottom: 1.2rem;
  filter: ${({ $isColor }) => ($isColor ? 'none' : 'grayscale(1) contrast(1.1)')};
  border: none; /* Ensure no border on LeaderImg */
`;
const LeaderName = styled.div`
  font-family: var(--andover-font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: ${LIGHT_BLUE} !important;
  margin-bottom: 0.2rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderName */
`;
const LeaderRole = styled.div`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  color: ${LIGHT_BLUE} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderRole */
`;
const LeaderDesc = styled.div`
  font-family: var(--andover-font-sans);
  font-size: 1.05rem;
  color: ${LIGHT_BLUE} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderDesc */
`;
const LeaderLink = styled.a`
  color: ${LIGHT_BLUE} !important;
  text-decoration: underline;
  font-family: var(--andover-font-sans);
  font-size: 1rem;
  border: none; /* Ensure no border on LeaderLink */
`;
const StyledLink = styled.a`
  font-family: var(--andover-font-sans);
  color: ${ABBOT_BLUE};
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  transition: color 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
    color: ${DARK_BLUE};
  }

  svg {
    width: 0.8rem; /* Adjusted for even smaller arrow size */
    height: auto;
    stroke: ${ABBOT_BLUE};
    transition: stroke 0.2s ease-in-out;
  }
`;
const SmallSectionTitle = styled.h3`
  font-family: var(--andover-font-serif);
  font-size: 1.5rem;
  color: ${DARK_BLUE};
  margin-top: 2rem;
  margin-bottom: 1rem;
  border: none; /* Ensure no border on SmallSectionTitle */
`;
const YellowIconGraphic = styled.div`
  width: 65px;
  height: 65px;
  margin: 2rem auto 0.5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    fill: ${SUBNAV_YELLOW_ICON};
  }
`;
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter">
    <polyline points="2 2 12 12 22 2"></polyline>
  </svg>
);
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
const BuildingIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SubnavSection = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${PAGE_BACKGROUND_COLOR};
  padding: 2.5rem 0 0 0;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  border-left: 32px solid ${ABBOT_BLUE};
  border-right: 33px solid ${ABBOT_BLUE};
`;

const SubnavContentWrapper = styled.div`
  /* Max width for content alignment */
  /* Center the content */
  padding: 0; /* Horizontal padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const SubnavHeading = styled.h2`
  font-family: var(--andover-font-serif);
  font-size: 2.2rem;
  color: ${DARK_BLUE};
  margin-bottom: 0.8rem;
  font-weight: 400;
`;

const SubnavLinksContainer = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  margin-bottom: 2rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    gap: 1.8rem;
    margin-bottom: 2rem;
    flex-direction: column;
    align-items: center;
  }
`;

const SubnavLink = styled(Link)`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: ${SUBNAV_GRAY_TEXT};
  text-decoration: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.3em;
  transition: color 0.2s ease-in-out;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
    color: ${DARK_BLUE};
  }
`;

const TakeAction = () => {
  return (
    <>
      <AboutHeroWrapper>
        <AboutHeroText>Take Action</AboutHeroText>
      </AboutHeroWrapper>

      <SubnavSection>
        <SubnavContentWrapper>
          <YellowIconGraphic>
            <BuildingIconSVG />
          </YellowIconGraphic>
          <SubnavHeading>TAKE ACTION</SubnavHeading>
          <SubnavLinksContainer>
            <SubnavLink to="/advocacy">ADVOCACY <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
            <SubnavLink to="/research">RESEARCH <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
            <SubnavLink to="https://mymun.com/dmun">PROGRAMS <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
            <SubnavLink to="https://mymun.com/dmun">VOLUNTEER <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
            <SubnavLink to="/take-action#donate-section">DONATE <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
          </SubnavLinksContainer>
        </SubnavContentWrapper>
      </SubnavSection>

      <BorderedContentWrapper>
        <Main>
          <Left>
            <Section>
              <SectionTitle>Get Involved</SectionTitle>
              <Paragraph>
                Join us in our mission to empower youth and create positive change in our communities. There are many ways to get involved and make a difference.
              </Paragraph>
            </Section>

            <Section>
              <SectionTitle>Ways to Take Action</SectionTitle>
              <Paragraph>
                Whether you're interested in advocacy, research, or direct community involvement, we have opportunities that match your interests and skills.
              </Paragraph>
            </Section>

            <Section id="donate-section">
              <SectionTitle>Support Our Mission</SectionTitle>
              <Paragraph>
                Your support empowers us to continue our mission of empowering youth and providing quality education for all. By donating, you directly contribute to global education initiatives, offering scholarships, mentorship programs, and leadership opportunities to young people from diverse backgrounds, ensuring they have the resources to succeed.
              </Paragraph>
              <Paragraph>
                <a href="https://donorbox.org/giving-dmun"><button>Donate Now  </button></a>
              </Paragraph>
            </Section>
          </Left>

          <Right>
            <SectionTitle>Quick Actions</SectionTitle>
            <Fact>
              <FactTitle>Join Our Programs</FactTitle>
              <FactDescription>
                Participate in our youth leadership and development programs
              </FactDescription>
            </Fact>

            <Fact>
              <FactTitle>Volunteer</FactTitle>
              <FactDescription>
                Share your skills and time with our community initiatives
              </FactDescription>
            </Fact>

            <Fact>
              <FactTitle>Support Our Work</FactTitle>
              <FactDescription>
                Make a donation to help us expand our impact
              </FactDescription>
            </Fact>

            <Fact>
              <FactTitle>Stay Connected</FactTitle>
              <FactDescription>
                Subscribe to our newsletter for updates and opportunities
              </FactDescription>
            </Fact>
          </Right>
        </Main>
      </BorderedContentWrapper>

      <LeadershipSection>
        <LeadershipContainer>
          <LeadershipTitleRow>
            <LeadershipTitle>Action Leaders</LeadershipTitle>
            <LeadershipSubtitle>
              Meet the dedicated individuals leading our action initiatives
            </LeadershipSubtitle>
          </LeadershipTitleRow>
          <LeadershipCardsRow>
            <LeadershipCard>
              <LeaderImg $isColor={true} />
              <LeaderName>John Smith</LeaderName>
              <LeaderRole>Director of Volunteer Programs</LeaderRole>
              <LeaderDesc>
                Oversees volunteer engagement and community outreach
              </LeaderDesc>
              <LeaderLink href="#">
                Learn More <ArrowIcon />
              </LeaderLink>
            </LeadershipCard>
            <LeadershipCard>
              <LeaderImg $isColor={true} />
              <LeaderName>Emma Davis</LeaderName>
              <LeaderRole>Director of Donor Relations</LeaderRole>
              <LeaderDesc>
                Manages donor engagement and fundraising initiatives
              </LeaderDesc>
              <LeaderLink href="#">
                Learn More <ArrowIcon />
              </LeaderLink>
            </LeadershipCard>
            <LeadershipCard>
              <LeaderImg $isColor={true} />
              <LeaderName>David Wilson</LeaderName>
              <LeaderRole>Community Engagement Lead</LeaderRole>
              <LeaderDesc>
                Leads community engagement and action campaigns
              </LeaderDesc>
              <LeaderLink href="#">
                Learn More <ArrowIcon />
              </LeaderLink>
            </LeadershipCard>
          </LeadershipCardsRow>
          <div style={{ textAlign: 'center' }}>
            <SeeMoreBtn href="#">View All Action Leaders</SeeMoreBtn>
          </div>
        </LeadershipContainer>
      </LeadershipSection>
    </>
  );
};

export default TakeAction; 