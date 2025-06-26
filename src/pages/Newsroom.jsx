import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ABBOT_BLUE = '#44b8f3';
const DARK_BLUE = '#002147';
const PAGE_BACKGROUND_COLOR = '#E7F1FA';

const NewsroomContainer = styled.div`
  background-color: ${PAGE_BACKGROUND_COLOR};
  padding: 4rem 15vw;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem 5vw;
  }
`;

const PageTitle = styled.h1`
  font-family: var(--andover-font-serif);
  font-size: 3.5rem;
  color: ${DARK_BLUE};
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const NewsCard = styled(Link)`
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 140px;
  }
`;

const NewsContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const NewsTitle = styled.h2`
  font-family: var(--andover-font-serif);
  font-size: 1.6rem;
  color: ${DARK_BLUE};
  margin-top: 0;
  margin-bottom: 0.8rem;
  font-weight: bold;
`;

const NewsSummary = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 0.95rem;
  color: ${DARK_BLUE};
  opacity: 0.7;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const NewsDate = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 0.85rem;
  color: ${DARK_BLUE};
  opacity: 0.5;
  margin-top: auto;
  margin-bottom: 0;
`;

const articles = [
  {
    id: '1',
    image: '/Article-1.jpeg',
    title: 'YouthCubed Nominates 2 Global Youth ​Representative for the Summit of the Future',
    summary: 'We\'re proud to announce the nomination of Fale Andrew ​Lesa JP and Alexa Dominique Pascual to the Summit of the ​Future as Global Youth Representatives.',
    date: 'August 7 2024',
  },
  {
    id: '2',
    image: '/Article-2.jpeg',
    title: 'DMUN Foundation @ FfD4',
    summary: 'Learn more about how we have been invited by the UNGA ​President to participate in the Fourth International ​Conference on Financing for Development.',
    date: 'July 19, 2023',
  },
  {
    id: '3',
    image: '/Article-3.jpeg',
    title: 'COP28 UAE',
    summary: 'Learn more about our engagement at COP28 UAE as a ​youth-led civil society stakeholder.',
    date: 'Dec 13, 2023',
  },
  {
    id: '4',
    image: '/Article-4.jpeg',
    title: "Founder's Analysis: End of Online MUN?",
    summary: "Learn more about our Executive Director & Founder, Mr. Jaewon Choi's analysis on the future of virtual Model UN.",
    date: 'July 22, 2024',
  },
  
];

const Newsroom = () => {
  return (
    <NewsroomContainer>
      <PageTitle>Newsroom</PageTitle>
      <NewsGrid>
        {articles.map((article) => (
          <NewsCard key={article.id} to={`/newsroom/${article.id}`}>
            <NewsImage src={article.image} alt={article.title} />
            <NewsContent>
              <NewsTitle>{article.title}</NewsTitle>
              <NewsSummary>{article.summary}</NewsSummary>
              <NewsDate>{article.date}</NewsDate>
            </NewsContent>
          </NewsCard>
        ))}
      </NewsGrid>
    </NewsroomContainer>
  );
};

export default Newsroom; 