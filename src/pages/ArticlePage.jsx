import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';

const ABBOT_BLUE = '#44b8f3';
const DARK_BLUE = '#002147';
const PAGE_BACKGROUND_COLOR = '#E7F1FA';

const ArticleContainer = styled.div`
  background-color: ${PAGE_BACKGROUND_COLOR};
  padding: 4rem 30vw;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem 15vw;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  color: ${DARK_BLUE};
  text-decoration: none;
  margin-bottom: 2rem;
  font-family: var(--andover-font-sans);
  font-size: 1rem;
  
  &:hover {
    color: ${ABBOT_BLUE};
  }
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 2rem;
`;

const ArticleTitle = styled.h1`
  font-family: var(--andover-font-serif);
  font-size: 2.2rem;
  color: ${DARK_BLUE};
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const ArticleDate = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 1.5rem;
  color: ${DARK_BLUE};
  opacity: 1;
  margin-bottom: 0.2rem;
  font-weight: bold;
`;

const ArticleContent = styled.div`
  font-family: var(--andover-font-sans);
  font-size: 1rem;
  line-height: 1.7;
  color: ${DARK_BLUE};

  strong {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    margin-top: 1.5rem;
    font-size: 1.1rem;
  }

  p {
    font-weight: normal;
    margin-bottom: 1em;
  }
`;

