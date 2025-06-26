import styled from 'styled-components';
import TiltedCard from '../components/TiltedCard';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SplitText from '../components/SplitText';

const ABBOT_BLUE = '#44b8f3'; // The new primary color
const DARK_BLUE = '#002147'; // Keeping for high contrast on light backgrounds
const LIGHT_BLUE = '#97e1e6'; // Assuming a light blue color for the filled part or other accents

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // Even faster duration for section entry
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.05 // Even smaller stagger for children
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // Even faster duration for individual items
      ease: "easeOut"
    }
  }
};

// Main content frame with refined structure
const MainContentFrame = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  border-left: 17px solid ${ABBOT_BLUE};
  border-right: 17px solid ${ABBOT_BLUE};
  box-sizing: border-box;
  /* overflow: hidden; */ /* Temporarily removed to diagnose folder visibility */
  background-color: white;
`;

// Content wrapper for the actual content (excluding hero)
const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: 1024px) {
    padding: 0 4rem;
  }
`;

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 70px);
  min-height: 40rem;
  background: url('/hero-home.jpeg') center/cover no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  z-index: 1;
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-height: 60vw;
    align-items: center;
    justify-content: center;
    background-position: center center;
    text-align: center;
  }
`;

const StatsSection = styled.section`
  margin: 4rem 0;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  border: 2px dotted ${ABBOT_BLUE};

  @media (max-width: 768px) {
    margin: 2rem 0;
    padding: 1.5rem;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StatBox = styled.div`
  border-right: 1px dashed ${ABBOT_BLUE};
  border-bottom: 1px dashed ${ABBOT_BLUE};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: var(--andover-font-serif);
  color: ${DARK_BLUE};
  text-align: center;
  grid-column: ${props => props.gridColumn || 'span 3'};
  grid-row: ${props => props.gridRow || 'auto'};

  @media (max-width: 768px) {
    grid-column: span 1;
    border-right: none;
    border-bottom: 1px dashed ${ABBOT_BLUE};
    padding: 1rem;
    width: 100%;
    max-width: 100%;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const StatIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 0.8rem;
  color: ${DARK_BLUE};
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: ${DARK_BLUE};
`;

const StatLabel = styled.div`
  font-size: 1rem;
  text-align: center;
  color: ${DARK_BLUE};
  font-family: var(--andover-font-sans);
`;

// SVG Pie Chart component for animation
const StatPieChartSVG = ({ percentage }) => {
  const radius = 45; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', marginBottom: '0.8rem' }}>
      {/* Background circle */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke={DARK_BLUE} /* Use dark blue for the unfilled part */
        strokeWidth="10"
      />
      {/* Animated circle */}
      <motion.circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke={ABBOT_BLUE} /* Use Abbot Blue for the filled part */
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: strokeDashoffset }}
        transition={{ duration: 0.5, ease: 'easeOut' }} /* Reduced duration for faster animation */
      />
    </svg>
  );
};

const StatPieChartLabel = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: ${DARK_BLUE};
  margin-bottom: 0.4rem;
  font-family: var(--andover-font-serif);
`;

const StatPieChartSubLabel = styled.div`
  font-size: 0.8rem;
  color: ${DARK_BLUE};
  text-align: center;
  font-family: var(--andover-font-sans);
