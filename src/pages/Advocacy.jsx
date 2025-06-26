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
  border-left: 17px solid ${ABBOT_BLUE}; /* Set border to 17px */
  border-right: 17px solid ${ABBOT_BLUE}; /* Set border to 17px */
  box-sizing: border-box; /* Include border in element's total width */
  padding-left: 20px; /* Add some padding inside the border */
  padding-right: 20px; /* Add some padding inside the border */
  overflow: hidden; /* Prevent content from overflowing the border */
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
const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 1rem 0 0.8rem 0;
  font-family: var(--andover-font-serif);
  color: ${DARK_BLUE};
  border: none; /* Ensure no border on SectionTitle */
`;
const Paragraph = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 0.5rem;
`;
const RightSectionTitle = styled.h2`
  font-size: 2rem;
  margin: 1rem 0 0.8rem 0;
  font-family: var(--andover-font-serif);
  color: ${DARK_BLUE};
  border: none;
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
  text-decoration: none;
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`;
const StyledLink = styled.a`
  font-family: var(--andover-font-sans);
  font-size: 1rem;
  color: ${DARK_BLUE};
  text-decoration: none;
  font-weight: 400;
  border: none; /* Ensure no border on StyledLink */
`;
const SmallSectionTitle = styled.h3`
  font-family: var(--andover-font-serif);
  font-size: 1.5rem;
  color: ${DARK_BLUE};
  margin-top: 2rem;
  margin-bottom: 1rem;
  border: none; /* Ensure no border on SmallSectionTitle */
`;
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter">
    <polyline points="2 2 12 12 22 2"></polyline>
  </svg>
);
const BuildingIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// New styled components for the subnavigation section
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
 border-left: 24px solid ${ABBOT_BLUE}; /* Set border to 17px */
  border-right: 25px solid ${ABBOT_BLUE}; /* Set border to 17px */
`;

const SubnavContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SubnavHeading = styled.h2`
  font-family: var(--andover-font-serif);
  font-size: 2.2rem;
  color: ${DARK_BLUE}; /* Dark blue for heading */
  margin-bottom: 0.8rem;
  font-weight: 400;
`;

const SubnavLinksContainer = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Allow links to wrap on smaller screens */
  gap: 3.2rem; /* Further increased gap to visually match image */
  margin-bottom: 2rem; /* Increased space below links */
  margin-top: 0.5rem; /* Reduced top margin to bring links closer to heading */

  @media (max-width: 768px) {
    gap: 1.8rem; /* Adjusted mobile gap */
    margin-bottom: 2rem;
    flex-direction: column; /* Stack on very small screens */
    align-items: center;
  }
`;

const SubnavLink = styled(Link)`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600; /* Semibold */
  color: ${SUBNAV_GRAY_TEXT};
  text-decoration: none;
  white-space: nowrap; /* Prevent breaking for individual links */
  display: flex;
  align-items: center;
  gap: 0.3em; /* Space between text and arrow */
  transition: color 0.2s ease-in-out;
  font-size: 1rem; /* Adjusted font size for links */

  &:hover {
    text-decoration: underline;
    color: ${DARK_BLUE}; /* Darker on hover */
  }
`;

const YellowIconGraphic = styled.div`
  width: 65px; /* Adjusted width for icon */
  height: 65px; /* Adjusted height for icon */
  margin: 2rem auto 0.5rem auto; /* Adjusted bottom margin to create more space */
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    fill: ${SUBNAV_YELLOW_ICON};
  }
`;

const CaretIcon = styled.span`
  display: inline-block;
  font-size: 1.1rem; /* Keeping font-size for consistency if needed, but SVG sizing is primary */
  margin-left: 0.3em; /* Space between text and arrow */
  vertical-align: middle;

  svg {
    width: 1.2rem; /* Adjusted SVG width to match header's arrow size */
    height: auto;
    vertical-align: middle; /* Ensure aligned with text */
    stroke: ${SUBNAV_GRAY_TEXT}; /* Match color to subnav text */
    transform: translateY(-1px); /* Adjusted to raise the arrow by 2 points */
  }
`;

