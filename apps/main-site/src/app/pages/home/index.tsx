import React from 'react';
import styled from 'styled-components';
import { ActionButton } from '../../components';
import { Heading } from '../../styles/Headers';

const EMAIL = "contact@variationstudio.com"

const Layout = styled.div`
  margin-top: 100px;
`;

const TitleHeading = styled(Heading)`
  max-width: 700px;

  h2 {
    font-weight: 300;
    font-size: 24px;
    max-width: 400px;
  }
`;

const Home: React.FC = () => {
  return (
    <Layout>
      <TitleHeading>
        <h1>Connect your medical practice to the online world.</h1>
        <h2>Setup your website for free. <br /> Build your online presence with us.</h2>
      </TitleHeading>
      <a href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer"><ActionButton outlined={false}>Contact</ActionButton></a>
    </Layout>
  )
}

export default Home;