`;

// Placeholder icons
const GlobeIcon = () => <span>🌐</span>;
const USAIcon = () => <span>🇺🇸</span>;
const BuildingIcon = () => <span>🏛️</span>;
const BookIcon = () => <span>📖</span>;
const HandsIcon = () => <span>✋✋✋</span>;
const CityIcon = () => <span>🏙️</span>;
const TownIcon = () => <span>🏘️</span>;

// Array of stat data
const statsData = [
  { id: 1, type: 'pie', percentage: 75, label: 'STUDENTS', subLabel: '25% DAY', number: '1165', pieLabel: '75% BOARDING', gridColumn: 'span 3' },
  { id: 2, type: 'icon', icon: <GlobeIcon />, label: 'COUNTRIES', number: '46', gridColumn: 'span 3' },
  { id: 3, type: 'icon', icon: <USAIcon />, label: 'STATES/TERRITORIES', number: '43', gridColumn: 'span 3' },
  { id: 4, type: 'pie', percentage: 47, label: 'STUDENTS RECEIVE FINANCIAL AID', number: '47%', gridColumn: 'span 3' },
  { id: 5, type: 'icon', icon: <BuildingIcon />, label: 'OF NEED-BLIND ADMISSION', number: '17 years', gridColumn: 'span 3 / span 3', gridRow: 'span 2 / span 2' },
  { id: 6, type: 'icon', icon: <HandsIcon />, label: 'INTERSCHOLASTIC TEAMS IN<br/>DIFFERENT SPORTS', number: '70+<br/>23', gridColumn: 'span 3 / span 3', gridRow: 'span 1 / span 1' },
  { id: 7, type: 'icon', icon: <BookIcon />, label: 'COURSES WITH<br/>ELECTIVES', number: '300+<br/>150', gridColumn: 'span 3 / span 3', gridRow: 'span 2 / span 2' },
  { id: 8, type: 'icon', icon: <HandsIcon />, label: 'STUDENTS IN THE AVERAGE CLASS', number: '13', gridColumn: 'span 3 / span 3', gridRow: 'span 1 / span 1' },
  { id: 9, type: 'text', label: 'STUDENTS ENGAGED IN COMMUNITY<br/>ENGAGEMENT PROGRAMS EACH TERM', number: '400+', gridColumn: 'span 3 / span 3', gridRow: 'span 1 / span 1' },
  { id: 10, type: 'icon', icon: <CityIcon />, label: 'MILES TO BOSTON', number: '21', gridColumn: 'span 3 / span 3', gridRow: 'span 1 / span 1' },
  { id: 11, type: 'icon', icon: <TownIcon />, label: 'MINUTE-WALK TO THE<br/>TOWN OF ANDOVER', number: '10', gridColumn: 'span 3 / span 3', gridRow: 'span 1 / span 1' },
];

const DayLifeSection = styled(motion.section)`
  margin: 4rem 0;
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const DayLifeTitle = styled.h2`
  grid-column: 1 / -1;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${DARK_BLUE};
  font-family: var(--andover-font-serif);
  text-align: center;
`;

const Circles = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  justify-items: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }
`;

// Styled components for Day in the Life text elements
const DayInLifeText = styled.div`
  grid-column: span 4;
  text-align: center;
  color: ${DARK_BLUE};
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    grid-column: span 12;
  }

  h3 {
    font-family: var(--andover-font-serif);
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${DARK_BLUE};
  }

  p {
    font-family: var(--andover-font-sans);
    font-size: 1.1rem;
    margin: 0;
    color: ${DARK_BLUE};
    line-height: 1.6;
  }
`;

// New styled component for consistent padding and alignment within GlanceSectionContainer
const GlanceContentArea = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 3rem; /* Consistent gap */
  padding: 0 4rem; /* Padding inside the bordered frame */
  align-items: stretch; /* Allow items to stretch to fill the height */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack on mobile */
    padding: 0 2rem; /* Adjusted mobile padding */
    gap: 2rem; /* Adjusted mobile gap */
  }
`;

const GlanceSectionContainer = styled(motion.section)`
  margin: 4rem 0; /* Add margin to the section */
  background: white; /* Add white background */
  border-radius: 1rem; /* Add rounded corners */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* Add shadow */
  overflow: hidden;
`;

const GlanceImageColumn = styled.div`
  grid-column: span 6;
  min-width: 0;

  img {
    width: 100%;
    height: 100%; /* Make image height fill the container */
    object-fit: cover;
    border-radius: 1rem;
    transition: opacity 300ms ease-in-out;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    grid-column: span 12;
    img {
      height: 300px; /* Fixed height for mobile */
    }
  }
`;

const GlanceContentColumn = styled.div`
  grid-column: span 6;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-column: span 12;
  }
`;

const GlanceHeader = styled.div`
  text-transform: uppercase; /* Equivalent to uppercase */
  font-size: 0.875rem; /* Equivalent to text-sm */
  letter-spacing: 0.05em; /* Equivalent to tracking-wider */
  color: #a0a0a0; /* Equivalent to text-gray-400 */
  margin-bottom: 2rem; /* Space below the header */
`;

const GlanceTextBlock = styled.div`
  cursor: pointer;
  border: 1.5px solid #e0e0e0;
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all 300ms ease-in-out;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  border-left: ${({ $isHovered }) => ($isHovered ? `4px solid ${ABBOT_BLUE}` : `1.5px solid #e0e0e0`)};

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    letter-spacing: -0.025em;
    margin-bottom: 0.75rem;
    transition: color 300ms ease-in-out;
  }

  p {
    font-size: 1rem;
    color: #777;
    margin-top: 0.5rem;
    line-height: 1.6;
  }

  &:hover {
    border-color: ${ABBOT_BLUE};
    background-color: #f9f9f9;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    h3 {
      color: ${ABBOT_BLUE};
    }
  }
`;

const NewsSection = styled(motion.section)`
  margin: 4rem 0;
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const NewsTitle = styled.h2`
  grid-column: 1 / -1;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${DARK_BLUE};
  font-family: var(--andover-font-serif);
`;

const NewsGrid = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  justify-content: center;
`;

const NewsCard = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

const NewsImg = styled.div`
  background: url('https://via.placeholder.com/260x140?text=News') center/cover no-repeat;
  height: 140px;