const Advocacy = () => {
  return (
    <>
      <AboutHeroWrapper>
        <AboutHeroText>Advocacy</AboutHeroText>
      </AboutHeroWrapper>

      <SubnavSection>
        <SubnavContentWrapper>
          <YellowIconGraphic>
            <BuildingIconSVG />
          </YellowIconGraphic>
          <SubnavHeading>ADVOCACY</SubnavHeading>
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
            <SectionTitle>ABOUT OUR ADVOCACY</SectionTitle>
            <Paragraph>
              We champion youth through direct advocacy. We champion the voices of youth, ensuring their perspectives shape policies and decisions. Our advocacy efforts are rooted in the belief that young people have the creativity, insight, and drive to address the world's most pressing issues.
            </Paragraph>
            <Paragraph>
              Direct engagement is at the heart of our advocacy work. We connect young leaders with opportunities to influence and participate in decision-making processes at an intergovernmental level.
            </Paragraph>

           

            

           

            <SectionTitle>Stakeholder Recognition</SectionTitle>
            <Paragraph>
              We believe that young people are vital stakeholders in the political arena and should be recognized as such. We ensure that youth have a seat at the table in decision-making processes at all levels, from local communities to global platforms.
            </Paragraph>

            <SectionTitle>Youth Empowerment</SectionTitle>
            <Paragraph>
              We believe that providing the necessary skillsets for youths to succeed is a fundamental right. We advocate for greater expansion and creation of diverse and inclusive youth capacity-building programs provided to marginalised youths.
            </Paragraph>

            <SectionTitle>Sustainable Futures</SectionTitle>
            <Paragraph>
              We believe that sustainability is a generational promise. Our advocacy centers on building sustainable futures where young people are leaders in shaping resilient, inclusive, and equitable societies.
            </Paragraph>

            <SectionTitle>Inclusive Policies</SectionTitle>
            <Paragraph>
              We advocate for policies that are inclusive and responsive to the needs and perspectives of young people. This includes pushing for educational reforms, social justice, DEI (diversity, equity, and inclusion), and economic opportunities that directly benefit youth.
            </Paragraph>

            

            <SectionTitle>High-Level Interventions</SectionTitle>
            <Paragraph>
              We actively participate in high-level international and national conferences, presenting written and oral interventions to highlight the importance of youth perspectives.
            </Paragraph>

            <SectionTitle>Stakeholder Bilaterals</SectionTitle>
            <Paragraph>
              We conduct bilateral meetings with key stakeholders, including diplomats, NGOs, and policymakers. These one-on-one interactions allow us to directly advocate and foster strong relationships with influential
              decision-makers.
            </Paragraph>

            <SectionTitle>Written Submissions</SectionTitle>
            <Paragraph>
              We provide written submissions and detailed input on key conventions, treaties, and legislation. Our contributions are based on rigorous research and the lived experiences of young people, ensuring that the policies being developed are informed by youth needs and perspectives.
            </Paragraph>

            <SectionTitle>Side Events</SectionTitle>
            <Paragraph>
              We use side events as powerful platforms to advance our advocacy, elevate youth voices, and influence global dialogue. We organize and participate in these events alongside major conferences to spotlight critical issues, present youth-led solutions, and engage directly with decision-makers.
            </Paragraph>

            
          </Left>

          <Right>
            <RightSectionTitle>Get Involved</RightSectionTitle>
            <Fact>
              <FactTitle>Join Our Network</FactTitle>
              <FactDescription>
                Connect with other advocates and stay updated on our initiatives
              </FactDescription>
            </Fact>

            <Fact>
              <FactTitle>Take Action</FactTitle>
              <FactDescription>
                Participate in our advocacy campaigns and make your voice heard
              </FactDescription>
            </Fact>

            <Fact>
              <FactTitle>Learn More</FactTitle>
              <FactDescription>
                Explore our research and resources on youth advocacy
              </FactDescription>
            </Fact>
            <SectionTitle>Ethical Advocacy</SectionTitle>
            <Paragraph>
              Guided by principles of neutrality, integrity, respect, and lawfulness, we ensure that our work upholds the highest moral standards.
            </Paragraph>
            <Paragraph>
              We remain politically neutral, advocating for policies — not parties or countries — that serve youth interests.
            </Paragraph>
            <Paragraph>
              Honesty, fairness, and ethical conduct guide every decision we make.
            </Paragraph>
            <Paragraph>
              We engage with all individuals and institutions with dignity and respect, even when perspectives differ.
            </Paragraph>
            <Paragraph>
              We adhere to all relevant rules, regulations, and frameworks in every space we engage.
            </Paragraph>
          </Right>
        </Main>
      </BorderedContentWrapper>

      <LeadershipSection>
        <LeadershipContainer>
          <LeadershipTitleRow>
            <LeadershipTitle>Our Advocacy Team</LeadershipTitle>
            <LeadershipSubtitle>
              Meet the dedicated individuals leading our advocacy efforts
            </LeadershipSubtitle>
          </LeadershipTitleRow>
          <LeadershipCardsRow>
            <LeadershipCard>
              <LeaderImg $isColor={true} />
              <LeaderName>Dr. Sarah Chen</LeaderName>
              <LeaderRole>Head of Advocacy</LeaderRole>
              <LeaderDesc>
                Leading our global advocacy initiatives and policy development
              </LeaderDesc>
            </LeadershipCard>
            <LeadershipCard>
              <LeaderImg $isColor={true} />
              <LeaderName>Michael Rodriguez</LeaderName>
              <LeaderRole>Director of Youth Engagement</LeaderRole>
              <LeaderDesc>
                Spearheading youth representation and capacity building
              </LeaderDesc>
             
            </LeadershipCard>
            <LeadershipCard>
              <LeaderImg $isColor={true} />
              <LeaderName>Dr. Aisha Patel</LeaderName>
              <LeaderRole>Policy Research Lead</LeaderRole>
              <LeaderDesc>
                Driving evidence-based policy recommendations
              </LeaderDesc>
             
            </LeadershipCard>
          </LeadershipCardsRow>
        </LeadershipContainer>
      </LeadershipSection>
    </>
  );
};

export default Advocacy; 