const articles = [
  {
    id: '1',
    image: '/Article-1.jpeg',
    title: 'Two Youth Changemakers Selected to Attend the UN\'s High-Level Summit for the Next Generation',
    summary: 'We\'re proud to announce the nomination of Fale Andrew ​Lesa JP and Alexa Dominique Pascual to the Summit of the ​Future as Global Youth Representatives.',
    date: 'August 7 2024',
    content: 'YouthCubed, a member organization of the DMUN Foundation, is proud to announce the nomination of Fale Andrew Lesa JP and Alexa Dominique Pascual as Global Youth Representatives for the upcoming Summit of the Future. These individuals were selected for their exceptional leadership and unwavering commitment to addressing critical global challenges, making them ideal candidates to represent the voices of youth at this pivotal international gathering.\n\n' +
    '<strong>Fale Andrew Lesa JP</strong>\n' +
    'Fale Andrew Lesa, hailing from Samoa, is a highly respected indigenous leader and policy consultant. He has a distinguished track record of advocating for climate justice, particularly for small island developing states (SIDS), which are among the most vulnerable to the impacts of climate change. Fale\'s work spans various high-profile roles, including serving on the Auckland Conservation Board and as a commissioner on the Child & Youth Mortality Review Committee in New Zealand. His expertise in public policy and his deep commitment to integrating traditional knowledge into modern climate solutions have positioned him as a key figure in the global climate movement. As a Global Youth Representative, Fale aims to elevate the concerns of SIDS and indigenous communities, ensuring that their unique challenges and perspectives are central to the discussions at the Summit of the Future.\n\n' +
    '<strong>Alexa Dominique Pascual</strong>\n' +
    'Alexa Dominique Pascual, from the United States, is a dynamic youth leader with a strong focus on women\'s rights and climate activism. She has represented various organizations, including the Major Group for Children and Youth (MGCY) and UNA-USA, at international forums such as the United Nations General Assembly. Alexa is deeply involved in advocacy for gender equity and has been a vocal proponent of increasing youth participation in diplomacy and policy-making. Her experience in leading discussions on global sustainability and human rights makes her an invaluable voice at the Summit of the Future. Alexa\'s commitment to diversifying the field of international relations and ensuring that young women are at the forefront of global decision-making processes aligns with the core values of YouthCubed.\n\n' +
    '<strong>YouthCubed\'s Vision for the Summit of the Future</strong>\n' +
    'The nomination of Fale Andrew Lesa JP and Alexa Dominique Pascual underscores YouthCubed\'s dedication to fostering youth leadership in global governance. By amplifying the voices of young leaders who are deeply connected to their communities and passionate about sustainable development, YouthCubed is working to ensure that the outcomes of the Summit of the Future are inclusive and equitable. These representatives will bring crucial insights to the table, advocating for the rights and futures of marginalized groups and pushing for policies that reflect the aspirations of the younger generation.\n\n' +
    'Jaewon Choi, the founder of YouthCubed and the Executive Director of the DMUN Foundation, expressed his confidence in the nominees: "Fale and Alexa embody the spirit of YouthCubed—bold, innovative, and unyielding in their pursuit of a better world. Their participation in the Summit of the Future is a testament to the power of youth to drive meaningful change on the global stage."\n\n' +
    'As the world prepares for the Summit of the Future, YouthCubed remains committed to supporting these young leaders in their mission to create a more just and sustainable world.'
  },
  {
    id: '2',
    image: '/Article-2.jpeg',
    title: 'DMUN Foundation Secures Special Accreditation for FfD4: A Significant Step Towards Global Engagement',
    summary: 'The DMUN Foundation is proud to announce its nomination to participate as a civil society stakeholder in the Fourth International Conference on Financing for Development (FfD4).',
    date: '3rd June 2024',
    content: `<strong>FOR IMMEDIATE RELEASE</strong><br/><br/>
<p>DMUN Foundation Secures Special Accreditation for FfD4: A Significant Step Towards Global Engagement</p>
<p>New York City, NY – The DMUN Foundation is proud to announce its nomination by H.E. Dennis Francis, President of the 78th Session of the United Nations General Assembly, to participate as a civil society stakeholder in the Fourth International Conference on Financing for Development (FfD4). This nomination, made under paragraph 4(b) of Resolution 78/271, marks a significant milestone in our commitment to advocating for youth-led initiatives on a global stage.</p>
<p>Special Accreditation and Its Significance</p>
<p>The United Nations has established a process for special accreditation that allows non-governmental organizations (NGOs), civil society organizations (CSOs), academic institutions, and private sector entities to contribute to key conferences like FfD4. This accreditation is crucial for ensuring that a diverse array of voices, particularly those not traditionally included in UN processes, can participate in shaping global policies on financing for development. The procedure involves a nomination from the President of the General Assembly, where the President creates a list of stakeholders that he determines to be of close affiliation and value to the event, and places it under a "non-objective procedure", which will be elaborated below.</p>
<p>For the DMUN Foundation, this special accreditation represents more than just participation; it is a recognition of our ongoing efforts to bring youth perspectives into critical global discussions. Through this platform, we aim to highlight the innovative solutions and unique insights that young people can offer, particularly in addressing the pressing financial challenges that impact sustainable development worldwide.</p>
<p>Understanding the Non-Objective Procedure</p>
<p>The nomination process for FfD4 includes what is known as a "non-objective procedure." This procedure comes after an organization is nominated by the President of the General Assembly, in which the President circulates the list of stakeholder organizations he has selected to all Member States and Observer States, in which it requires unanimous approval. Even one objection from a Member State or a Observer State will completely exclude that organization from the nominated list.</p>
<p>The Importance of Paragraph 4(b) of Resolution 78/271</p>
<p>Paragraph 4(b) of Resolution 78/271 is a key element in enabling the participation of NGOs, CSOs, academic institutions, and the private sector in FfD4. It formally approves their involvement in both the conference and its preparatory processes, recognizing their critical role in shaping the global financing framework for sustainable development. The inclusion of these entities is vital for ensuring that the discussions and outcomes of FfD4 are comprehensive and inclusive, incorporating insights from across different sectors and regions.</p>
<p>DMUN Foundation's Commitment to Global Advocacy</p>
<p>Our participation in FfD4 aligns with the DMUN Foundation's broader mission to empower youth and promote sustainable development through education and advocacy. By engaging directly in this international forum, we are taking a significant step towards influencing global financial policies that affect young people and future generations.</p>
<p>We are committed to using this platform to advocate for policies that prioritize equitable financing, sustainable development, and the empowerment of marginalized communities. The insights and contributions we bring to FfD4 will reflect our deep commitment to creating a more just and sustainable world, where young people are recognized as essential stakeholders in global decision-making processes.</p>
<p>For media inquiries or more information about our participation in FfD4, please Membership:</p>
<p>Department of External Affairs<br/>enquiries@dmun.org</p>
<p>About DMUN Foundation</p>
<p>The DMUN Foundation is a youth-focused nonprofit organization dedicated to providing accessible education in politics, governance, and international relations. We empower young people to become active global citizens through innovative programs, leadership opportunities, and participation in international forums. Our mission is to ensure that the voices of youth are heard in shaping a brighter, more equitable future.</p>`
  },
  {
    id: '3',
    image: '/Article-3.jpeg',
    title: 'COP28 UAE',
    summary: 'Our latest research explores how young people view and engage with digital governance frameworks worldwide.',
    date: 'December 13, 2023',
    content: `<p>Dubai, United Arab Emirates - The DMUN Foundation is thrilled to announce its inaugural participation in COP28 UAE, a significant step in our journey towards active involvement with the United Nations. This milestone marks our first major engagement in the UN's global environmental initiatives, where we will bring the perspectives of youth to the forefront of critical discussions on climate change and sustainability.</p>
<p><strong>Empowering Youth at COP28</p>
<p>At COP28, our delegation, consisting of young leaders from diverse backgrounds, will engage directly with policymakers, experts, and international organizations. Our focus is to ensure that the voices of youth are not only heard but are integral to shaping the policies and strategies that will determine the future of our planet. By participating in this global forum, the DMUN Foundation is fulfilling its mission to empower young people to become active stakeholders in the world's most pressing issues.</p>
<p><strong>Reflecting on Our Experience</p>
<p>Reflecting on our visit to COP28, we are proud to have contributed to meaningful dialogues that address the challenges of climate change. Our representatives participated in various panels, workshops, and roundtable discussions, where they shared innovative ideas and youth-led solutions. The experience reinforced the importance of youth involvement in global decision-making processes and highlighted the critical role that education and empowerment play in fostering a sustainable future.</p>
<p><strong>Looking Ahead</p>
<p>Our participation in COP28 is just the beginning. The DMUN Foundation is committed to continuing its engagement with the United Nations and other international bodies. We will build on the momentum from COP28 to further our efforts in advocating for youth-led initiatives and promoting sustainable development. Our journey towards greater involvement in the REAL UN is a testament to our belief that young people have the power to drive positive change on a global scale.</p>
<p><strong>For media inquiries or more information about our participation in COP28 UAE, please Membership:</p>
<p><strong>Department of External Affairs<br/>enquiries@dmun.org</p>
<p><strong>About DMUN Foundation</p>
<p>The DMUN Foundation is a youth-focused nonprofit organization dedicated to providing accessible education in politics, governance, and international relations. We empower young people to become active global citizens through innovative programs, leadership opportunities, and participation in international forums. Our mission is to ensure that the voices of youth are heard in shaping a brighter, more equitable future.</p>`
  },
  {
    id: '4',
    image: '/Article-4.jpeg',
    title: 'Founder’s Analysis: End of Online MUN?',
    summary: 'An analysis exploring the current decline of online MUNs as in-person conferences regain popularity.',
    date: 'July 22, 2024',
    content: `<strong>FOR IMMEDIATE RELEASE</strong><br/><br/>
<p>Introduction</p>
<p>As the COVID-19 pandemic subsides and life starts to return to a semblance of normalcy, many aspects of our lives are undergoing changes, and the world of Model United Nations (MUN) is no exception. While online MUN conferences played a crucial role in keeping the spirit of diplomacy alive during the pandemic, they now face challenges that could lead to their decline as in-person conferences regain popularity. In this analysis, we will explore the current downfall of online MUNs and the factors contributing to their diminishing allure.</p>
<p>"The shift"</p>
<p>The COVID-19 pandemic disrupted the traditional MUN landscape, prompting organizers to quickly transition to online platforms to continue these essential learning experiences. Online MUN conferences saw a surge in participation as students and organisers adapted to virtual settings to maintain the momentum of global engagement.</p>
<p>Factors to downfall</p>
<p>"Zoom Fatigue" and Virtual Burnout</p>
<p>A major challenge faced during the pandemic was the prevalence of "Zoom fatigue" and virtual burnout. As online learning and virtual meetings became the norm, students increasingly experienced exhaustion from extensive screen time, leading to a lack of enthusiasm for additional virtual commitments like online MUN conferences.</p>
<p>Impersonal Interaction</p>
<p>Online MUNs, while accessible, lack the personal interaction and camaraderie that in-person conferences offer. The spontaneous conversations, networking opportunities, and social bonding that occur during traditional MUN events contribute to the overall MUN experience, and their absence in the virtual setting is keenly felt.</p>
<p>Simulation Realism</p>
<p>While online MUN conferences demonstrated adaptability and creativity, some participants found that the realism of in-person MUN simulations could not be fully replicated online. Physical presence often lends an authentic sense of diplomacy and urgency to the proceedings, which virtual platforms struggle to match.</p>
<p>Time Zone Constraints</p>
<p>Time zone differences have been a significant hurdle for global participants in online MUNs. Coordinating sessions that accommodate diverse time zones can be challenging, affecting the inclusivity and participation of students from certain regions.</p>
<p>The Resurgence of In-Person MUN Conferences</p>
<p>As the world reopens, many students and organizers are eager to return to the cherished experience of in-person MUN conferences. The allure of reconnecting with friends and colleagues, engaging in dynamic face-to-face debates, and exploring new cities enhances the appeal of traditional MUN events.</p>
<p>What's next?</p>
<p>While the current decline of online MUNs is evident, it is essential to recognize their invaluable contributions during challenging times. Online MUNs will likely continue to exist, serving as a supplementary option for those facing logistical constraints or seeking a cost-effective alternative. The future of MUN conferences lies in striking a balance between in-person and online events, offering participants the best of both worlds.</p>
<p>To conclude</p>
<p>As we bid farewell to the height of online MUNs amidst the waning pandemic, it is essential to appreciate the role they played in sustaining global dialogue and learning during unprecedented times. As in-person conferences regain their allure, organizers and participants must envision a future that incorporates both traditional and virtual settings to create a dynamic, inclusive, and enriching MUN experience. By striking this balance, we can preserve the essence of diplomacy while embracing the opportunities that technology provides, ensuring the continued growth and impact of the MUN community in a post-COVID world.</p>`
  },
  {
    id: '5',
    image: 'https://via.placeholder.com/400x200/44b8f3/ffffff?text=Article+Five',
    title: 'DMUN Partners with UNESCO for Educational Outreach',
    summary: 'Details of our new collaboration aimed at expanding educational opportunities for marginalized youth globally.',
    date: 'June 5, 2024',
    content: 'DMUN is proud to announce a new partnership with UNESCO to expand educational opportunities for marginalized youth worldwide. This collaboration will focus on developing innovative educational programs and resources that address the unique needs of underserved communities.\n\n' +
    'The partnership will include:\n' +
    '- Development of digital learning resources\n' +
    '- Teacher training programs\n' +
    '- Community learning centers\n' +
    '- Youth leadership development initiatives\n\n' +
    'This initiative represents a significant step forward in our mission to make quality education accessible to all.'
  },
];

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find(article => article.id === id);

  if (!article) {
    return (
      <ArticleContainer>
        <BackLink to="/newsroom">← Back to Newsroom</BackLink>
        <ArticleTitle>Article Not Found</ArticleTitle>
        <ArticleContent>
          The article you're looking for doesn't exist. Please return to the newsroom to browse our articles.
        </ArticleContent>
      </ArticleContainer>
    );
  }

  return (
    <ArticleContainer>
      <BackLink to="/newsroom">← Back to Newsroom</BackLink>
      <ArticleImage src={article.image} alt={article.title} />
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleDate>{article.date}</ArticleDate>
      <ArticleContent dangerouslySetInnerHTML={{ __html: article.content }} />
    </ArticleContainer>
  );
};

export default ArticlePage; 