`;

const NewsContent = styled.div`
  padding: 1.5rem;
  color: ${DARK_BLUE};

  h3 {
    font-family: var(--andover-font-serif);
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    color: ${DARK_BLUE};
  }

  p {
    font-family: var(--andover-font-sans);
    font-size: 1rem;
    margin: 0;
    color: ${DARK_BLUE};
    line-height: 1.6;
  }
`;

const EventsSection = styled(motion.section)`
  margin: 4rem 0 0 0; /* Removed bottom margin */
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const EventsTitle = styled.h2`
  grid-column: 1 / -1;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${DARK_BLUE};
  font-family: var(--andover-font-serif);
`;

const EventsGrid = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  justify-content: center;
`;

const EventCard = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  color: ${DARK_BLUE};
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }

  h4 {
    font-family: var(--andover-font-serif);
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
    color: ${DARK_BLUE};
  }

  div {
    font-family: var(--andover-font-sans);
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: ${DARK_BLUE};
    line-height: 1.6;
  }
`;

// Data for the interactive section (Placeholder)
const glanceData = [
  { id: 1, title: 'Need-Blind Admission', subtext: 'We are committed to enrolling the most qualified students regardless of their family\'s financial situation.', imageUrl: '/Youth-Advocacy.png' },
  { id: 2, title: 'Academic Excellence', subtext: 'Explore our rigorous curriculum and dedicated faculty who foster intellectual curiosity.', imageUrl: '/dmun-event-image.png' },
  { id: 3, title: 'Student Life', subtext: 'Discover a vibrant community with diverse activities, clubs, and traditions.', imageUrl: '/dmun-logo.png' },
  { id: 4, title: 'Global Engagement', subtext: 'Learn about our programs that connect students with the world beyond campus.', imageUrl: '/Youth-Advocacy.png' },
];

