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
  margin: 2.5rem 0 1.2rem 0;
  font-family: var(--andover-font-serif);
  color: ${DARK_BLUE};
  border: none; /* Ensure no border on SectionTitle */
`;
const Fact = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  font-family: var(--andover-font-serif);
  color: ${DARK_BLUE};
  border: none; /* Ensure no border on Fact */
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

  svg {
    width: 0.8rem; /* Adjusted for smaller arrow size */
    height: auto;
    margin-left: 0.3em; /* Space between text and arrow */
    vertical-align: middle;
    stroke: ${LIGHT_BLUE}; /* Match color to link */
    transform: translateY(-1px); /* Adjusted to raise the arrow by 2 points */
  }
`;
const NavArrow = styled.span`
  color: ${LIGHT_BLUE};
  font-size: 2rem;
  position: absolute;
  bottom: 2.5rem;
  left: ${({ right }) => (right ? 'unset' : '2.5rem')};
  right: ${({ right }) => (right ? '2.5rem' : 'unset')};
  cursor: pointer;
  user-select: none;
  border: none; /* Ensure no border on NavArrow */
`;
const LandAck = styled.section`
  margin: 2.5rem 0;
  border: none; /* Ensure no border on LandAck */
`;

// New styled components for the subnavigation section
const SubnavSection = styled.section`
  border-left: 17px solid ${ABBOT_BLUE}; /* Set all borders to 17px */
  border-right: 17px solid ${ABBOT_BLUE}; /* Set all borders to 17px */
  width: 100%;
  background-color: ${PAGE_BACKGROUND_COLOR}; /* Changed to blend with general page color */
  padding: 2.5rem 0; /* Reduced top padding to bring content higher */
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;

const SubnavContentWrapper = styled.div`
  max-width: 1200px; /* Constrain content width */
  margin: 0 auto; /* Center the content */
  padding: 0 3vw; /* Horizontal padding */

  @media (max-width: 768px) {
    padding: 0 2vw;
  }
`;

const SubnavHeading = styled.h2`
  font-family: var(--andover-font-serif);
  font-weight: bold;
  color: #000; /* Pure black as per image for heading */
  font-size: 2.5rem; /* Matches ~26-32px range */
  text-align: center;
  margin: -1rem 0 0 0; /* Adjusted margin-top to create more space */
  padding-top: 0rem; /* Already at its minimum, so no change */
  padding-bottom: 2rem; /* Adjusted bottom padding to bring links closer to heading */

  @media (max-width: 768px) {
    font-size: 2rem;
    padding-top: 0; /* Adjusted mobile padding */
    padding-bottom: 1rem; /* Adjusted mobile padding */
    margin-top: -0.75rem; /* Adjusted mobile margin-top */
  }
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

