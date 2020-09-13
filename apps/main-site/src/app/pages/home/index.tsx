import React from 'react';
import styled, { css } from 'styled-components';
import { ActionButton } from '../../components';

const EMAIL = "contact@variationstudio.com"

const BottomTextStyles = css`
  max-width: 500px;
  width: 100%;
  font-size: 22px;
`;

const Description = styled.p`
  font-weight: 300;
  ${BottomTextStyles}
`;

const Header = styled.h1`
  font-size: 64px;
  font-weight: 600;
  max-width: 600px;
`;

const DescriptionText = "We partner with medical professionals to build beautiful and intuitive websites to amplify their digital presence."

const Home: React.FC = () => {
  return (
    <div>
      <Header>Connect your medical practice to the online world.</Header>
      <Description>{DescriptionText}</Description>
      <a href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer"><ActionButton outlined={false}>Contact</ActionButton></a>
    </div>
  )
}

export default Home;