const Home = () => {
  const [activeImage, setActiveImage] = useState(glanceData[0].imageUrl);
  const [hoveredItemId, setHoveredItemId] = useState(null);

  return (
    <MainContentFrame>
      <HeroWrapper className="dmun-hero-section">
        <SplitText
          text="Representing Youth,
      Building Leaders."
          className="dmun-hero-text"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="words, chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          style={{
            position: 'relative',
            zIndex: 3,
            color: '#FFFFFF',
            fontSize: '6vw',
            fontFamily: 'Benton Sans Compressed Bold, var(--andover-font-sans)',
            fontWeight: 700,
            letterSpacing: '0.01em',
            textShadow: 'none',
            textAlign: 'center',
          }}
        />
      </HeroWrapper>

      <ContentWrapper>
        <StatsSection>
          {statsData.map((stat) => (
            <StatBox
              key={stat.id}
              style={{ gridColumn: stat.gridColumn, gridRow: stat.gridRow }}
            >
              {stat.type === 'pie' && (
                <>
                  <StatPieChartSVG percentage={stat.percentage} />
                  <StatPieChartLabel>{stat.pieLabel}</StatPieChartLabel>
                  {stat.subLabel && <StatPieChartSubLabel>{stat.subLabel}</StatPieChartSubLabel>}
                </>
              )}
              {stat.type === 'icon' && <StatIcon>{stat.icon}</StatIcon>}
              {(stat.type === 'icon' || stat.type === 'text' || stat.type === 'pie') && (
                <>
                  {(stat.type === 'icon' || stat.type === 'text') && (
                    <StatNumber dangerouslySetInnerHTML={{ __html: stat.number }} />
                  )}
                  {(stat.type === 'icon' || stat.type === 'text') && (
                    <StatLabel dangerouslySetInnerHTML={{ __html: stat.label }} />
                  )}
                  {/* Handle the specific case for the first pie chart that also has a main number and label */}
                  {stat.id === 1 && (
                    <>
                      <StatNumber dangerouslySetInnerHTML={{ __html: stat.number }} />
                      <StatLabel dangerouslySetInnerHTML={{ __html: stat.label }} />
                    </>
                  )}
                </>
              )}
            </StatBox>
          ))}
        </StatsSection>

        <GlanceSectionContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <GlanceContentArea>
            <GlanceImageColumn>
              <img src={activeImage} alt="" />
            </GlanceImageColumn>
            <GlanceContentColumn>
              <GlanceHeader>At a Glance</GlanceHeader>
              {glanceData.map((item) => (
                <GlanceTextBlock
                  key={item.id}
                  $isHovered={hoveredItemId === item.id}
                  onMouseEnter={() => {
                    setActiveImage(item.imageUrl);
                    setHoveredItemId(item.id);
                  }}
                  onMouseLeave={() => {
                    setActiveImage(glanceData[0].imageUrl);
                    setHoveredItemId(null);
                  }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.subtext}</p>
                </GlanceTextBlock>
              ))}
            </GlanceContentColumn>
          </GlanceContentArea>
        </GlanceSectionContainer>

        <DayLifeSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <DayLifeTitle>A Day in the Life</DayLifeTitle>
          <Circles>
            <motion.div variants={itemVariants}> {/* Apply itemVariants to TiltedCard wrapper */}
              <TiltedCard 
                imageSrc="/jaewon-picture.jpg"
                imageAlt="Student 1"
                title="Early Morning" 
                text="The day begins bright and early with morning classes and engaging discussions."
                containerHeight="280px" 
                containerWidth="280px" 
                imageHeight="280px" 
                imageWidth="280px"
                rotateAmplitude={5} /* Reduced rotation */
                scaleOnHover={1.05} /* Subtle scale on hover */
                boxShadow="0 8px 16px rgba(0,0,0,0.2)" /* Clearer shadow */
                borderRadius="10px" /* Sharper corners */
              />
            </motion.div>
            <motion.div variants={itemVariants}> {/* Apply itemVariants to TiltedCard wrapper */}
              <TiltedCard 
                imageSrc="/atharv-singh-professional.jpeg"
                imageAlt="Student 2"
                title="Afternoon Activities" 
                text="After classes, students participate in a wide range of extracurricular activities."
                containerHeight="280px" 
                containerWidth="280px" 
                imageHeight="280px" 
                imageWidth="280px"
                rotateAmplitude={5}
                scaleOnHover={1.05}
                boxShadow="0 8px 16px rgba(0,0,0,0.2)"
                borderRadius="10px"
              />
            </motion.div>
            <motion.div variants={itemVariants}> {/* Apply itemVariants to TiltedCard wrapper */}
              <TiltedCard 
                imageSrc="/jacob-picture.jpg"
                imageAlt="Student 3"
                title="Evening Programs" 
                text="Evenings are filled with study groups, club meetings, and social events."
                containerHeight="280px" 
                containerWidth="280px" 
                imageHeight="280px" 
                imageWidth="280px"
                rotateAmplitude={5}
                scaleOnHover={1.05}
                boxShadow="0 8px 16px rgba(0,0,0,0.2)"
                borderRadius="10px"
              />
            </motion.div>
          </Circles>
           {/* Adding placeholder text elements for the Day in the Life section */}
          <DayInLifeText>
            <h3>Morning Classes</h3>
            <p>Students engage in rigorous academic discussions and collaborative learning.</p>
          </DayInLifeText>
          <DayInLifeText>
            <h3>Lunch Break</h3>
            <p>A time for students to relax, socialize, and recharge for the afternoon.</p>
          </DayInLifeText>
           <DayInLifeText>
            <h3>Afternoon Activities</h3>
            <p>Students participate in sports, arts, and other extracurricular activities.</p>
          </DayInLifeText>
        </DayLifeSection>
        <NewsSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <NewsTitle>DMUN NEWS</NewsTitle>
          <NewsGrid>
            <NewsCard>
              <NewsImg />
              <NewsContent>
                <h3>Celebrating Commencement</h3>
                <p>View photos, videos and a recap of Commencement Weekend.</p>
              </NewsContent>
            </NewsCard>
            <NewsCard>
              <NewsImg />
              <NewsContent>
                <h3>2025 Athletics Hall of Honor</h3>
                <p>2025 Athletics Hall of Honor inductees selected.</p>
              </NewsContent>
            </NewsCard>
            <NewsCard>
              <NewsImg />
              <NewsContent>
                <h3>'A night to remember'</h3>
                <p>Highlights from recent campus events and celebrations.</p>
              </NewsContent>
            </NewsCard>
          </NewsGrid>
        </NewsSection>
        <EventsSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <EventsTitle>Upcoming Events</EventsTitle>
          <EventsGrid>
            <EventCard>
           <a href="#">
              <h4>June 6–8</h4>
              <div>Reunions@Andover 2025</div>
              <div>1:00 p.m.</div>
              </a>
            </EventCard>
            <EventCard>
           <a href="#">
              <h4>June 6–8</h4>
              <div>Reunions@Andover 2025</div>
              <div>1:00 p.m.</div>
              </a>
            </EventCard>
            <EventCard>
           <a href="#">
              <h4>June 6–8</h4>
              <div>Reunions@Andover 2025</div>
              <div>1:00 p.m.</div>
              </a>
            </EventCard>
            <EventCard>
           <a href="#">
              <h4>June 6–8</h4>
              <div>Reunions@Andover 2025</div>
              <div>1:00 p.m.</div>
              </a>
            </EventCard>
          </EventsGrid>
        </EventsSection>
      </ContentWrapper>
    </MainContentFrame>
  );
};

export default Home; 