const SubnavLink = styled.a`
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

// Replicating ArrowIcon from Header.jsx for consistent styling
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter">
    <polyline points="2 2 12 12 22 2"></polyline>
  </svg>
);

// Updating CaretIcon to use the new ArrowIcon SVG and match header styling more precisely
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

const BuildingIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 2L3 7v14h18V7L12 2zm0 2.236l7 3.889V9H5V6.125l7-3.889zM5 11h14v8H5v-8zm2 2h2v4H7v-4zm4 0h2v4h-2v-4zm4 0h2v4h-2v-4z"/>
  </svg>
);

const About = () => (
  <>
    <AboutHeroWrapper>
      <AboutHeroText>About Us</AboutHeroText>
    </AboutHeroWrapper>
    <SubnavSection>
      <SubnavContentWrapper>
        <YellowIconGraphic>
          <BuildingIconSVG />
        </YellowIconGraphic>
        <SubnavHeading>ABOUT</SubnavHeading>
        <SubnavLinksContainer>
          <SubnavLink href="#">Our Mission <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
          <SubnavLink href="#">Our History <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
          <SubnavLink href="#">Our Philosophy <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
          <SubnavLink href="#">Annual Reports <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
          <SubnavLink href="#">Impact <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
        </SubnavLinksContainer>
      </SubnavContentWrapper>
    </SubnavSection>
    <BorderedContentWrapper>
      <Main>
        <Left>
         
          <SectionTitle>OUR MISSION</SectionTitle>
          <p>The DMUN Foundation is a youth-led, non-profit, non-governmental organisation.</p> 
          <p>We empower youths to be active and valid stakeholders.</p>
          <p>We provide opportunities for youths to learn about international relations, diplomacy, legislative bodies, social entrepreneurship, sustainability, and greater youth participation in the intergovernmental system.</p>

          <SectionTitle>Our History and Origins</SectionTitle>
          <p>Our journey began with a middle school student's ​vision to democratize education and make ​programs like Model United Nations (MUN) ​accessible to all. Inspired by the exclusivity and ​high costs of such programs, this young visionary ​embarked on creating a platform that would break ​down financial barriers and provide equal learning ​opportunities in politics, governance, and ​international relations.

Through dedication and a commitment to ​inclusivity, our organization quickly grew, ​connecting students worldwide. Today, we stand ​as a testament to the power of youth-driven ​initiatives and the belief that education should ​know no bounds.</p>

         

          <SectionTitle>OUR PHILOSOPHY OF CHANGE</SectionTitle>
          <p>We create a linear platform to identify, nurture, and support young leaders.</p>
          <p>All of our programs and initiatives support each other in coherence. We believe that through our philosophy of change, our youth education programs, policy research, and policy advocacy form a trifecta of youth-led leadership and change.</p>
          <p>If youth receive the opportunities to learn about global issues,<br/>Then, they will want to create action to address these issues.<br/>If we provide platforms of advocacy for youths willing to take action,<br/>Then, they are able to create meaningful progress.<br/>If this cycle of change continues,<br/>Then, more youths will be involved in creating positive contributions,<br/>As a combined result, the world becomes a better place.</p>
          
          <SectionTitle>Our Annual Reports</SectionTitle>
          <p>View Our Annual Reports</p>
          <button href="#">Annual Reports</button>
          

          <SectionTitle>WE HAVE SUCCESSFULLY ADVOCATED IN</SectionTitle>
          {/* Placeholder for images as indicated by the user's text */}
          <p>Our milestones speak louder than words.</p>
          <p>Throughout our journey, we've proudly set new records and marked historic firsts that reflect our commitment to youth empowerment and innovation. These accomplishments are proof of what's possible when young people lead with purpose.</p>
          <ul>
            <li>We operate the world's largest virtual Model UN conference.</li>
            <li>We are the first organization to nominate people under the age of 18 to participate in 6 UN conferences.</li>
            <li>Our advocacy eliminated the minimum age requirement in the United Nations Financing for Development Conferences.</li>
            <li>We are the first youth-led organization to participate as Observer in 3 Intergovernmental Bodies and Organizations. (AHC Tax, OPCW, IPBES)</li>
            <li>We are the first NGO dedicated in intergovernmental advocacy to have a leadership body comprised of majority people under the age of 18.</li>
            <br></br><br></br>
          </ul>
        </Left>
        <Right>
          <SectionTitle>OUR IMPACT IN NUMBERS</SectionTitle>
          <p style={{marginBottom: '2rem'}}>Numbers don't lie.<br/>Neither does our impact.</p>
          <Fact><strong>26k</strong><br/>Total participants in our program.</Fact>
          <Fact><strong>24k</strong><br/>Raised for the Foundation in FY 2024 (in USD)</Fact>
          <Fact><strong>161</strong><br/>Countries represented</Fact>
          <Fact><strong>37</strong><br/>Intergovernmental bodies and conferences engaged</Fact>
          <Fact><strong>32</strong><br/>Inputs, statement, and interventions produced in 2024</Fact>
          <Fact><strong>12</strong><br/>Programs operated in 2025</Fact>
          <p style={{marginTop: '2rem'}}>Help us continue to make history.<br/>Take action. Contribute.</p>
         <button href="#">Discover More</button>
        </Right>
      </Main>
      <LeadershipSection>
        <LeadershipContainer>
          <LeadershipTitleRow>
            <LeadershipTitle>Leadership</LeadershipTitle>
            <LeadershipSubtitle>
              Meet the dedicated individuals who guide our mission and inspire our community.
            </LeadershipSubtitle>
            
          </LeadershipTitleRow>
          <LeadershipCardsRow>
            <LeadershipCard>
              <LeaderImg style={{ backgroundImage: 'url("/jaewon-picture.jpg")' }} $isColor={true}/>
              <LeaderName>Jaewon Choi</LeaderName>
              <LeaderRole>Executive Director</LeaderRole>
              <LeaderDesc>
                John Doe leads Andover with a vision for innovative education and global citizenship.
              </LeaderDesc>
              <LeaderLink href="https://www.linkedin.com/in/jaewonchoidmun/">Learn More</LeaderLink>
            </LeadershipCard>
            <LeadershipCard>
              <LeaderImg style={{ backgroundImage: 'url("/atharv-singh-professional.jpeg")' }} $isColor={true}/>
              <LeaderName>Atharv Singh</LeaderName>
              <LeaderRole>Deputy Executive Director</LeaderRole>
              <LeaderDesc>
                Jane Smith oversees academic programs, fostering excellence in teaching and learning.
              </LeaderDesc>
              <LeaderLink href="https://www.linkedin.com/in/atharv-singh-b21159369/">Learn More</LeaderLink>
            </LeadershipCard>
            <LeadershipCard>
            <LeaderImg style={{ backgroundImage: 'url("/jacob-picture.jpg")' }} $isColor={true}/>
              <LeaderName>Jacob Greene</LeaderName>
              <LeaderRole>Special Envoy on Organizational
              Reformation</LeaderRole>
              <LeaderDesc>
                Michael Brown guides prospective students through the admissions process.
              </LeaderDesc>
              <LeaderLink href="https://www.linkedin.com/in/jacob-greene-822687268/">Learn More</LeaderLink>
            </LeadershipCard>
           
          </LeadershipCardsRow>
        </LeadershipContainer>
      </LeadershipSection>
    </BorderedContentWrapper>
  </>
);

export default About; 